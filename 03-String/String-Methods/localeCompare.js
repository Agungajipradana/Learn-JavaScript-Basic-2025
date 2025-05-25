/**
 * JavaScript String Method: localeCompare()
 * ------------------------------------------
 * The `localeCompare()` method compares two strings in the current locale.
 * It returns:
 *   - a negative number if the reference string comes before the compared string,
 *   - 0 if they are equivalent,
 *   - a positive number if the reference string comes after the compared string.
 *
 * Syntax:
 *   str1.localeCompare(str2, [locales], [options])
 */

// Example 1: Basic alphabetical comparison
const a = "apple";
const b = "banana";

console.log(a.localeCompare(b)); // Output: -1 (apple comes before banana)
console.log(b.localeCompare(a)); // Output: 1  (banana comes after apple)
console.log(a.localeCompare("apple")); // Output: 0 (same strings)

// Example 2: Case sensitivity (default behavior)
const upper = "Zebra";
const lower = "zebra";

console.log(upper.localeCompare(lower));
// Output: -1 or 1 depending on browser/locale (capital letters may sort before lowercase)

// Example 3: Case-insensitive comparison using options
console.log(upper.localeCompare(lower, undefined, { sensitivity: "base" }));
// Output: 0 (case is ignored)

// Example 4: Locale-aware comparison (e.g., German umlaut)
const german1 = "ä";
const german2 = "z";

console.log(german1.localeCompare(german2, "de"));
// Output: -1 (ä comes before z in German)

// Different result in Swedish
console.log(german1.localeCompare(german2, "sv"));
// Output: 1 (ä comes after z in Swedish)

// Example 5: Sorting an array with localeCompare
const items = ["ä", "z", "a"];
const sorted = items.sort((x, y) => x.localeCompare(y, "de"));
console.log(sorted);
// Output (German order): ["a", "ä", "z"]

// Example 6: Sorting with case-insensitive and accent-insensitive options
const words = ["résumé", "resume", "Resume", "Résumé"];

const sortedWords = words.sort((a, b) =>
  a.localeCompare(b, undefined, { sensitivity: "base" })
);
console.log(sortedWords);
// Output: [ 'resume', 'Resume', 'résumé', 'Résumé' ] — order may vary by locale

// Summary:
// - localeCompare() helps you compare strings correctly for human languages.
// - Useful for sorting lists, comparing strings in different languages/locales.
// - Use options to control case, accent, or locale-specific sorting.
