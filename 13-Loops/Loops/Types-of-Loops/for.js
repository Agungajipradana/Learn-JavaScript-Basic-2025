// =======================================
// FOR LOOP IN JAVASCRIPT
// =======================================

// --------------------------------------------------
// 1. Basic for Loop
// --------------------------------------------------
// A basic example where we loop from 0 to 4.
// The loop will execute 5 times.
for (let i = 0; i < 5; i++) {
  console.log("Basic loop - iteration:", i);
}
// Output:
// Basic loop - iteration: 0
// Basic loop - iteration: 1
// Basic loop - iteration: 2
// Basic loop - iteration: 3
// Basic loop - iteration: 4

// --------------------------------------------------
// 2. Looping Backward
// --------------------------------------------------
// A for loop that counts down from 5 to 1.
for (let i = 5; i > 0; i--) {
  console.log("Countdown:", i);
}
// Output:
// Countdown: 5
// Countdown: 4
// Countdown: 3
// Countdown: 2
// Countdown: 1

// --------------------------------------------------
// 3. Looping Through an Array
// --------------------------------------------------
// A common use-case: iterating through an array.
const fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit at index ${i}:`, fruits[i]);
}
// Output:
// Fruit at index 0: apple
// Fruit at index 1: banana
// Fruit at index 2: cherry

// --------------------------------------------------
// 4. Summing Numbers in an Array
// --------------------------------------------------
// Another common case: summing numbers using a loop.
const numbers = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Total sum:", sum);
// Output:
// Total sum: 150

// --------------------------------------------------
// 5. Nested for Loops
// --------------------------------------------------
// Useful for working with matrices, tables, etc.
const matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];

for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    console.log(`Value at [${row}][${col}]:`, matrix[row][col]);
  }
}
// Output:
// Value at [0][0]: 1
// Value at [0][1]: 2
// Value at [1][0]: 3
// Value at [1][1]: 4
// Value at [2][0]: 5
// Value at [2][1]: 6

// --------------------------------------------------
// 6. Filtering Values in a Loop
// --------------------------------------------------
// Example: printing only even numbers
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log("Even number:", i);
  }
}
// Output:
// Even number: 2
// Even number: 4
// Even number: 6
// Even number: 8
// Even number: 10

// --------------------------------------------------
// 7. Using break and continue
// --------------------------------------------------
// break: exit the loop when a condition is met
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("Break at i =", i);
    break;
  }
  console.log("Looping i:", i);
}
// Output:
// Looping i: 0
// Looping i: 1
// Looping i: 2
// Looping i: 3
// Looping i: 4
// Break at i = 5

// continue: skip the current iteration
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    console.log("Skipping i =", i);
    continue;
  }
  console.log("Processing i:", i);
}
// Output:
// Processing i: 0
// Processing i: 1
// Skipping i = 2
// Processing i: 3
// Processing i: 4

// --------------------------------------------------
// 8. Real-World Case: Counting Word Frequencies
// --------------------------------------------------
// Suppose we want to count how many times each word appears in an array.
const words = ["apple", "banana", "apple", "cherry", "banana", "apple"];
const wordCount = {};

for (let i = 0; i < words.length; i++) {
  const word = words[i];
  if (wordCount[word]) {
    wordCount[word]++;
  } else {
    wordCount[word] = 1;
  }
}

console.log("Word count result:", wordCount);
// Output:
// Word count result: { apple: 3, banana: 2, cherry: 1 }
