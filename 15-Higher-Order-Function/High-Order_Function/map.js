// =====================================================
// HOF: map() IN JAVASCRIPT
// =====================================================

// -----------------------------------------------------
// 1. What is map()?
// -----------------------------------------------------
// `map()` is a High Order Function available on arrays.
// It creates a new array populated with the results of calling
// a provided function on every element in the original array.

// Syntax:
// const newArray = array.map(function(currentValue, index, array) {
//   return modifiedValue;
// });

// map() DOES NOT modify the original array

// -----------------------------------------------------
// 2. Basic Example: Multiply Numbers by 2
// -----------------------------------------------------

const numbers = [1, 2, 3, 4];

const doubled = numbers.map(function (num) {
  return num * 2;
});

console.log("Doubled:", doubled); // Output: [2, 4, 6, 8]

// -----------------------------------------------------
// 3. Arrow Function Syntax
// -----------------------------------------------------

const squared = numbers.map((num) => num * num);
console.log("Squared:", squared); // Output: [1, 4, 9, 16]

// -----------------------------------------------------
// 4. Accessing Index and Original Array
// -----------------------------------------------------

const withIndex = numbers.map(function (num, index, array) {
  return `${index + 1}: ${num} of [${array.join(", ")}]`;
});

console.log("With Index Info:", withIndex);
// Output:
// [
//   '1: 1 of [1, 2, 3, 4]',
//   '2: 2 of [1, 2, 3, 4]',
//   '3: 3 of [1, 2, 3, 4]',
//   '4: 4 of [1, 2, 3, 4]'
// ]

// -----------------------------------------------------
// 5. Case: Extracting Values from Array of Objects
// -----------------------------------------------------

const users = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "editor" },
  { id: 3, name: "Charlie", role: "viewer" },
];

const names = users.map(function (user) {
  return user.name;
});

console.log("User Names:", names); // Output: ['Alice', 'Bob', 'Charlie']

// -----------------------------------------------------
// 6. Case: Transforming Data Structure
// -----------------------------------------------------

const transformedUsers = users.map(function (user) {
  return {
    label: `${user.name} (${user.role})`,
    value: user.id,
  };
});

console.log("Transformed:", transformedUsers);
// Output:
// [
//   { label: 'Alice (admin)', value: 1 },
//   { label: 'Bob (editor)', value: 2 },
//   { label: 'Charlie (viewer)', value: 3 }
// ]

// -----------------------------------------------------
// 7. Case: Generating HTML List Items (Simulated)
// -----------------------------------------------------

const products = ["Laptop", "Phone", "Tablet"];

const productListHTML = products.map(function (product) {
  return `<li>${product}</li>`;
});

console.log("Generated HTML:", productListHTML);
// Output:
// ['<li>Laptop</li>', '<li>Phone</li>', '<li>Tablet</li>']

// To simulate rendering:
console.log("<ul>\n" + productListHTML.join("\n") + "\n</ul>");
// Output:
// <ul>
// <li>Laptop</li>
// <li>Phone</li>
// <li>Tablet</li>
// </ul>

// -----------------------------------------------------
// 8. Nested map(): Transforming Multi-Level Data
// -----------------------------------------------------

const categories = [
  {
    name: "Fruits",
    items: ["apple", "banana"],
  },
  {
    name: "Vegetables",
    items: ["carrot", "spinach"],
  },
];

const flatItems = categories.map(function (cat) {
  return cat.items.map(function (item) {
    return `${cat.name} - ${item}`;
  });
});

console.log("Nested Map Result:", flatItems);
// Output (array of arrays):
// [
//   ['Fruits - apple', 'Fruits - banana'],
//   ['Vegetables - carrot', 'Vegetables - spinach']
// ]

// Flatten if needed:
const flattened = flatItems.flat();
console.log("Flattened:", flattened);
// Output:
// [
//   'Fruits - apple',
//   'Fruits - banana',
//   'Vegetables - carrot',
//   'Vegetables - spinach'
// ]

// -----------------------------------------------------
// 9. Summary: When to Use map()
// -----------------------------------------------------
/*
✔ Use when you want to transform each item in an array
✔ Always returns a NEW array (original array stays unchanged)
✔ Best for extracting or modifying values
✖ Avoid using map() for side-effects like console.log → use forEach()
*/

// -----------------------------------------------------
// 10. Final Notes
// -----------------------------------------------------
/*
- `map()` is a pure and declarative way to transform arrays.
- It’s commonly used for:
  - Displaying lists
  - Extracting properties
  - Generating HTML
  - Data reshaping in APIs
*/
