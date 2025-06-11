# Functions in JavaScript

## Introduction

A **function** in JavaScript is a reusable block of code designed to perform a particular task. Functions help organize code, avoid repetition, and improve maintainability.

---

## 1. Function Declaration

You can declare a function using the `function` keyword:

```javascript
function greet() {
  console.log("Hello, world!");
}
```

To invoke or call the function:

```js
greet(); // Output: Hello, world!
```

## 2. Function Parameters and Arguments

Functions can accept **parameters** (placeholders for values):

```js
function greetUser(name) {
  console.log("Hello, " + name);
}
```

You pass arguments when calling the function:

```js
greetUser("John"); // Output: Hello, John
```

## 3. Return Statement

Functions can return a value using the `return` keyword:

```js
function add(a, b) {
  return a + b;
}

const result = add(5, 3); // result is 8
```

If no `return` is specified, the function returns `undefined`.

## 4. Function Expressions

A function can also be defined and stored in a variable. This is called a function **expression**:

```js
const sayHi = function () {
  console.log("Hi!");
};

sayHi(); // Output: Hi!
```

Function expressions can be anonymous (without a name) or named.

## 5. Arrow Functions (ES6)

Introduced in ES6, **arrow** functions provide a shorter syntax:

```js
const multiply = (x, y) => {
  return x * y;
};
```

If the function has a single expression, you can omit the `return` and curly braces:

```js
const square = (n) => n * n;
```

## 6. Default Parameters

Functions can have **default** parameter values:

```js
function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet(); // Output: Hello, Guest
```

## 7. Rest Parameters

Use the `...` syntax to accept an indefinite number of arguments:

```js
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

sumAll(1, 2, 3, 4); // Output: 10
```

## 8. Callback Functions

A function can be passed as an argument to another function:

```js
function processUserInput(callback) {
  const name = "John";
  callback(name);
}

processUserInput(function (name) {
  console.log("Hello, " + name);
});
```

## 9. Function Scope

Variables defined inside a function are not accessible outside of it:

```js
function testScope() {
  let message = "Inside function";
  console.log(message);
}

testScope();
// console.log(message); // Error: message is not defined
```

## 10. IIFE (Immediately Invoked Function Expression)

A function can be defined and executed immediately:

```js
(function () {
  console.log("This runs immediately!");
})();
```

## 11. Anonymous Functions

An anonymous function is a function that does not have a name. It is often used in `function expressions`, `callbacks`, or `Immediately Invoked Function Expressions (IIFE)`.

Example:

```js
setTimeout(function () {
  console.log("Executed after 1 second");
}, 1000);
```

Anonymous functions are useful when the function does not need to be reused or referenced by name.

You can also use **arrow functions** as **anonymous functions**:

```js
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);
```

---

## Summary

| Concept             | Description                                   |
| ------------------- | --------------------------------------------- |
| `function`          | Declares a named function                     |
| Function Expression | Function stored in a variable                 |
| Arrow Function      | Shorter syntax for function expressions       |
| Parameters          | Values passed into the function               |
| `return`            | Sends a value back from the function          |
| IIFE                | Runs a function immediately after defining it |

Functions are a core part of JavaScript and mastering them is essential for writing clean, reusable code.
