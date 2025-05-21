// Function is a non-primitive data type in JavaScript.
// A function is a reusable block of code designed to perform a particular task.

function greet(name) {
  return `Hello, ${name}!`;
}

// Calling the function
console.log(greet("John")); // Output: "Hello, John!"

// Storing a function in a variable (function expression)
const sayBye = function(name) {
  return `Goodbye, ${name}!`;
};

console.log(sayBye("Doe")); // Output: "Goodbye, Doe!"

// Arrow function (ES6)
const add = (a, b) => a + b;

console.log(add(3, 5)); // Output: 8

// Checking the type
console.log(typeof greet);   // Output: "function"
console.log(typeof sayBye);  // Output: "function"
console.log(typeof add);     // Output: "function"
