// 1. Function Declaration
function greet() {
  console.log("Hello, world!");
}
greet();
// Output: Hello, world!

// 2. Function with Parameters
function greetUser(name) {
  console.log("Hello, " + name);
}
greetUser("John");
// Output: Hello, John

// 3. Return Statement
function add(a, b) {
  return a + b;
}
const result = add(5, 3);
console.log("Sum:", result);
// Output: Sum: 8

// 4. Function Expression
const sayHi = function () {
  console.log("Hi!");
};
sayHi();
// Output: Hi!

// 5. Arrow Function
const multiply = (x, y) => {
  return x * y;
};
console.log("Multiply:", multiply(4, 2));
// Output: Multiply: 8

// Simplified Arrow Function
const square = (n) => n * n;
console.log("Square:", square(5));
// Output: Square: 25

// 6. Default Parameters
function greetWithDefault(name = "Guest") {
  console.log("Hello, " + name);
}
greetWithDefault();
// Output: Hello, Guest
greetWithDefault("John");
// Output: Hello, John

// 7. Rest Parameters
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log("Sum All:", sumAll(1, 2, 3, 4));
// Output: Sum All: 10

// 8. Callback Function
function processUserInput(callback) {
  const name = "John";
  callback(name);
}
processUserInput(function (name) {
  console.log("Hello, " + name);
});
// Output: Hello, John

// 9. Function Scope
function testScope() {
  let message = "Inside function";
  console.log(message);
}
testScope();
// Output: Inside function
// console.log(message); // Uncommenting this will cause: ReferenceError

// 10. IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("This runs immediately!");
})();
// Output: This runs immediately!

// 11. Anonymous Function
setTimeout(function () {
  console.log("Anonymous function as a callback");
}, 1000);
// Output after 1 second: Anonymous function as a callback
