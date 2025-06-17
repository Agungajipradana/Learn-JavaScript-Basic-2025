// =====================================================
// HOF: reduce() IN JAVASCRIPT
// =====================================================

// -----------------------------------------------------
// 1. What is reduce()?
// -----------------------------------------------------
// `reduce()` is a High Order Function available on arrays.
// It executes a reducer function on each element of the array,
// resulting in a single accumulated output value.

// Syntax:
// array.reduce(function(accumulator, currentValue, index, array) {
//   return newAccumulator;
// }, initialValue);

// -----------------------------------------------------
// 2. Basic Example: Sum Numbers
// -----------------------------------------------------

const numbers = [1, 2, 3, 4, 5];

const total = numbers.reduce(function (acc, curr) {
  return acc + curr;
}, 0);

console.log("Total:", total); // Output: 15

// -----------------------------------------------------
// 3. Arrow Function Syntax
// -----------------------------------------------------

const product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log("Product:", product); // Output: 120

// -----------------------------------------------------
// 4. Case: Sum Object Property Values
// -----------------------------------------------------

const items = [
  { name: "Book", price: 12 },
  { name: "Pen", price: 3 },
  { name: "Notebook", price: 8 },
];

const totalPrice = items.reduce(function (acc, item) {
  return acc + item.price;
}, 0);

console.log("Total Price:", totalPrice); // Output: 23

// -----------------------------------------------------
// 5. Case: Count Occurrences of Values
// -----------------------------------------------------

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const fruitCount = fruits.reduce(function (acc, fruit) {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log("Fruit Count:", fruitCount);
// Output:
// { apple: 3, banana: 2, orange: 1 }

// -----------------------------------------------------
// 6. Case: Group Items by Property
// -----------------------------------------------------

const students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "A" },
  { name: "David", grade: "C" },
];

const groupedByGrade = students.reduce(function (acc, student) {
  const grade = student.grade;
  if (!acc[grade]) {
    acc[grade] = [];
  }
  acc[grade].push(student.name);
  return acc;
}, {});

console.log("Grouped by Grade:", groupedByGrade);
// Output:
// { A: ['Alice', 'Charlie'], B: ['Bob'], C: ['David'] }

// -----------------------------------------------------
// 7. Case: Flatten a Nested Array
// -----------------------------------------------------

const nested = [[1, 2], [3, 4], [5]];

const flattened = nested.reduce(function (acc, arr) {
  return acc.concat(arr);
}, []);

console.log("Flattened Array:", flattened); // Output: [1, 2, 3, 4, 5]

// -----------------------------------------------------
// 8. Case: Convert Array to Object
// -----------------------------------------------------

const entries = [
  ["id", 123],
  ["name", "John Doe"],
  ["email", "john@example.com"],
];

const userObject = entries.reduce(function (acc, [key, value]) {
  acc[key] = value;
  return acc;
}, {});

console.log("User Object:", userObject);
// Output:
// { id: 123, name: 'John Doe', email: 'john@example.com' }

// -----------------------------------------------------
// 9. Case: Chaining map + reduce
// -----------------------------------------------------

const products = [
  { name: "Laptop", quantity: 2, price: 1500 },
  { name: "Mouse", quantity: 3, price: 25 },
];

const totalCost = products
  .map((item) => item.quantity * item.price)
  .reduce((sum, curr) => sum + curr, 0);

console.log("Total Cost:", totalCost); // Output: 3100

// -----------------------------------------------------
// 10. Summary: When to Use reduce()
// -----------------------------------------------------
/*
✔ Use reduce() when you want to:
  - Accumulate a single value (number, string, object, etc.)
  - Aggregate or summarize data
  - Transform array into another structure
✖ Avoid if you want to only filter or transform — use filter() or map() instead
*/

// -----------------------------------------------------
// 11. Final Notes
// -----------------------------------------------------
/*
- reduce() is one of the most powerful tools in JavaScript arrays.
- It can replace many use cases of loops, object building, counting, and more.
- Requires initial value to avoid unexpected behavior with empty arrays.
- It's harder to read than map/filter, so use comments or helper functions for clarity.
*/
