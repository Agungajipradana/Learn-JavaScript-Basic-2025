// =====================================================
// HOF: forEach() IN JAVASCRIPT
// =====================================================

// -----------------------------------------------------
// 1. What is forEach?
// -----------------------------------------------------
// `forEach()` is a High Order Function available on arrays.
// It executes a provided function once for each array element.

// Syntax:
// array.forEach(function(currentValue, index, array) {
//   // code to execute
// });

// -----------------------------------------------------
// 2. Basic Example: Log Each Value
// -----------------------------------------------------

const fruits = ["apple", "banana", "cherry"];

fruits.forEach(function (fruit) {
  console.log(fruit);
});
// Output:
// apple
// banana
// cherry

// -----------------------------------------------------
// 3. Accessing Index and Array
// -----------------------------------------------------

fruits.forEach(function (fruit, index, array) {
  console.log(`Index ${index}: ${fruit}`);
});
// Output:
// Index 0: apple
// Index 1: banana
// Index 2: cherry

// -----------------------------------------------------
// 4. Arrow Function Syntax
// -----------------------------------------------------

fruits.forEach((fruit, index) => {
  console.log(`[${index}] = ${fruit.toUpperCase()}`);
});
// Output:
// [0] = APPLE
// [1] = BANANA
// [2] = CHERRY

// -----------------------------------------------------
// 5. Case: Total Price of Items (without reduce)
// -----------------------------------------------------

const cart = [
  { name: "Shoes", price: 50 },
  { name: "Shirt", price: 25 },
  { name: "Pants", price: 40 },
];

let total = 0;

cart.forEach(function (item) {
  total += item.price;
});

console.log("Total price:", total); // Output: Total price: 115

// -----------------------------------------------------
// 6. Case: Extract Specific Values from Array of Objects
// -----------------------------------------------------

const users = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "editor" },
  { id: 3, name: "Charlie", role: "admin" },
];

const adminNames = [];

users.forEach(function (user) {
  if (user.role === "admin") {
    adminNames.push(user.name);
  }
});

console.log("Admin users:", adminNames); // Output: Admin users: [ 'Alice', 'Charlie' ]

// -----------------------------------------------------
// 7. Case: Simulating DOM Manipulation with forEach
// -----------------------------------------------------

const mockElements = [
  { tag: "button", class: "", text: "Click Me" },
  { tag: "button", class: "", text: "Submit" },
];

mockElements.forEach(function (element) {
  element.class = "btn btn-primary";
});

console.log(mockElements);
// Output:
// [
//   { tag: 'button', class: 'btn btn-primary', text: 'Click Me' },
//   { tag: 'button', class: 'btn btn-primary', text: 'Submit' }
// ]

// -----------------------------------------------------
// 8. Pitfall: You Cannot Break or Return Early in forEach
// -----------------------------------------------------

// This won't stop the loop when condition is met
console.log("Trying to stop early:");
[1, 2, 3, 4, 5].forEach(function (num) {
  console.log(num);
  if (num === 3) return; // only exits this iteration, not the loop
});
// Output:
// 1
// 2
// 3
// 4
// 5

// -----------------------------------------------------
// 9. When to Use forEach
// -----------------------------------------------------
// ✔ When you need to perform side effects (e.g., log, push, manipulate)
// ✖ Not suitable if you want to return a new array → use `map()`
// ✖ Not suitable for early termination → use `for` or `some()`/`find()`

// -----------------------------------------------------
// 10. Summary
// -----------------------------------------------------
/*
- forEach is a High Order Function because it receives another function as a parameter
- It is used for executing operations for each item in an array
- Common in data processing, DOM manipulation, and side-effect-based logic
*/
