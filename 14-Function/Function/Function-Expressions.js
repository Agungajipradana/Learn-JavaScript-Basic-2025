// ===========================================
// FUNCTION EXPRESSIONS IN JAVASCRIPT
// ===========================================

// --------------------------------------------------
// 1. What is a Function Expression?
// --------------------------------------------------
// A function expression defines a function as part of a variable assignment.
const sayHello = function () {
  console.log("Hello from a function expression!");
};
sayHello();
// Output:
// Hello from a function expression!

// --------------------------------------------------
// 2. Function Expression vs Function Declaration
// --------------------------------------------------
// Function expressions are NOT hoisted. They must be defined before use.

// sayHi(); ❌ ReferenceError: Cannot access 'sayHi' before initialization
const sayHi = function () {
  console.log("Hi there!");
};
sayHi();
// Output:
// Hi there!

// Function declarations are hoisted, so this works:
greet();
function greet() {
  console.log("Greeting from a function declaration!");
}
// Output:
// Greeting from a function declaration!

// --------------------------------------------------
// 3. Anonymous Function Expression
// --------------------------------------------------
// A function expression without a name is called an anonymous function.
const showMessage = function () {
  console.log("This is an anonymous function expression.");
};
showMessage();
// Output:
// This is an anonymous function expression.

// --------------------------------------------------
// 4. Named Function Expression
// --------------------------------------------------
// Useful for recursion or debugging stack traces.
const factorial = function fact(n) {
  if (n === 0) return 1;
  return n * fact(n - 1);
};
console.log("Factorial of 5:", factorial(5));
// Output:
// Factorial of 5: 120

// --------------------------------------------------
// 5. Passing Function Expressions as Arguments
// --------------------------------------------------
// You can pass a function expression to another function.
function process(callback) {
  console.log("Processing...");
  callback();
}
process(function () {
  console.log("Callback executed.");
});
// Output:
// Processing...
// Callback executed.

// --------------------------------------------------
// 6. Returning Function Expressions
// --------------------------------------------------
// A function can return another function expression.
function makeMultiplier(multiplier) {
  return function (value) {
    return value * multiplier;
  };
}
const triple = makeMultiplier(3);
console.log("Triple of 4:", triple(4));
// Output:
// Triple of 4: 12

// --------------------------------------------------
// 7. Function Expression Inside Objects
// --------------------------------------------------
// Assigning function expressions as methods inside an object.
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
};
console.log("Add:", calculator.add(10, 5));
// Output:
// Add: 15
console.log("Subtract:", calculator.subtract(10, 5));
// Output:
// Subtract: 5

// --------------------------------------------------
// 8. IIFE (Immediately Invoked Function Expression)
// --------------------------------------------------
// A function expression that runs immediately after being defined.
(function () {
  console.log("IIFE executed immediately!");
})();
// Output:
// IIFE executed immediately!

// --------------------------------------------------
// 9. Real-World Case: Sorting with Custom Logic
// --------------------------------------------------
// Using a function expression to sort array of objects.
const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 25 },
];

users.sort(function (a, b) {
  return a.age - b.age;
});

console.log("Sorted users by age:", users);
// Output:
// Sorted users by age: [
//   { name: 'Bob', age: 20 },
//   { name: 'Charlie', age: 25 },
//   { name: 'Alice', age: 30 }
// ]

// --------------------------------------------------
// 10. Conditional Assignment with Function Expressions
// --------------------------------------------------
// Choose a function based on condition and assign it to a variable.
let operation;
const mode = "multiply";

if (mode === "add") {
  operation = function (a, b) {
    return a + b;
  };
} else if (mode === "multiply") {
  operation = function (a, b) {
    return a * b;
  };
}

console.log("Result:", operation(4, 5));
// Output:
// Result: 20
