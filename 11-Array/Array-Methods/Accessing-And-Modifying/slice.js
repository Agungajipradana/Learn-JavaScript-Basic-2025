// ============================================
// ARRAY METHOD: slice()
// ============================================
// The slice() method returns a shallow copy of a portion of an array into a new array,
// without modifying the original array.

// Syntax:
// array.slice(start, end)

// - start: index to begin extraction (inclusive)
// - end: index to end extraction (exclusive)

// ============================================
// Example 1: Basic Usage
// ============================================

const fruits = ["apple", "banana", "orange", "mango"];
const slicedFruits = fruits.slice(1, 3);

console.log("Original Fruits:", fruits);
// Output: Original Fruits: [ 'apple', 'banana', 'orange', 'mango' ]

console.log("Sliced Fruits:", slicedFruits);
// Output: Sliced Fruits: [ 'banana', 'orange' ]

// ============================================
// Example 2: Omitting the End Parameter
// ============================================

const colors = ["red", "green", "blue", "yellow"];
const colorsFromIndex1 = colors.slice(1);

console.log("Colors from index 1:", colorsFromIndex1);
// Output: Colors from index 1: [ 'green', 'blue', 'yellow' ]

// ============================================
// Example 3: Using Negative Indices
// ============================================

const numbers = [10, 20, 30, 40, 50];
const lastTwo = numbers.slice(-2);

console.log("Last two numbers:", lastTwo);
// Output: Last two numbers: [ 40, 50 ]

const middleTwo = numbers.slice(1, -1);

console.log("Middle numbers:", middleTwo);
// Output: Middle numbers: [ 20, 30, 40 ]

// ============================================
// Example 4: Cloning an Array
// ============================================

const originalArray = [1, 2, 3];
const clonedArray = originalArray.slice();

clonedArray.push(4);

console.log("Original Array:", originalArray);
// Output: Original Array: [ 1, 2, 3 ]

console.log("Cloned and Modified Array:", clonedArray);
// Output: Cloned and Modified Array: [ 1, 2, 3, 4 ]

// ============================================
// Example 5: Slicing Strings Inside an Array
// ============================================

const names = ["Alice", "Bob", "Charlie", "David"];
const selectedNames = names.slice(0, 2);

console.log("Selected Names:", selectedNames);
// Output: Selected Names: [ 'Alice', 'Bob' ]

// ============================================
// Example 6: Using slice() in Pagination
// ============================================

const items = ["a", "b", "c", "d", "e", "f", "g", "h"];
const pageSize = 3;
const page = 2;

const paginatedItems = items.slice((page - 1) * pageSize, page * pageSize);

console.log("Page 2 Items:", paginatedItems);
// Output: Page 2 Items: [ 'd', 'e', 'f' ]

// ============================================
// Example 7: Filtering Items Then Slicing
// ============================================

const products = [
  { id: 1, name: "Book" },
  { id: 2, name: "Pen" },
  { id: 3, name: "Notebook" },
  { id: 4, name: "Pencil" },
];

const shortList = products.filter((p) => p.name.length <= 4).slice(0, 2);

console.log("Short List Products:", shortList);
// Output: Short List Products: [ { id: 2, name: 'Pen' }, { id: 4, name: 'Pencil' } ]

// ============================================
// Example 8: Combining slice() with map()
// ============================================

const scores = [85, 90, 78, 92, 88];
const topTwo = scores.slice(0, 2).map((score) => `${score}%`);

console.log("Top Two Scores:", topTwo);
// Output: Top Two Scores: [ '85%', '90%' ]

// ============================================
// Example 9: Safe Access Without Modifying Original
// ============================================

const data = ["a", "b", "c", "d", "e"];
function getPreview(data) {
  return data.slice(0, 3);
}

console.log("Preview:", getPreview(data));
// Output: Preview: [ 'a', 'b', 'c' ]

console.log("Original Data:", data);
// Output: Original Data: [ 'a', 'b', 'c', 'd', 'e' ]

// ============================================
// Example 10: Use with Nested Arrays
// ============================================

const matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const subsetMatrix = matrix.slice(0, 2);

console.log("Subset of Matrix:", subsetMatrix);
// Output: Subset of Matrix: [ [ 1, 2 ], [ 3, 4 ] ]
