// ===========================================
// ARROW FUNCTIONS IN JAVASCRIPT
// ===========================================

// --------------------------------------------------
// 1. Basic Arrow Function Syntax
// --------------------------------------------------
// Arrow functions are a shorter way to write functions.
const greet = () => {
  console.log("Hello from arrow function!");
};
greet();
// Output:
// Hello from arrow function!

// --------------------------------------------------
// 2. Arrow Function with Parameters
// --------------------------------------------------
// Arrow function can accept parameters like regular functions.
const add = (a, b) => {
  return a + b;
};
console.log("Sum of 2 and 3:", add(2, 3));
// Output:
// Sum of 2 and 3: 5

// --------------------------------------------------
// 3. Implicit Return
// --------------------------------------------------
// If the body has a single expression, you can omit the return keyword and braces.
const multiply = (x, y) => x * y;
console.log("Multiply 4 by 5:", multiply(4, 5));
// Output:
// Multiply 4 by 5: 20

// --------------------------------------------------
// 4. Arrow Function with a Single Parameter
// --------------------------------------------------
// If there's only one parameter, parentheses can be omitted.
const square = (n) => n * n;
console.log("Square of 6:", square(6));
// Output:
// Square of 6: 36

// --------------------------------------------------
// 5. Returning an Object
// --------------------------------------------------
// To return an object implicitly, wrap it in parentheses.
const createUser = (name, age) => ({
  name: name,
  age: age,
  isActive: true,
});
console.log("User object:", createUser("John", 25));
// Output:
// User object: { name: 'John', age: 25, isActive: true }

// --------------------------------------------------
// 6. Arrow Function Used in Array Methods
// --------------------------------------------------
// Useful for callbacks in map, filter, reduce, etc.
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((n) => n * 2);
console.log("Doubled numbers:", doubled);
// Output:
// Doubled numbers: [2, 4, 6, 8, 10]

const evens = numbers.filter((n) => n % 2 === 0);
console.log("Even numbers:", evens);
// Output:
// Even numbers: [2, 4]

// --------------------------------------------------
// 7. Arrow Function in forEach
// --------------------------------------------------
// Commonly used to iterate and perform side-effects.
const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit) => {
  console.log("Fruit:", fruit);
});
// Output:
// Fruit: apple
// Fruit: banana
// Fruit: cherry

// --------------------------------------------------
// 8. Arrow Function Limitations: No 'this'
// --------------------------------------------------
// Arrow functions do not bind their own 'this'.
const person = {
  name: "Alice",
  greet: function () {
    // Using regular function works
    setTimeout(function () {
      console.log("Hello from", this.name); // undefined
    }, 1000);
  },
  greetArrow: function () {
    // Arrow function captures 'this' from surrounding context
    setTimeout(() => {
      console.log("Hello from", this.name); // Alice
    }, 1000);
  },
};

person.greet(); // Output: Hello from undefined (because 'this' refers to global)
person.greetArrow(); // Output: Hello from Alice

// --------------------------------------------------
// 9. Real-World Case: Sorting with Arrow Function
// --------------------------------------------------
// Arrow functions are ideal for short callbacks.
const users = [
  { name: "Anna", score: 82 },
  { name: "Bob", score: 91 },
  { name: "Charlie", score: 78 },
];

users.sort((a, b) => b.score - a.score);
console.log("Sorted users by score:", users);
// Output:
// Sorted users by score: [
//   { name: 'Bob', score: 91 },
//   { name: 'Anna', score: 82 },
//   { name: 'Charlie', score: 78 }
// ]

// --------------------------------------------------
// 10. Real-World Case: Functional Utilities
// --------------------------------------------------
// Example: Sum of squares using reduce and arrow functions
const total = numbers.reduce((acc, curr) => acc + curr * curr, 0);
console.log("Sum of squares:", total);
// Output:
// Sum of squares: 55
