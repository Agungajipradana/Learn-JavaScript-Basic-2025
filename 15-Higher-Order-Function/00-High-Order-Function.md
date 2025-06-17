# Learn JavaScript Basic 2025

## High Order Functions (HOF)

### 📘 What is a High Order Function?

In JavaScript, a **High Order Function (HOF)** is a function that either:

- Takes one or more functions as **arguments**, or
- **Returns** a function as its result

High Order Functions are useful for **abstracting logic**, making code more **reusable**, **modular**, and **cleaner**.

---

### ✅ Example 1: Function Accepting Another Function

```js
function greet(name) {
  return `Hello, ${name}`;
}

function processGreeting(callback) {
  console.log(callback("John Doe"));
}

processGreeting(greet);
// Output: Hello, John Doe
```

---

### ✅ Example 2: Function Returning Another Function

```js
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const triple = createMultiplier(3);
console.log(triple(5)); // Output: 15
```

---

### 🔄 Common High Order Functions in JavaScript

`forEach()`

Executes a function for each element in an array.

```js
const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit) => {
  console.log(fruit);
});
```

`map()`

Creates a new array with the results of calling a function on every element.

```js
const numbers = [1, 2, 3];
const squared = numbers.map((num) => num * num);
console.log(squared); // [1, 4, 9]
```

`filter()`

Returns a new array with all elements that pass a test.

```js
const ages = [12, 17, 21, 30];
const adults = ages.filter((age) => age >= 18);
console.log(adults); // [21, 30]
```

`reduce()`

Reduces the array to a single value.

```js
const prices = [10, 20, 30];
const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total); // 60
```

---

### ✅ More Examples: Are These High Order Functions?

**Callback as HOF**

```js
function execute(callback) {
  callback();
}

execute(function () {
  console.log("Callback executed!");
});
// Output: Callback executed!
```

**Returning Function**

```js
function outer() {
  return function () {
    console.log("Returned function");
  };
}

const fn = outer();
fn();
// Output: Returned function
```

**setTimeout**

```js
setTimeout(function () {
  console.log("This is a timeout callback");
}, 1000);
// Output after 1 second: This is a timeout callback
```

**setInterval**

```js
setInterval(function () {
  console.log("This runs every 2 seconds");
}, 2000);
// Output: repeats every 2 seconds
```

## 🧠 Are These High Order Functions?

| Concept                | Is it HOF? | Reason                                                    |
| ---------------------- | ---------- | --------------------------------------------------------- |
| **Callback**           | ✅ Yes     | The function _receives_ a function as an argument         |
| **Returning Function** | ✅ Yes     | The function _returns_ another function                   |
| **setTimeout**         | ✅ Yes     | It _accepts a function_ (callback) to run after delay     |
| **setInterval**        | ✅ Yes     | It _accepts a function_ to run repeatedly after intervals |

## 🔄 Custom High Order Function

```js
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, function (i) {
  console.log(`Running iteration ${i}`);
});
```

## 📝 Summary

High Order Functions are a fundamental feature of JavaScript. They allow you to write more abstract, reusable, and maintainable code by accepting or returning functions. They are essential for working with arrays, callbacks, asynchronous operations, and event handling.
