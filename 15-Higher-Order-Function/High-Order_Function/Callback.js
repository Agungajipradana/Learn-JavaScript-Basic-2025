// =====================================================
// HOF: CALLBACK FUNCTION IN JAVASCRIPT
// =====================================================

// -----------------------------------------------------
// 1. What is a Callback Function?
// -----------------------------------------------------
// A callback function is a function passed as an argument
// to another function. The outer function can call it
// whenever it needs to.

// Callback functions are essential in JavaScript for:
// - Custom logic injection
// - Event handling
// - Asynchronous programming
// - Reusability

// -----------------------------------------------------
// 2. Basic Example
// -----------------------------------------------------

function greet(name, callback) {
  console.log("Hello,", name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("John", sayGoodbye);
// Output:
// Hello, John
// Goodbye!

// -----------------------------------------------------
// 3. Anonymous Callback Function
// -----------------------------------------------------

function performAction(action, callback) {
  console.log("Performing:", action);
  callback();
}

performAction("Cleaning", function () {
  console.log("Action completed!");
});
// Output:
// Performing: Cleaning
// Action completed!

// -----------------------------------------------------
// 4. Callback with Parameters
// -----------------------------------------------------

function calculate(a, b, callback) {
  const result = callback(a, b);
  console.log("Result:", result);
}

function add(x, y) {
  return x + y;
}

calculate(5, 3, add); // Output: Result: 8

// -----------------------------------------------------
// 5. Array Method Example: forEach (uses callback)
// -----------------------------------------------------

const colors = ["red", "green", "blue"];

colors.forEach(function (color, index) {
  console.log(`Color at index ${index}: ${color}`);
});
// Output:
// Color at index 0: red
// Color at index 1: green
// Color at index 2: blue

// -----------------------------------------------------
// 6. Custom Iteration Function with Callback
// -----------------------------------------------------

function customLoop(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

customLoop(["a", "b", "c"], function (value, index) {
  console.log(`Index ${index}: ${value}`);
});
// Output:
// Index 0: a
// Index 1: b
// Index 2: c

// -----------------------------------------------------
// 7. Asynchronous Callback (setTimeout)
// -----------------------------------------------------

console.log("Start");

setTimeout(function () {
  console.log("Delayed Callback after 1 second");
}, 1000);

console.log("End");
// Output:
// Start
// End
// (after 1 second)
// Delayed Callback after 1 second

// -----------------------------------------------------
// 8. Case: Simulate Button Click Callback
// -----------------------------------------------------

function onClick(callback) {
  console.log("Simulating a button click...");
  callback();
}

onClick(function () {
  console.log("Button clicked - callback executed");
});
// Output:
// Simulating a button click...
// Button clicked - callback executed

// -----------------------------------------------------
// 9. Case: Filtering Data with Callback
// -----------------------------------------------------

function filterData(data, testCallback) {
  const results = [];
  for (let i = 0; i < data.length; i++) {
    if (testCallback(data[i])) {
      results.push(data[i]);
    }
  }
  return results;
}

const users = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Charlie", active: true },
];

const activeUsers = filterData(users, function (user) {
  return user.active;
});

console.log("Active users:", activeUsers);
// Output:
// Active users: [{ name: "Alice", active: true }, { name: "Charlie", active: true }]

// -----------------------------------------------------
// 10. Callback vs Direct Call
// -----------------------------------------------------

function withCallback(callback) {
  console.log("Before callback");
  callback();
  console.log("After callback");
}

function logMessage() {
  console.log("Inside callback");
}

withCallback(logMessage);
// Output:
// Before callback
// Inside callback
// After callback

// -----------------------------------------------------
// 11. Summary: When to Use Callback Functions
// -----------------------------------------------------
/*
✔ Use callback functions when:
  - You want to pass behavior into a function
  - You want to make code flexible and reusable
  - You’re handling asynchronous operations
  - You’re dealing with event listeners

✖ Avoid deeply nested callbacks (callback hell)
✔ Prefer using Promises or async/await for complex async flows
*/

// -----------------------------------------------------
// 12. Final Notes
// -----------------------------------------------------
/*
- Callbacks are functions passed into other functions
- They are executed when the outer function decides
- Used in built-in methods like setTimeout, forEach, map, filter, etc.
*/
