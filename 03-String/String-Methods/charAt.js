/**
 * JavaScript String Method: charAt()
 * ----------------------------------
 * The `charAt()` method returns the character at a specific index in a string.
 *
 * Syntax:
 *   string.charAt(index)
 *
 * - `index`: A zero-based integer that specifies the position of the character.
 * - Returns an empty string ("") if the index is out of range.
 */

// Basic usage
const text = "JavaScript";

console.log(text.charAt(0)); // Output: "J"
console.log(text.charAt(4)); // Output: "S"
console.log(text.charAt(100)); // Output: "" (index out of range)

// Example 1: Looping through each character in a string using charAt()
for (let i = 0; i < text.length; i++) {
  console.log(text.charAt(i)); // Output: prints each character in "JavaScript"
}

// Example 2: Capitalizing the first letter of each word in a sentence
function capitalizeWords(sentence) {
  const words = sentence.split(" ");
  const capitalized = words.map((word) => {
    if (word.length === 0) return word; // handle empty words
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalized.join(" ");
}

const sentence = "javascript is fun to learn!";
console.log(capitalizeWords(sentence));
// Output: "Javascript Is Fun To Learn!"

// Example 3: Count occurrences of a specific character (case-insensitive)
function countChar(str, targetChar) {
  let count = 0;
  const lowerTarget = targetChar.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i).toLowerCase() === lowerTarget) {
      count++;
    }
  }

  return count;
}

const input = "JavaScript is Just Super!";
console.log(countChar(input, "j"));
// Output: 2 (found 'J' and 'j')

// Example 4: Masking all characters except the last 4 (e.g., for credit card)
function maskString(str) {
  const visiblePart = str.slice(-4);
  let masked = "";
  for (let i = 0; i < str.length - 4; i++) {
    masked += "*";
  }
  return masked + visiblePart;
}

console.log(maskString("1234567890123456"));
// Output: "************3456"

// Summary:
// - charAt(index) returns the character at the given position
// - It's useful for string traversal, transformation, and character-based logic
// - Returns an empty string if index is out of range
