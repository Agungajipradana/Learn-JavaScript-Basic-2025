/**
 * JavaScript String Method: charCodeAt()
 * ---------------------------------------
 * The `charCodeAt()` method returns the Unicode (UTF-16 code unit) of the character at the specified index in a string.
 *
 * Syntax:
 *   string.charCodeAt(index)
 *
 * - `index`: A zero-based position of the character in the string.
 * - Returns a number representing the UTF-16 code unit at the index.
 * - Returns NaN if index is out of range.
 */

// Basic usage
const text = "JavaScript";

console.log(text.charCodeAt(0)); // Output: 74 ('J')
console.log(text.charCodeAt(4)); // Output: 83 ('S')
console.log(text.charCodeAt(100)); // Output: NaN (index out of range)

// Example 1: Print all character codes of a string
for (let i = 0; i < text.length; i++) {
  console.log(`${text.charAt(i)} = ${text.charCodeAt(i)}`);
  // Output: character = Unicode code (e.g., J = 74, a = 97, ...)
}

// Example 2: Encode a string into an array of character codes
function encodeToCharCodes(str) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(str.charCodeAt(i));
  }
  return result;
}

const encoded = encodeToCharCodes("Hello!");
console.log(encoded);
// Output: [72, 101, 108, 108, 111, 33]

// Example 3: Detect non-ASCII characters in a string
function containsNonASCII(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 127) {
      return true;
    }
  }
  return false;
}

console.log(containsNonASCII("normal text")); // Output: false
console.log(containsNonASCII("café")); // Output: true (é has code 233)

// Example 4: Calculate simple checksum using charCodeAt
function stringChecksum(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }
  return sum;
}

console.log(stringChecksum("abc")); // Output: 294 (97 + 98 + 99)

// Summary:
// - `charCodeAt(index)` returns the UTF-16 numeric code of a character at a given index.
// - Returns NaN if the index is out of range.
// - Useful for encoding, character analysis, validation, and checksum operations.
