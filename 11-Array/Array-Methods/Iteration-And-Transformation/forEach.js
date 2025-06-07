// ============================================
// ARRAY METHOD: forEach()
// ============================================
// The forEach() method executes a provided function once 
// for each array element in order.

// It is primarily used for iterating through an array 
// when you don't need to return a new array.

// ============================================
// Syntax:
// array.forEach(callback(currentValue, index, array) { ... });
// ============================================

// --------------------------------------------
// Example 1: Basic Usage
// --------------------------------------------

const fruits = ["apple", "banana", "cherry"];

fruits.forEach(function (fruit, index) {
  console.log(`Fruit at index ${index}: ${fruit}`);
});
// Output:
// Fruit at index 0: apple
// Fruit at index 1: banana
// Fruit at index 2: cherry

// --------------------------------------------
// Example 2: Using Arrow Function
// --------------------------------------------

const numbers = [1, 2, 3];

numbers.forEach((num) => {
  console.log("Number:", num);
});
// Output:
// Number: 1
// Number: 2
// Number: 3

// --------------------------------------------
// Example 3: Accessing Index and Whole Array
// --------------------------------------------

numbers.forEach((value, index, array) => {
  console.log(`Index ${index}, Value ${value}, Full Array: [${array}]`);
});
// Output:
// Index 0, Value 1, Full Array: [1,2,3]
// Index 1, Value 2, Full Array: [1,2,3]
// Index 2, Value 3, Full Array: [1,2,3]

// --------------------------------------------
// Example 4: Real-life Use - Displaying a List
// --------------------------------------------

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 45 },
];

products.forEach((product) => {
  console.log(`Product: ${product.name}, Price: $${product.price}`);
});
// Output:
// Product: Laptop, Price: $1200
// Product: Mouse, Price: $25
// Product: Keyboard, Price: $45

// --------------------------------------------
// Example 5: Calculating Total Price with forEach()
// --------------------------------------------

let totalPrice = 0;

products.forEach((product) => {
  totalPrice += product.price;
});

console.log("Total Price:", totalPrice);
// Output: Total Price: 1270

// --------------------------------------------
// Example 6: Modifying an External Array
// --------------------------------------------

const names = ["alice", "bob", "charlie"];
const capitalizedNames = [];

names.forEach((name) => {
  capitalizedNames.push(name.toUpperCase());
});

console.log("Capitalized Names:", capitalizedNames);
// Output: Capitalized Names: [ 'ALICE', 'BOB', 'CHARLIE' ]

// --------------------------------------------
// Example 7: Nested forEach
// --------------------------------------------

const matrix = [
  [1, 2],
  [3, 4],
];

matrix.forEach((row, rowIndex) => {
  row.forEach((col, colIndex) => {
    console.log(`Row ${rowIndex}, Col ${colIndex}: ${col}`);
  });
});
// Output:
// Row 0, Col 0: 1
// Row 0, Col 1: 2
// Row 1, Col 0: 3
// Row 1, Col 1: 4

// --------------------------------------------
// Example 8: Avoiding Return in forEach
// --------------------------------------------

const nums = [1, 2, 3];

const result = nums.forEach((n) => {
  return n * 2;
});

console.log("Result of forEach (not useful):", result);
// Output: Result of forEach (not useful): undefined
// Explanation: forEach doesn't return anything

// --------------------------------------------
// Example 9: Avoid forEach if You Need a New Array
// --------------------------------------------

const doubled = [];
nums.forEach((n) => {
  doubled.push(n * 2);
});

console.log("Doubled with forEach:", doubled);
// Output: Doubled with forEach: [2, 4, 6]

// Better to use .map() for transformation

// --------------------------------------------
// Example 10: Error Handling Inside forEach
// --------------------------------------------

const data = [10, null, 30];

data.forEach((value, index) => {
  try {
    console.log("Half of", value, "is", value / 2);
  } catch (e) {
    console.log(`Error at index ${index}:`, e.message);
  }
});
// Output:
// Half of 10 is 5
// Half of null is 0
// Half of 30 is 15
