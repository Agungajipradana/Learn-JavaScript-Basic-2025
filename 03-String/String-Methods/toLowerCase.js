/**
 * JavaScript String Method: toLowerCase()
 * ---------------------------------------
 * The `toLowerCase()` method converts a string to lowercase letters.
 * It does not change the original string (strings are immutable).
 *
 * Syntax:
 *   str.toLowerCase()
 */

// Example 1: Basic usage
const greeting = "HELLO WORLD";
console.log(greeting.toLowerCase()); // Output: "hello world"

// Example 2: Original string remains unchanged
console.log(greeting); // Output: "HELLO WORLD"

// Example 3: Normalizing user input for comparison (e.g., login form)
const savedUsername = "admin";
const inputUsername = "AdMiN";

if (savedUsername === inputUsername.toLowerCase()) {
  console.log("Username matched!"); // Output: "Username matched!"
} else {
  console.log("Invalid username.");
}

// Example 4: Case-insensitive keyword search
const article = "JavaScript is Versatile!";
const keyword = "javascript";

const found = article.toLowerCase().includes(keyword.toLowerCase());
console.log(found); // Output: true

// Example 5: Cleaning and formatting full sentence
const messy = "ThiS Is A MESSY SeNTENce.";
const cleaned = messy.toLowerCase();
console.log(cleaned); // Output: "this is a messy sentence."

// Example 6: Counting how many times a word appears, case-insensitively
const paragraph = "Cat, cat, CAT! Cats are great.";
const words = paragraph.toLowerCase().split(/\W+/);
const count = words.filter((word) => word === "cat").length;
console.log(count); // Output: 3

// Example 7: Converting mixed-case object keys
const userData = {
  UserName: "Alice",
  Email: "Alice@Example.com",
};
const normalizedKeys = Object.keys(userData).map((key) => key.toLowerCase());
console.log(normalizedKeys); // Output: ["username", "email"]

// Summary:
// - `toLowerCase()` is useful for case-insensitive comparison, search, and data normalization.
// - It returns a new string and does not alter the original one.
