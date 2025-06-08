// =======================================
// FOR...OF LOOP IN JAVASCRIPT
// =======================================

// --------------------------------------------------
// 1. Basic for...of Loop with Array
// --------------------------------------------------
// for...of is used to iterate over iterable objects (like arrays, strings, maps, sets).
const colors = ["red", "green", "blue"];

for (const color of colors) {
  console.log("Color:", color);
}
// Output:
// Color: red
// Color: green
// Color: blue

// --------------------------------------------------
// 2. Iterating Over a String
// --------------------------------------------------
// Each character of the string is iterated.
const word = "hello";

for (const char of word) {
  console.log("Character:", char);
}
// Output:
// Character: h
// Character: e
// Character: l
// Character: l
// Character: o

// --------------------------------------------------
// 3. Using for...of with Set
// --------------------------------------------------
// Sets store unique values; for...of can loop over them easily.
const uniqueNumbers = new Set([1, 2, 3, 2, 1]);

for (const num of uniqueNumbers) {
  console.log("Unique number:", num);
}
// Output:
// Unique number: 1
// Unique number: 2
// Unique number: 3

// --------------------------------------------------
// 4. Using for...of with Map
// --------------------------------------------------
// for...of iterates Map entries as [key, value] pairs.
const userMap = new Map([
  ["name", "Alice"],
  ["age", 30],
  ["isAdmin", true],
]);

for (const [key, value] of userMap) {
  console.log(`${key}: ${value}`);
}
// Output:
// name: Alice
// age: 30
// isAdmin: true

// --------------------------------------------------
// 5. Looping with Index - Using entries()
// --------------------------------------------------
// For getting index in arrays with for...of, use array.entries().
const fruits = ["apple", "banana", "cherry"];

for (const [index, fruit] of fruits.entries()) {
  console.log(`Index ${index}: ${fruit}`);
}
// Output:
// Index 0: apple
// Index 1: banana
// Index 2: cherry

// --------------------------------------------------
// 6. Nested for...of Loops
// --------------------------------------------------
// Useful for processing 2D arrays or matrix-like structures.
const matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];

for (const row of matrix) {
  for (const value of row) {
    console.log("Matrix value:", value);
  }
}
// Output:
// Matrix value: 1
// Matrix value: 2
// Matrix value: 3
// Matrix value: 4
// Matrix value: 5
// Matrix value: 6

// --------------------------------------------------
// 7. Filtering Items During Iteration
// --------------------------------------------------
// Only print even numbers.
const numbers = [1, 2, 3, 4, 5, 6];

for (const n of numbers) {
  if (n % 2 === 0) {
    console.log("Even number:", n);
  }
}
// Output:
// Even number: 2
// Even number: 4
// Even number: 6

// --------------------------------------------------
// 8. Real-World Case: Logging User Info
// --------------------------------------------------
// Simulate looping over a list of user objects.
const users = [
  { id: 1, name: "Alice", isActive: true },
  { id: 2, name: "Bob", isActive: false },
  { id: 3, name: "Charlie", isActive: true },
];

for (const user of users) {
  if (user.isActive) {
    console.log(`Active user: ${user.name} (ID: ${user.id})`);
  }
}
// Output:
// Active user: Alice (ID: 1)
// Active user: Charlie (ID: 3)

// --------------------------------------------------
// 9. Real-World Case: Converting All to Uppercase
// --------------------------------------------------
// Example: Convert a list of strings to uppercase.
const tags = ["javascript", "html", "css"];
const upperTags = [];

for (const tag of tags) {
  upperTags.push(tag.toUpperCase());
}

console.log("Uppercase tags:", upperTags);
// Output:
// Uppercase tags: [ 'JAVASCRIPT', 'HTML', 'CSS' ]
