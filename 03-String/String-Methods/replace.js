/**
 * JavaScript String Method: replace()
 * -----------------------------------
 * The `replace()` method returns a new string with some or all matches of a pattern replaced by a replacement.
 * The pattern can be a string or a RegExp, and the replacement can be a string or a function to generate the replacement.
 *
 * Syntax:
 *   str.replace(searchValue, replaceValue)
 *
 * Parameters:
 * - searchValue: The substring or RegExp to search for.
 * - replaceValue: The string or function to replace the matched substring.
 *
 * Returns:
 * - A new string with replacements applied.
 *
 * Notes:
 * - By default, `replace()` replaces only the first occurrence if searchValue is a string.
 * - To replace all occurrences, use a global RegExp or `replaceAll()` method (ES2021+).
 */

// Example 1: Simple replacement of first occurrence using string
const text1 = "Hello World, World!";
const replaced1 = text1.replace("World", "JS");
console.log(replaced1);
// Output: "Hello JS, World!" (only first "World" replaced)

// Example 2: Replace first occurrence using RegExp (case-sensitive)
const text2 = "cat bat rat";
const replaced2 = text2.replace(/bat/, "dog");
console.log(replaced2);
// Output: "cat dog rat"

// Example 3: Replace all occurrences using global RegExp
const text3 = "foo bar foo baz foo";
const replaced3 = text3.replace(/foo/g, "qux");
console.log(replaced3);
// Output: "qux bar qux baz qux"

// Example 4: Replace using a function for dynamic replacements
const text4 = "apples are 5, bananas are 10";
const replaced4 = text4.replace(/\d+/g, (match) => {
  return String(Number(match) * 2);
});
console.log(replaced4);
// Output: "apples are 10, bananas are 20"

// Example 5: Case-insensitive replacement using RegExp with 'i' flag
const text5 = "JavaScript is fun. javascript is versatile.";
const replaced5 = text5.replace(/javascript/i, "JS");
console.log(replaced5);
// Output: "JS is fun. javascript is versatile." (only first match, case-insensitive)

// Example 6: Replace special characters with escape sequences
const html = "<div>Hello</div>";
const replaced6 = html.replace(/</g, "&lt;");
console.log(replaced6);
// Output: "&lt;div>Hello&lt;/div>"

// Example 7: Using replace with capture groups
const date = "2025-05-25";
const formattedDate = date.replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1");
console.log(formattedDate);
// Output: "25/05/2025"

// Example 8: Using a function with capture groups
const names = "John Doe, Jane Smith";
const swappedNames = names.replace(/(\w+) (\w+)/g, (match, p1, p2) => {
  return `${p2}, ${p1}`;
});
console.log(swappedNames);
// Output: "Doe, John, Smith, Jane"

// Summary:
// - `replace()` replaces the first match by default if using string or RegExp without global flag.
// - Use global RegExp (/pattern/g) or `replaceAll()` to replace all matches.
// - Replacement can be a string or a function for dynamic replacements.
// - Supports capture groups for reordering or formatting.
