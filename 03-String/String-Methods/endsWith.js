/**
 * JavaScript String Method: endsWith()
 * ------------------------------------
 * The `endsWith()` method determines whether a string ends with the specified characters.
 *
 * Syntax:
 *   str.endsWith(searchString, [length])
 *
 * Parameters:
 * - searchString: The string to search for at the end of the main string.
 * - length (optional): As if the string were only this long.
 *
 * Returns:
 * - true if the string ends with the given searchString
 * - false otherwise
 */

// Basic example
const text = "JavaScript is awesome";

console.log(text.endsWith("awesome")); // true
console.log(text.endsWith("is")); // false

// Example 1: Using the optional `length` parameter
const filename = "report.pdf";

// Check if the file ends with ".pdf"
console.log(filename.endsWith(".pdf")); // true

// Pretend the string is only 10 characters: "report.pd"
console.log(filename.endsWith(".pdf", 10)); // false

// Example 2: Validating file extensions
function isValidExtension(fileName, extension) {
  return fileName.endsWith(extension);
}

console.log(isValidExtension("image.jpeg", ".jpeg")); // true
console.log(isValidExtension("notes.txt", ".docx")); // false

// Example 3: Filtering strings in an array that end with a specific word
const phrases = [
  "Learn JavaScript",
  "I love TypeScript",
  "JavaScript",
  "TypeScript",
  "Script",
];

const endsWithScript = phrases.filter((p) => p.endsWith("Script"));
console.log(endsWithScript);
// Output: ["JavaScript", "TypeScript", "Script"]

// Example 4: Case-sensitive behavior
const value = "HelloWorld";

console.log(value.endsWith("world")); // false (case-sensitive)
console.log(value.endsWith("World")); // true

// Example 5: Chained with other string methods
const sentence = "This is a secure URL: https://example.com";

const isSecure = sentence.split(" ").pop().endsWith(".com");

console.log(isSecure); // true

// Summary:
// - endsWith() is case-sensitive.
// - Optional `length` parameter can shorten the checked portion.
// - Useful for file validation, string filtering, and secure checks.
