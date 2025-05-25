/**
 * JavaScript String Method: includes()
 * ------------------------------------
 * The `includes()` method checks whether a string contains a specified substring.
 *
 * Syntax:
 *   str.includes(searchString, position)
 *
 * Parameters:
 * - searchString: The substring to search for.
 * - position (optional): The position in the string at which to begin the search. Default is 0.
 *
 * Returns:
 * - true if the string contains the specified substring
 * - false otherwise
 */

// Basic example
const text = "JavaScript is powerful";

console.log(text.includes("power")); // true
console.log(text.includes("Power")); // false (case-sensitive)

// Example 1: Using the position parameter
const message = "Welcome to JavaScript world";

// Start search from index 11 (i.e., skip "Welcome to ")
console.log(message.includes("JavaScript", 11)); // true
console.log(message.includes("Welcome", 1)); // false

// Example 2: Case-sensitive search in user input
function containsForbiddenWord(input, word) {
  return input.toLowerCase().includes(word.toLowerCase());
}

console.log(containsForbiddenWord("You are a great person", "Great")); // true
console.log(containsForbiddenWord("Just okay", "bad")); // false

// Example 3: Search multiple keywords using includes()
const keywords = ["error", "fail", "critical"];
const log = "System report: All processes failed due to timeout.";

const found = keywords.some((keyword) => log.toLowerCase().includes(keyword));
console.log(found); // true

// Example 4: Filtering an array based on keyword presence
const articles = [
  "Understanding JavaScript Closures",
  "Intro to Python",
  "JavaScript Array Methods",
  "Advanced CSS Techniques",
];

const jsArticles = articles.filter((title) => title.includes("JavaScript"));
console.log(jsArticles);
// Output: ["Understanding JavaScript Closures", "JavaScript Array Methods"]

// Example 5: Check for multiple occurrences using includes in a loop
const sentence = "The rain in Spain stays mainly in the plain.";
const search = "in";
let count = 0;
let pos = 0;

while ((pos = sentence.indexOf(search, pos)) !== -1) {
  count++;
  pos += search.length;
}

console.log(`'${search}' appears ${count} times.`);
// Output: 'in' appears 4 times.

// Summary:
// - includes() is case-sensitive.
// - Can start search from a custom index.
// - Very useful for keyword search, filtering, validation, etc.
