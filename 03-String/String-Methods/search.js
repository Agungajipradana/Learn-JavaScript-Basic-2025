/**
 * JavaScript String Method: search()
 * ----------------------------------
 * The `search()` method executes a search for a match between a regular expression and the calling string.
 * It returns the index of the first match, or -1 if no match is found.
 *
 * Syntax:
 *   str.search(regexp)
 *
 * Parameters:
 * - regexp: A regular expression object. If a non-RegExp value is passed, it is implicitly converted to RegExp.
 *
 * Returns:
 * - Index (Number) of the first match, or -1 if not found.
 *
 * Note:
 * - Case-sensitive
 * - Only returns the first match index
 */

// Example 1: Basic usage
const str1 = "The quick brown fox jumps over the lazy dog";
console.log(str1.search("quick"));
// Output: 4 — 'quick' starts at index 4

// Example 2: Case sensitivity
console.log(str1.search("Quick"));
// Output: -1 — 'Quick' (capital Q) not found because search is case-sensitive

// Example 3: Using RegExp
console.log(str1.search(/fox/));
// Output: 16 — 'fox' starts at index 16

// Example 4: Searching using RegExp with ignore case (i)
console.log(str1.search(/FOX/i));
// Output: 16 — case-insensitive match for 'FOX'

// Example 5: Searching for whitespace character
console.log(str1.search(/\s/));
// Output: 3 — the first whitespace is after 'The'

// Example 6: Match any vowel
const str2 = "XYZabc123";
console.log(str2.search(/[aeiou]/));
// Output: 3 — 'a' is the first vowel at index 3

// Example 7: Match a digit
console.log(str2.search(/\d/));
// Output: 6 — '1' is the first digit at index 6

// Example 8: Check for absence of pattern
console.log(str2.search(/[A-Z]{5}/));
// Output: -1 — No 5 consecutive uppercase letters found

// Example 9: With dynamic RegExp from string (user input scenario)
const userInput = "hello@example.com";
const pattern = new RegExp("@");
console.log(userInput.search(pattern));
// Output: 5 — '@' found at index 5

// Summary:
// - search() is useful for finding the position of the first regex match in a string.
// - For more complex searches and replacements, consider using match(), replace(), or matchAll().
