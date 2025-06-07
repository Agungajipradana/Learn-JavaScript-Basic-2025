// ============================================
// ARRAY METHOD: reverse()
// ============================================
// The `reverse()` method reverses the elements of an array **in place**.
// It mutates the original array and returns the same array reversed.

// ============================================
// Example 1: Simple reversal of numbers
// ============================================
const nums = [1, 2, 3, 4, 5];
nums.reverse();

console.log("Reversed nums:", nums);
// Output: [5, 4, 3, 2, 1]
// The original array is now reversed.

// ============================================
// Example 2: Reversing an array of strings
// ============================================
const letters = ["a", "b", "c", "d"];
letters.reverse();

console.log("Reversed letters:", letters);
// Output: ['d', 'c', 'b', 'a']

// ============================================
// Example 3: Reversing a copy to keep original intact
// ============================================
const original = [1, 2, 3];
const reversedCopy = [...original].reverse(); // using spread to clone

console.log("Original:", original); // [1, 2, 3]
console.log("Reversed Copy:", reversedCopy); // [3, 2, 1]

// ============================================
// Example 4: Reversing array of objects
// ============================================
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

users.reverse();

console.log("Users reversed:", users);
// Output:
// [
//   { id: 3, name: 'Charlie' },
//   { id: 2, name: 'Bob' },
//   { id: 1, name: 'Alice' }
// ]

// ============================================
// Example 5: Reversing words in a sentence
// ============================================
const sentence = "JavaScript is awesome";
const reversedWords = sentence.split(" ").reverse().join(" ");

console.log("Reversed words:", reversedWords);
// Output: "awesome is JavaScript"

// ============================================
// Example 6: Palindrome check using reverse()
// ============================================
function isPalindrome(str) {
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = normalized.split("").reverse().join("");
  return normalized === reversed;
}

console.log("Is 'madam' a palindrome?", isPalindrome("madam")); // true
console.log("Is 'Hello' a palindrome?", isPalindrome("Hello")); // false
console.log(
  "Is 'A man, a plan, a canal, Panama' a palindrome?",
  isPalindrome("A man, a plan, a canal, Panama")
); // true

// ============================================
// Example 7: Reversing nested arrays
// ============================================
const nested = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const reversedNested = nested.reverse();

console.log("Reversed nested array:", reversedNested);
// Output: [ [5, 6], [3, 4], [1, 2] ]
