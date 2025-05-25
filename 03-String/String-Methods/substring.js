/**
 * JavaScript String Method: substring()
 * -------------------------------------
 * The `substring()` method returns a portion of the string between two specified indices.
 * It extracts characters from the start index up to, but not including, the end index.
 *
 * Syntax:
 *   str.substring(startIndex, endIndex)
 *
 * Notes:
 * - If startIndex > endIndex, the method swaps the two.
 * - Negative values are treated as 0.
 */

// Example 1: Basic usage
const text = "JavaScript";
console.log(text.substring(0, 4)); // Output: "Java"
console.log(text.substring(4, 10)); // Output: "Script"

// Example 2: Omitting endIndex extracts to the end of the string
console.log(text.substring(4)); // Output: "Script"

// Example 3: Reversed indices (swapped automatically)
console.log(text.substring(10, 4)); // Output: "Script"

// Example 4: Negative index treated as 0
console.log(text.substring(-3, 4)); // Output: "Java"

// Example 5: Extract domain from email
const email = "user@example.com";
const domain = email.substring(email.indexOf("@") + 1);
console.log(domain); // Output: "example.com"

// Example 6: Masking part of a phone number
const phone = "08123456789";
const masked = phone.substring(0, 3) + "****" + phone.substring(7);
console.log(masked); // Output: "081****6789"

// Example 7: Extracting first name from full name
const fullName = "John Michael Doe";
const spaceIndex = fullName.indexOf(" ");
const firstName = fullName.substring(0, spaceIndex);
console.log(firstName); // Output: "John"

// Example 8: Handle swapped or unexpected inputs
function safeSubstring(str, start, end) {
  return str.substring(Math.max(0, Math.min(start, end)), Math.max(start, end));
}
console.log(safeSubstring("developer", 6, 2)); // Output: "velo"

// Summary:
// - `substring()` is ideal for extracting parts of a string.
// - It differs from `slice()` in how it handles negative values and swapped indices.
