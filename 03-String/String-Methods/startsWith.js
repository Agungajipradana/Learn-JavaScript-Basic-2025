/**
 * JavaScript String Method: startsWith()
 * --------------------------------------
 * The `startsWith()` method checks if a string starts with a specific sequence of characters.
 * It returns `true` if the string begins with the specified characters, otherwise it returns `false`.
 *
 * Syntax:
 *   str.startsWith(searchString, position)
 *
 * Parameters:
 * - searchString: The string to search for at the start of the main string.
 * - position (optional): The position in the string at which to begin searching. Default is 0.
 */

// Example 1: Basic usage
const greeting = "Hello, world!";
console.log(greeting.startsWith("Hello")); // true
console.log(greeting.startsWith("World")); // false

// Example 2: Case sensitivity
console.log(greeting.startsWith("hello")); // false (case-sensitive)

// Example 3: Using position parameter
console.log(greeting.startsWith("world", 7)); // true

// Example 4: Checking file type prefix
const filename = "image.png";
console.log(filename.startsWith("img")); // false
console.log(filename.startsWith("image")); // true

// Example 5: Validating protocol in URL
const url = "https://www.example.com";
if (url.startsWith("https://")) {
  console.log("Secure connection detected."); // Output: Secure connection detected.
} else {
  console.log("Non-secure connection.");
}

// Example 6: Detecting command prefix in a chat bot
const message = "!help me please";
if (message.startsWith("!")) {
  console.log("Command detected."); // Output: Command detected.
} else {
  console.log("Regular message.");
}

// Example 7: Checking for BOM (Byte Order Mark) in a string
const textWithBOM = "\uFEFFSome text";
console.log(textWithBOM.startsWith("\uFEFF")); // true

// Summary:
// - startsWith() is useful for validation, filtering, and parsing.
// - It's case-sensitive and can start from any position in the string using the optional `position` parameter.
