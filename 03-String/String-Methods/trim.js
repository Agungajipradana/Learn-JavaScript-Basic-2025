/**
 * JavaScript String Method: trim()
 * --------------------------------
 * The `trim()` method removes whitespace from both ends of a string.
 * It does not affect whitespace in the middle of the string.
 *
 * Syntax:
 *   str.trim()
 */

// Example 1: Basic usage
const greeting = "   Hello World!   ";
const trimmedGreeting = greeting.trim();
console.log(trimmedGreeting); // Output: "Hello World!"

// Example 2: Confirm immutability
console.log(greeting); // Output: "   Hello World!   " (original string is not modified)

// Example 3: Trimming user input before comparison
const userInput = "   admin   ";
if (userInput.trim() === "admin") {
  console.log("Login accepted"); // Output: "Login accepted"
}

// Example 4: Removing whitespace from form input fields
const formInput = "   myemail@example.com   ";
const cleanEmail = formInput.trim();
console.log(cleanEmail); // Output: "myemail@example.com"

// Example 5: Trim before checking length
const rawName = "     ";
if (rawName.trim().length === 0) {
  console.log("Name cannot be empty"); // Output: "Name cannot be empty"
}

// Example 6: Use with chained methods
const messy = "    Hello JavaScript!    ";
const result = messy.trim().toUpperCase();
console.log(result); // Output: "HELLO JAVASCRIPT!"

// Example 7: Trim in array map (useful in processing CSV data)
const csv = " apple , banana ,  mango ,   orange ";
const cleanedArray = csv.split(",").map((item) => item.trim());
console.log(cleanedArray);
// Output: ["apple", "banana", "mango", "orange"]

// Summary:
// - `trim()` removes whitespace only from the start and end of a string.
// - Commonly used for input sanitation, validation, and normalization.
// - It returns a **new string** (strings are immutable).
