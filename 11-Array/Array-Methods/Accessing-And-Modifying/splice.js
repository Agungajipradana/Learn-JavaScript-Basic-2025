// ============================================
// ARRAY METHOD: splice()
// ============================================
// The splice() method changes the contents of an array by removing, replacing,
// or adding elements in place. It returns an array of removed elements.

// Syntax:
// array.splice(start, deleteCount, item1, item2, ...)

// - start: Index at which to start changing the array
// - deleteCount: Number of elements to remove
// - item1, item2, ...: Elements to add (optional)

// ============================================
// Example 1: Basic Remove
// ============================================

const colors = ["red", "green", "blue", "yellow"];
const removedColors = colors.splice(1, 2);

console.log("Removed Colors:", removedColors);
// Output: Removed Colors: [ 'green', 'blue' ]

console.log("Remaining Colors:", colors);
// Output: Remaining Colors: [ 'red', 'yellow' ]

// ============================================
// Example 2: Insert Without Removing
// ============================================

const fruits = ["apple", "banana", "orange"];
fruits.splice(1, 0, "mango"); // insert "mango" at index 1

console.log("Fruits after insertion:", fruits);
// Output: Fruits after insertion: [ 'apple', 'mango', 'banana', 'orange' ]

// ============================================
// Example 3: Replace Elements
// ============================================

const languages = ["JavaScript", "Python", "Ruby"];
languages.splice(1, 1, "TypeScript"); // replace "Python" with "TypeScript"

console.log("Languages:", languages);
// Output: Languages: [ 'JavaScript', 'TypeScript', 'Ruby' ]

// ============================================
// Example 4: Remove All From a Specific Index
// ============================================

const numbers = [1, 2, 3, 4, 5];
numbers.splice(3); // remove from index 3 to end

console.log("Numbers after splice:", numbers);
// Output: Numbers after splice: [ 1, 2, 3 ]

// ============================================
// Example 5: Using splice() in a Function
// ============================================

function removeElementByIndex(arr, index) {
  if (index >= 0 && index < arr.length) {
    arr.splice(index, 1);
  }
  return arr;
}

const cities = ["Tokyo", "Paris", "London", "New York"];
removeElementByIndex(cities, 2); // remove "London"

console.log("Cities:", cities);
// Output: Cities: [ 'Tokyo', 'Paris', 'New York' ]

// ============================================
// Example 6: Using splice() to Implement Undo
// ============================================

let actions = ["draw", "erase", "fill"];
const undoAction = actions.splice(-1, 1); // remove the last action

console.log("Undo Action:", undoAction);
// Output: Undo Action: [ 'fill' ]

console.log("Remaining Actions:", actions);
// Output: Remaining Actions: [ 'draw', 'erase' ]

// ============================================
// Example 7: Trimming a List to a Max Size
// ============================================

let recentFiles = ["file1", "file2", "file3", "file4", "file5"];
const maxFiles = 3;

if (recentFiles.length > maxFiles) {
  recentFiles.splice(maxFiles); // keep only the first 3
}

console.log("Trimmed Recent Files:", recentFiles);
// Output: Trimmed Recent Files: [ 'file1', 'file2', 'file3' ]

// ============================================
// Example 8: Complex Replacement with Multiple Items
// ============================================

let queue = ["task1", "task2", "task3", "task4"];
queue.splice(1, 2, "newTaskA", "newTaskB"); // replace "task2" and "task3"

console.log("Updated Queue:", queue);
// Output: Updated Queue: [ 'task1', 'newTaskA', 'newTaskB', 'task4' ]

// ============================================
// Example 9: Remove and Track Deleted Items
// ============================================

let cart = ["itemA", "itemB", "itemC", "itemD"];
const deleted = cart.splice(1, 2); // remove "itemB" and "itemC"

console.log("Deleted Items:", deleted);
// Output: Deleted Items: [ 'itemB', 'itemC' ]

console.log("Updated Cart:", cart);
// Output: Updated Cart: [ 'itemA', 'itemD' ]

// ============================================
// Example 10: Use splice() with Negative Index
// ============================================

let names = ["Alice", "Bob", "Charlie", "Dave"];
names.splice(-2, 1); // removes the second last item "Charlie"

console.log("Names after negative index splice:", names);
// Output: Names after negative index splice: [ 'Alice', 'Bob', 'Dave' ]
