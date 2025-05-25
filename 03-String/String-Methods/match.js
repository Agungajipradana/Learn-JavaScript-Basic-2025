/**
 * JavaScript String Method: match()
 * ----------------------------------
 * The `match()` method retrieves the result of matching a string against a regular expression.
 *
 * Syntax:
 *   str.match(regexp)
 *
 * It returns:
 * - An array of matches if the regular expression has the global flag (`/g`)
 * - Otherwise, it returns an array with information about the first match (or null if no match)
 */

// Example 1: Basic match for a word
const text = "JavaScript is fun!";
const result1 = text.match(/fun/);
console.log(result1);
// Output: [ 'fun', index: 14, input: 'JavaScript is fun!', groups: undefined ]

// Example 2: Case-sensitive match (default)
const result2 = text.match(/Fun/);
console.log(result2);
// Output: null (case-sensitive, so "Fun" != "fun")

// Example 3: Case-insensitive match using /i flag
const result3 = text.match(/Fun/i);
console.log(result3);
// Output: [ 'fun', index: 14, input: 'JavaScript is fun!', groups: undefined ]

// Example 4: Match all vowels using global flag
const vowels = "This is a test sentence with vowels.";
const result4 = vowels.match(/[aeiou]/g);
console.log(result4);
// Output: [ 'i', 'i', 'a', 'e', 'e', 'e', 'i', 'o', 'e' ]

// Example 5: Match all digits
const numbers = "Order ID: 12345, Ref: 67890";
const digits = numbers.match(/\d+/g);
console.log(digits);
// Output: [ '12345', '67890' ]

// Example 6: Match words (complex use with word boundaries)
const sentence = "Welcome to the world of JavaScript.";
const words = sentence.match(/\b\w+\b/g);
console.log(words);
// Output: [ 'Welcome', 'to', 'the', 'world', 'of', 'JavaScript' ]

// Example 7: Match using capturing groups
const date = "2025-05-25";
const matchDate = date.match(/(\d{4})-(\d{2})-(\d{2})/);
console.log(matchDate);
// Output:
// [
//   '2025-05-25',
//   '2025',   // Group 1 (Year)
//   '05',     // Group 2 (Month)
//   '25',     // Group 3 (Day)
//   index: 0,
//   input: '2025-05-25',
//   groups: undefined
// ]

// Example 8: No match returns null
const noMatch = "Hello, world!".match(/Python/);
console.log(noMatch);
// Output: null

// Summary:
// - `match()` is useful for finding patterns in strings using regular expressions.
// - Without `/g` flag, it returns the first match info.
// - With `/g`, it returns all matches in an array.
// - Use flags like `/i` for case-insensitive or `/g` for multiple results.
