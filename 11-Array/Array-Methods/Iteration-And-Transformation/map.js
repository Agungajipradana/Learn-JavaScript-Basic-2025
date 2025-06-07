// ============================================
// ARRAY METHOD: map()
// ============================================
// The map() method creates a new array populated with the 
// results of calling a provided function on every element 
// in the calling array.

// map() is commonly used for transforming array data without 
// modifying the original array.

// ============================================
// Syntax:
// const newArray = array.map(callback(currentValue, index, array));
// ============================================


// --------------------------------------------
// Example 1: Basic usage - Multiply each number by 2
// --------------------------------------------

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);

console.log("Original numbers:", numbers);
// Output: Original numbers: [1, 2, 3, 4]

console.log("Doubled numbers:", doubled);
// Output: Doubled numbers: [2, 4, 6, 8]


// --------------------------------------------
// Example 2: Convert array of strings to uppercase
// --------------------------------------------

const fruits = ["apple", "banana", "cherry"];
const uppercasedFruits = fruits.map(fruit => fruit.toUpperCase());

console.log("Uppercased Fruits:", uppercasedFruits);
// Output: Uppercased Fruits: [ 'APPLE', 'BANANA', 'CHERRY' ]


// --------------------------------------------
// Example 3: Extract property from array of objects
// --------------------------------------------

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const names = users.map(user => user.name);

console.log("User Names:", names);
// Output: User Names: [ 'Alice', 'Bob', 'Charlie' ]


// --------------------------------------------
// Example 4: Add new property to objects (immutably)
// --------------------------------------------

const updatedUsers = users.map(user => ({
  ...user,
  isActive: true,
}));

console.log("Updated Users:", updatedUsers);
// Output: Each user object now includes isActive: true


// --------------------------------------------
// Example 5: Format numbers into currency strings
// --------------------------------------------

const prices = [12.5, 25.99, 100];
const formattedPrices = prices.map(price => `$${price.toFixed(2)}`);

console.log("Formatted Prices:", formattedPrices);
// Output: [ '$12.50', '$25.99', '$100.00' ]


// --------------------------------------------
// Example 6: Mapping with index usage
// --------------------------------------------

const letters = ["a", "b", "c"];
const labeled = letters.map((char, index) => `Item ${index + 1}: ${char}`);

console.log("Labeled Items:", labeled);
// Output: [ 'Item 1: a', 'Item 2: b', 'Item 3: c' ]


// --------------------------------------------
// Example 7: Conditional transformation
// --------------------------------------------

const scores = [85, 60, 45, 90];
const status = scores.map(score => (score >= 70 ? "Pass" : "Fail"));

console.log("Score Status:", status);
// Output: [ 'Pass', 'Fail', 'Fail', 'Pass' ]


// --------------------------------------------
// Example 8: Chaining map with other array methods
// --------------------------------------------

const grades = [60, 70, 80, 90];
const curveAndFilter = grades
  .map(g => g + 5)           // Add 5 to each grade
  .filter(g => g >= 70);     // Keep grades >= 70

console.log("Curved and Passed Grades:", curveAndFilter);
// Output: [ 75, 85, 95 ]


// --------------------------------------------
// Example 9: Working with nested arrays
// --------------------------------------------

const matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const doubledMatrix = matrix.map(row => row.map(col => col * 2));

console.log("Doubled Matrix:", doubledMatrix);
// Output: [ [2, 4], [6, 8], [10, 12] ]


// --------------------------------------------
// Example 10: map() vs forEach()
// --------------------------------------------

const nums = [1, 2, 3];

// Using forEach (does not return new array)
let forEachResult = [];
nums.forEach(n => forEachResult.push(n * 2));

console.log("With forEach:", forEachResult); // [2, 4, 6]

// Using map (preferred for transformation)
const mapResult = nums.map(n => n * 2);
console.log("With map:", mapResult); // [2, 4, 6]

