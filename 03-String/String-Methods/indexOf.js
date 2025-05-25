/**
 * JavaScript String Method: indexOf()
 * ------------------------------------
 * The `indexOf()` method returns the index of the **first occurrence**
 * of the specified substring in a string.
 * 
 * Syntax:
 *   str.indexOf(searchValue, fromIndex)
 * 
 * Parameters:
 * - searchValue: The substring to search for.
 * - fromIndex (optional): The position to start the search from.
 * 
 * Returns:
 * - The index of the first match, or -1 if not found.
 */

// Basic Example
const text = "JavaScript is awesome";
console.log(text.indexOf("Script")); // Output: 4
console.log(text.indexOf("script")); // Output: -1 (case-sensitive)
console.log(text.indexOf("awesome")); // Output: 14


// Example 1: Search from a specific index
const phrase = "The quick brown fox jumps over the lazy dog";

console.log(phrase.indexOf("the"));        // Output: 31 (only finds lowercase "the")
console.log(phrase.indexOf("the", 10));    // Output: 31
console.log(phrase.indexOf("The"));        // Output: 0
console.log(phrase.indexOf("The", 1));     // Output: -1


// Example 2: Find all occurrences of a word using indexOf in a loop
const sentence = "This is a test. This test is only a test.";
const keyword = "test";

let index = sentence.indexOf(keyword);
while (index !== -1) {
  console.log(`'${keyword}' found at index ${index}`);
  index = sentence.indexOf(keyword, index + keyword.length);
}

// Output:
// 'test' found at index 10
// 'test' found at index 21
// 'test' found at index 36


// Example 3: Use indexOf for simple validation
const email = "user@example.com";

if (email.indexOf("@") === -1) {
  console.log("Invalid email address: missing @ symbol.");
} else {
  console.log("Email format looks valid.");
}
// Output: Email format looks valid.


// Example 4: Case-insensitive indexOf search
const sentence2 = "JavaScript is Fun!";
const search = "fun";

const position = sentence2.toLowerCase().indexOf(search.toLowerCase());
console.log(position); // Output: 15


// Example 5: Checking for multiple potential keywords
const log = "Warning: Disk space is low.";
const keywords = ["error", "fail", "warning"];

const matchedKeyword = keywords.find(word => log.toLowerCase().indexOf(word) !== -1);

if (matchedKeyword) {
  console.log(`Log contains keyword: ${matchedKeyword}`);
} else {
  console.log("No important keyword found.");
}
// Output: Log contains keyword: warning


// Summary:
// - `indexOf()` is case-sensitive.
// - Returns -1 if substring is not found.
// - You can use a loop to find all occurrences.
// - Useful for searching, validating, and parsing strings.
