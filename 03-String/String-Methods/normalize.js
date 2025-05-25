/**
 * JavaScript String Method: normalize()
 * -------------------------------------
 * The `normalize()` method returns the Unicode Normalization Form of a given string.
 * It is mainly used to ensure that characters with accents or diacritics are represented consistently.
 *
 * Syntax:
 *   str.normalize([form])
 *
 * The `form` parameter can be:
 * - "NFC" (default): Canonical Composition
 * - "NFD": Canonical Decomposition
 * - "NFKC": Compatibility Composition
 * - "NFKD": Compatibility Decomposition
 *
 * Why it's important:
 * Some characters can be represented in multiple ways in Unicode.
 * `normalize()` helps unify those representations so comparisons and searches work reliably.
 */

// Example 1: Compare two visually identical but differently encoded strings
const str1 = "\u00e9"; // "é" as a single character (U+00E9)
const str2 = "e\u0301"; // "e" + combining acute accent (U+0065 + U+0301)

console.log(str1 === str2); // Output: false (different encoding)
console.log(str1.normalize() === str2.normalize());
// Output: true (normalized to same representation)

// Example 2: Normalize to NFD (decompose accented characters)
const nfc = "é"; // single composed character
const nfd = nfc.normalize("NFD");
console.log(nfd);
// Output: é (two characters: 'e' and a combining accent)

console.log(nfd.length); // Output: 2 (decomposed to two code points)

// Example 3: Normalize file names (common in macOS)
const fileName1 = "résumé.txt"; // U+00E9 (é)
const fileName2 = "résumé.txt"; // U+0065 + U+0301

console.log(fileName1 === fileName2); // Output: false
console.log(fileName1.normalize() === fileName2.normalize()); // Output: true

// Example 4: Sort list of names with accents reliably
const names = ["éclair", "Eclair", "école", "Émile"];
const sorted = names.sort((a, b) =>
  a.normalize("NFD").localeCompare(b.normalize("NFD"))
);
console.log(sorted);
// Output: [ 'éclair', 'école', 'Émile', 'Eclair' ] (depends on locale, accents treated equally)

// Example 5: Normalize before string matching
const input = "Café";
const search = "Cafe\u0301"; // "e" + combining acute accent

console.log(input.includes(search)); // Output: false
console.log(input.normalize() === search.normalize()); // Output: true

// Summary:
// - `normalize()` ensures consistent Unicode representation.
// - Useful for text comparison, searching, and sorting, especially with accented characters.
// - Common use cases: filenames, user input, internationalization, and text search.
