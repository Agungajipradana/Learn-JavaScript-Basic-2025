// ============================================
// ARRAY METHOD: fill()
// ============================================
// The `fill()` method changes all elements in an array to a static value, 
// from a start index (default 0) to an end index (default array.length).
// It modifies the original array.

// ============================================
// Example 1: Fill the entire array with a single value
// ============================================
const arr1 = [1, 2, 3, 4];
arr1.fill(0);

console.log("Filled entire array with 0:", arr1);
// Output: [0, 0, 0, 0]

// ============================================
// Example 2: Fill from specific start index
// ============================================
const arr2 = [1, 2, 3, 4];
arr2.fill(9, 2);

console.log("Filled from index 2 with 9:", arr2);
// Output: [1, 2, 9, 9]

// ============================================
// Example 3: Fill between start and end index (end not included)
// ============================================
const arr3 = [1, 2, 3, 4, 5];
arr3.fill('x', 1, 4);

console.log("Filled with 'x' from index 1 to 3:", arr3);
// Output: [1, 'x', 'x', 'x', 5]

// ============================================
// Example 4: Initialize an array with a default value
// ============================================
const size = 5;
const defaultArray = new Array(size).fill(0);

console.log("New array filled with 0:", defaultArray);
// Output: [0, 0, 0, 0, 0]

// ============================================
// Example 5: Reset values in an existing array
// ============================================
let scores = [80, 75, 92, 60];
scores.fill(0);

console.log("Reset scores to 0:", scores);
// Output: [0, 0, 0, 0]

// ============================================
// Example 6: Use fill() on part of an array (e.g. clear partial data)
// ============================================
let tasks = ['done', 'in progress', 'todo', 'todo'];
tasks.fill('empty', 1, 3);

console.log("Partially cleared tasks:", tasks);
// Output: ['done', 'empty', 'empty', 'todo']

// ============================================
// Example 7: Use fill() to create a placeholder template
// ============================================
const template = new Array(3).fill({ status: 'pending' });

console.log("Template array:", template);
// Output: [{status: 'pending'}, {status: 'pending'}, {status: 'pending'}]
// ⚠️ Warning: All objects refer to the same reference

// Modifying one affects all
template[0].status = 'done';

console.log("After modifying one object:", template);
// Output: [{status: 'done'}, {status: 'done'}, {status: 'done'}]

// ============================================
// Example 8: Safely fill array with unique objects
// ============================================
const safeTemplate = Array.from({ length: 3 }, () => ({ status: 'pending' }));

safeTemplate[0].status = 'done';

console.log("Safe unique template array:", safeTemplate);
// Output: [{status: 'done'}, {status: 'pending'}, {status: 'pending'}]
