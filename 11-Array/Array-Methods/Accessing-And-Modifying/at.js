// ============================================
// ARRAY METHOD: at()
// ============================================
// The at() method returns the element at the specified index in an array.
// It allows for positive and negative integers.
// A negative index counts back from the end of the array.

// Syntax:
// array.at(index)

// - index: the position of the element to return

// ============================================
// Example 1: Accessing Elements with Positive Index
// ============================================

const numbers = [10, 20, 30, 40];

console.log("Element at index 0:", numbers.at(0));
// Output: Element at index 0: 10

console.log("Element at index 2:", numbers.at(2));
// Output: Element at index 2: 30

// ============================================
// Example 2: Accessing Elements with Negative Index
// ============================================

console.log("Last element:", numbers.at(-1));
// Output: Last element: 40

console.log("Second to last element:", numbers.at(-2));
// Output: Second to last element: 30

// ============================================
// Example 3: at() vs Traditional Bracket Notation
// ============================================

const items = ["a", "b", "c"];

console.log("Using brackets:", items[items.length - 1]);
// Output: Using brackets: c

console.log("Using at():", items.at(-1));
// Output: Using at(): c

// at() makes it easier and safer to read the last elements in an array

// ============================================
// Example 4: Safely Accessing Array Elements in Functions
// ============================================

function getLastElement(arr) {
  return arr.at(-1);
}

console.log("Last of [5,6,7]:", getLastElement([5, 6, 7]));
// Output: Last of [5,6,7]: 7

// ============================================
// Example 5: Using with Strings (works because strings are array-like)
const str = "Hello";

console.log("First character:", str.at(0));
// Output: First character: H

console.log("Last character:", str.at(-1));
// Output: Last character: o

// ============================================
// Example 6: Using at() in Conditional Logic
// ============================================

const logs = ["Start", "Loading", "Completed"];

if (logs.at(-1) === "Completed") {
  console.log("Process finished successfully.");
} else {
  console.log("Process still running or failed.");
}
// Output: Process finished successfully.

// ============================================
// Example 7: Using at() with Nested Arrays
// ============================================

const matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const lastRow = matrix.at(-1);
const lastColumn = matrix.at(-1).at(-1);

console.log("Last Row:", lastRow);
// Output: Last Row: [5, 6]

console.log("Last Column Value:", lastColumn);
// Output: Last Column Value: 6

// ============================================
// Example 8: at() with Empty or Invalid Index
// ============================================

const emptyArray = [];

console.log("Accessing index 0 in empty array:", emptyArray.at(0));
// Output: Accessing index 0 in empty array: undefined

const data = [100, 200];
console.log("Out-of-bounds index:", data.at(5));
// Output: Out-of-bounds index: undefined

// ============================================
// Example 9: Comparison with slice() for Access
// ============================================

const letters = ["x", "y", "z"];
console.log("Using at(-1):", letters.at(-1));
// Output: Using at(-1): z

console.log("Using slice(-1)[0]:", letters.slice(-1)[0]);
// Output: Using slice(-1)[0]: z

// at() is simpler and more readable for single element access

// ============================================
// Example 10: Utility Function for Safe Access
// ============================================

function safeAccess(arr, index) {
  return arr.length === 0 ? "No data" : arr.at(index) ?? "Index out of range";
}

console.log("Safe Access:", safeAccess([], 0));
// Output: Safe Access: No data

console.log("Safe Access:", safeAccess([1, 2], 5));
// Output: Safe Access: Index out of range

console.log("Safe Access:", safeAccess([1, 2], -1));
// Output: Safe Access: 2
