/**
 * JavaScript String Property: length
 * ----------------------------------
 * The `length` property returns the number of UTF-16 code units
 * (generally characters) in a string.
 *
 * Syntax:
 *   string.length
 *
 * It is a read-only property.
 */

// Basic Example
const text = "JavaScript";
console.log(text.length); // Output: 10

// Example 1: Length of an empty string
const empty = "";
console.log(empty.length); // Output: 0

// Example 2: Length with whitespace
const spaced = "   hello   ";
console.log(spaced.length); // Output: 11 (includes spaces)

// Example 3: Length of string with special characters
const special = "👍😊🚀";
console.log(special.length); // Output: 6
// Each emoji is represented by 2 UTF-16 code units (so 3 emojis = 6)

// You can see this by using split:
console.log(special.split("").map((char) => char.charCodeAt(0)));
// Output: [55357, 56397, 55357, 56842, 55357, 56960]

// Example 4: Length validation (e.g., password length check)
const password = "abc123";

if (password.length < 8) {
  console.log("Password too short. Minimum 8 characters required.");
} else {
  console.log("Password length is valid.");
}
// Output: Password too short. Minimum 8 characters required.

// Example 5: Limit input length (simulate)
function truncate(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  }
  return str;
}

const longText = "This is a very long string that needs to be truncated.";
console.log(truncate(longText, 20));
// Output: This is a very long ...

// Example 6: Iterate over string by length
const name = "Johns";
for (let i = 0; i < name.length; i++) {
  console.log(`Character at ${i}: ${name[i]}`);
}
// Output:
// Character at 0: J
// Character at 1: 0
// Character at 2: h
// Character at 3: n
// Character at 4: s

// Summary:
// - `length` returns the total number of UTF-16 code units in the string.
// - Whitespace, special characters, and emojis count toward length.
// - It’s useful for validation, iteration, truncation, and more.
