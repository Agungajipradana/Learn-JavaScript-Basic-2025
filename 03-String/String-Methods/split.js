/**
 * JavaScript String Method: split()
 * ----------------------------------
 * The split() method splits a string into an array of substrings based on a specified separator.
 * It returns a new array and does not modify the original string.
 *
 * Syntax:
 *   str.split(separator, limit)
 *
 * Parameters:
 * - separator: The pattern (string or RegExp) describing where each split should occur.
 * - limit (optional): A non-negative integer that limits the number of substrings in the result.
 */

// Example 1: Basic usage with a comma separator
const fruits = "apple,banana,grape";
const fruitArray = fruits.split(",");
console.log(fruitArray); // Output: ["apple", "banana", "grape"]

// Example 2: Split a sentence into words
const sentence = "The quick brown fox";
const words = sentence.split(" ");
console.log(words); // Output: ["The", "quick", "brown", "fox"]

// Example 3: Split into characters
const word = "hello";
const chars = word.split("");
console.log(chars); // Output: ["h", "e", "l", "l", "o"]

// Example 4: Using a limit
const text = "one two three four";
const limited = text.split(" ", 2);
console.log(limited); // Output: ["one", "two"]

// Example 5: Splitting by regular expression (split by one or more spaces)
const messy = "apple    orange banana   grape";
const cleaned = messy.split(/\s+/);
console.log(cleaned); // Output: ["apple", "orange", "banana", "grape"]

// Example 6: Splitting a CSV line
const csv = "John,Doe,30,New York";
const values = csv.split(",");
console.log(values); // Output: ["John", "Doe", "30", "New York"]

// Example 7: Split a string and remove empty strings using filter
const messyString = "red,,green,,blue";
const cleanedArray = messyString.split(",").filter(Boolean);
console.log(cleanedArray); // Output: ["red", "green", "blue"]

// Example 8: Extracting domain parts from URL
const url = "https://www.example.com/page";
const parts = url.split("/");
console.log(parts);
// Output: ["https:", "", "www.example.com", "page"]

// Example 9: Extract username and domain from email
const email = "user@example.com";
const [user, domain] = email.split("@");
console.log(user); // Output: "user"
console.log(domain); // Output: "example.com"

// Summary:
// - split() is useful for converting strings into arrays for further processing.
// - You can split using characters, substrings, or regular expressions.
// - The limit parameter allows partial splitting.
