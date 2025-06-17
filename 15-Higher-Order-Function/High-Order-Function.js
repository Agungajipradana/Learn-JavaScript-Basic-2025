// =====================================================
// HIGH ORDER FUNCTIONS (HOF) IN JAVASCRIPT
// =====================================================

// -----------------------------------------------------
// 1. Function Accepting Another Function (Callback)
// -----------------------------------------------------
// HOF that receives a function as an argument.

function processGreeting(callback) {
  console.log(callback("John Doe"));
}

function greet(name) {
  return `Hello, ${name}`;
}

processGreeting(greet);
// Output:
// Hello, John Doe

// -----------------------------------------------------
// 2. Returning Function (Closure)
// -----------------------------------------------------
// HOF that returns another function.

function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const triple = createMultiplier(3);
console.log(triple(5)); // Output: 15

// -----------------------------------------------------
// 3. Built-in HOF: setTimeout
// -----------------------------------------------------
// Executes a callback function after a delay.

setTimeout(function () {
  console.log("This is a timeout callback");
}, 1000);
// Output (after 1 second):
// This is a timeout callback

// -----------------------------------------------------
// 4. Built-in HOF: setInterval
// -----------------------------------------------------
// Executes a callback repeatedly with a delay between each call.

const intervalId = setInterval(function () {
  console.log("This runs every 2 seconds");
}, 2000);

// Stop interval after 6 seconds
setTimeout(function () {
  clearInterval(intervalId);
  console.log("Interval stopped");
}, 6000);

// -----------------------------------------------------
// 5. Array Method HOF: forEach
// -----------------------------------------------------
// Executes a function for each array element.

const fruits = ["apple", "banana", "cherry"];
fruits.forEach(function (fruit) {
  console.log(fruit);
});
// Output:
// apple
// banana
// cherry

// -----------------------------------------------------
// 6. Array Method HOF: map
// -----------------------------------------------------
// Returns a new array with results of calling a function on every element.

const numbers = [1, 2, 3];
const squared = numbers.map(function (num) {
  return num * num;
});
console.log(squared); // Output: [1, 4, 9]

// -----------------------------------------------------
// 7. Array Method HOF: filter
// -----------------------------------------------------
// Returns a new array with elements that pass the condition.

const ages = [12, 17, 21, 30];
const adults = ages.filter(function (age) {
  return age >= 18;
});
console.log(adults); // Output: [21, 30]

// -----------------------------------------------------
// 8. Array Method HOF: reduce
// -----------------------------------------------------
// Reduces array to a single value by applying a function.

const prices = [10, 20, 30];
const total = prices.reduce(function (sum, price) {
  return sum + price;
}, 0);
console.log(total); // Output: 60

// -----------------------------------------------------
// 9. Custom HOF: repeat
// -----------------------------------------------------
// Accepts a function and executes it multiple times.

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, function (i) {
  console.log(`Running iteration ${i}`);
});
// Output:
// Running iteration 0
// Running iteration 1
// Running iteration 2

// -----------------------------------------------------
// 10. Summary - Are These High Order Functions?
// -----------------------------------------------------
/*
✔ Callback            → Yes (function passed as argument)
✔ Returning Function  → Yes (function returns another function)
✔ setTimeout          → Yes (accepts a callback)
✔ setInterval         → Yes (accepts a callback)
✔ forEach, map, etc.  → Yes (accept functions)
✔ repeat (custom)     → Yes (accepts function as argument)
*/
