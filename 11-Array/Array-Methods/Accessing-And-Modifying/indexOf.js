// ============================================
// ARRAY METHOD: indexOf()
// ============================================
// The indexOf() method returns the first index at which
// a given element can be found in the array, or -1 if it is not present.
// It uses strict equality (===) for comparison.
// Syntax: array.indexOf(searchElement, fromIndex)

// ============================================
// Example 1: Basic Usage
// ============================================
const colors = ["red", "green", "blue", "green"];
const indexGreen = colors.indexOf("green");

console.log("Index of 'green':", indexGreen);
// Output: Index of 'green': 1

// ============================================
// Example 2: Element Not Found
// ============================================
const fruits = ["apple", "banana", "orange"];
const indexMango = fruits.indexOf("mango");

console.log("Index of 'mango':", indexMango);
// Output: Index of 'mango': -1

// ============================================
// Example 3: Starting the Search at a Specific Index
// ============================================
const numbers = [1, 2, 3, 2, 4, 2];
const indexAfterFirst = numbers.indexOf(2, 2);

console.log("Index of 2 after index 2:", indexAfterFirst);
// Output: Index of 2 after index 2: 3

// ============================================
// Example 4: Case Sensitivity in Strings
// ============================================
const animals = ["Cat", "Dog", "cat"];
console.log("Index of 'cat':", animals.indexOf("cat"));
// Output: Index of 'cat': 2
console.log("Index of 'Cat':", animals.indexOf("Cat"));
// Output: Index of 'Cat': 0

// ============================================
// Example 5: Checking if an Element Exists
// ============================================
const userRoles = ["admin", "editor", "viewer"];

function hasEditorRole(roles) {
  return roles.indexOf("editor") !== -1;
}

console.log("Has editor role:", hasEditorRole(userRoles));
// Output: Has editor role: true

// ============================================
// Example 6: Removing an Element If Found
// ============================================

let devices = ["mouse", "keyboard", "monitor", "keyboard"];

function removeFirstOccurrence(arr, value) {
  const index = arr.indexOf(value);
  if (index !== -1) {
    arr.splice(index, 1);
  }
  return arr;
}

devices = removeFirstOccurrence(devices, "keyboard");

console.log("Devices after removal:", devices);
// Output: Devices after removal: [ 'mouse', 'monitor', 'keyboard' ]

// ============================================
// Example 7: Find Index in a Search System
// ============================================

const searchResults = ["apple", "banana", "cherry", "banana", "date"];

function findFirstMatch(results, keyword) {
  const index = results.indexOf(keyword);
  if (index !== -1) {
    console.log(`'${keyword}' found at index ${index}`);
  } else {
    console.log(`'${keyword}' not found`);
  }
}

findFirstMatch(searchResults, "banana");
// Output: 'banana' found at index 1

findFirstMatch(searchResults, "grape");
// Output: 'grape' not found

// ============================================
// Example 8: Use indexOf() with Objects – Unexpected Result
// ============================================

const users = [{ name: "Alice" }, { name: "Bob" }];

const searchUser = { name: "Alice" };

console.log("Index of user:", users.indexOf(searchUser));
// Output: Index of user: -1 (because objects are compared by reference, not content)

// ============================================
// Example 9: Checking Duplicates in a List
// ============================================

const emails = ["a@example.com", "b@example.com", "a@example.com"];

function isDuplicate(emailList, email) {
  return emailList.indexOf(email) !== emailList.lastIndexOf(email);
}

console.log("Is duplicate:", isDuplicate(emails, "a@example.com"));
// Output: Is duplicate: true

console.log("Is duplicate:", isDuplicate(emails, "b@example.com"));
// Output: Is duplicate: false
