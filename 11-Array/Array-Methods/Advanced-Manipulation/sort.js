// ============================================
// ARRAY METHOD: sort()
// ============================================
// The `sort()` method sorts the elements of an array in place and returns the sorted array.

// ============================================
// Example 1: Basic sorting (alphabetical order)
// ============================================
const fruits = ["banana", "apple", "cherry", "date"];
const sortedFruits = fruits.sort();

console.log("Sorted fruits:", sortedFruits);
// Output: [ 'apple', 'banana', 'cherry', 'date' ]
// Note: Default sorting is based on string Unicode values (UTF-16).

// ============================================
// Example 2: Sorting numbers (incorrect result)
// ============================================
const numbers = [10, 2, 30, 5];
const sortedWrong = numbers.sort();

console.log("Incorrectly sorted numbers:", sortedWrong);
// Output: [ 10, 2, 30, 5 ]
// Reason: Sorted as strings -> "10", "2", "30", "5"

// ============================================
// Example 3: Sorting numbers correctly (ascending)
// ============================================
const sortedAsc = numbers.sort((a, b) => a - b);

console.log("Correctly sorted (ascending):", sortedAsc);
// Output: [ 2, 5, 10, 30 ]

// ============================================
// Example 4: Sorting numbers (descending)
// ============================================
const sortedDesc = numbers.sort((a, b) => b - a);

console.log("Sorted (descending):", sortedDesc);
// Output: [ 30, 10, 5, 2 ]

// ============================================
// Example 5: Sorting objects by number property
// ============================================
const users = [
  { name: "Alice", age: 32 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 28 },
];

const sortedByAge = users.sort((a, b) => a.age - b.age);

console.log("Users sorted by age:", sortedByAge);
// Output:
// [
//   { name: 'Bob', age: 25 },
//   { name: 'Charlie', age: 28 },
//   { name: 'Alice', age: 32 }
// ]

// ============================================
// Example 6: Sorting objects by string property
// ============================================
const sortedByName = users.sort((a, b) => a.name.localeCompare(b.name));

console.log("Users sorted by name:", sortedByName);
// Output:
// [
//   { name: 'Alice', age: 32 },
//   { name: 'Bob', age: 25 },
//   { name: 'Charlie', age: 28 }
// ]

// ============================================
// Example 7: Sorting with null and undefined values
// ============================================
const mixed = [5, undefined, 3, null, 8];
const sortedMixed = mixed.sort((a, b) => {
  if (a == null) return 1; // Push null/undefined to the end
  if (b == null) return -1;
  return a - b;
});

console.log("Sorted with null/undefined:", sortedMixed);
// Output: [3, 5, 8, null, undefined]

// ============================================
// Example 8: Case-insensitive string sort
// ============================================
const animals = ["dog", "Cat", "elephant", "bee"];

const sortedCaseInsensitive = animals.sort((a, b) =>
  a.toLowerCase().localeCompare(b.toLowerCase())
);

console.log("Case-insensitive sort:", sortedCaseInsensitive);
// Output: [ 'bee', 'Cat', 'dog', 'elephant' ]
