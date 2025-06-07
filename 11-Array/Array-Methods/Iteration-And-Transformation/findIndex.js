// ============================================
// ARRAY METHOD: findIndex()
// ============================================
// The findIndex() method returns the index of the FIRST element
// in the array that satisfies the provided testing function.

// If no element satisfies the testing function, it returns -1.

// ============================================
// Syntax:
// array.findIndex(callback(currentValue, index, array))
// ============================================

// --------------------------------------------
// Example 1: Find index of the first even number
// --------------------------------------------

const numbers = [1, 3, 5, 4, 6];

const firstEvenIndex = numbers.findIndex((num) => num % 2 === 0);

console.log("Index of first even number:", firstEvenIndex);
// Output: 3

// --------------------------------------------
// Example 2: Find index of a specific string
// --------------------------------------------

const names = ["Alice", "Bob", "Charlie", "Dave"];

const indexOfCharlie = names.findIndex((name) => name === "Charlie");

console.log("Index of 'Charlie':", indexOfCharlie);
// Output: 2

// --------------------------------------------
// Example 3: Find index of an object in array
// --------------------------------------------

const users = [
  { id: 1, username: "admin" },
  { id: 2, username: "user" },
  { id: 3, username: "guest" },
];

const targetIndex = users.findIndex((user) => user.username === "user");

console.log("Index of user with username 'user':", targetIndex);
// Output: 1

// --------------------------------------------
// Example 4: Find index of the first negative number
// --------------------------------------------

const nums = [5, 10, -3, 4, -1];

const firstNegativeIndex = nums.findIndex((n) => n < 0);

console.log("Index of first negative number:", firstNegativeIndex);
// Output: 2

// --------------------------------------------
// Example 5: Case-insensitive string search
// --------------------------------------------

const emails = ["test@example.com", "hello@world.com", "admin@site.com"];

const searchEmail = "HELLO@world.com";

const indexEmail = emails.findIndex(
  (email) => email.toLowerCase() === searchEmail.toLowerCase()
);

console.log("Case-insensitive email index:", indexEmail);
// Output: 1

// --------------------------------------------
// Example 6: Find index by object property value
// --------------------------------------------

const products = [
  { id: 100, name: "Phone" },
  { id: 200, name: "Tablet" },
  { id: 300, name: "Laptop" },
];

const productId = 200;

const productIndex = products.findIndex((p) => p.id === productId);

console.log("Index of product with ID 200:", productIndex);
// Output: 1

// --------------------------------------------
// Example 7: Using findIndex() to remove item by condition
// --------------------------------------------

const todos = [
  { task: "Do homework", done: true },
  { task: "Buy milk", done: false },
  { task: "Go to gym", done: false },
];

const indexToRemove = todos.findIndex((todo) => todo.task === "Buy milk");

if (indexToRemove !== -1) {
  todos.splice(indexToRemove, 1); // remove 1 item at index
}

console.log("Todos after removing 'Buy milk':", todos);
// Output: [{ task: 'Do homework', done: true }, { task: 'Go to gym', done: false }]

// --------------------------------------------
// Example 8: Find index with complex condition
// --------------------------------------------

const students = [
  { name: "Anna", grade: 85 },
  { name: "Brian", grade: 90 },
  { name: "Cindy", grade: 75 },
];

const failingGradeIndex = students.findIndex((s) => s.grade < 80);

console.log("Index of first failing student:", failingGradeIndex);
// Output: 2

// --------------------------------------------
// Example 9: Using index from findIndex() to update an item
// --------------------------------------------

const books = [
  { id: 1, title: "Intro to JS", available: true },
  { id: 2, title: "Advanced CSS", available: true },
];

const bookIdToMarkUnavailable = 2;

const bookIndex = books.findIndex(
  (book) => book.id === bookIdToMarkUnavailable
);

if (bookIndex !== -1) {
  books[bookIndex].available = false;
}

console.log("Books after update:", books);
// Output: [
//   { id: 1, title: "Intro to JS", available: true },
//   { id: 2, title: "Advanced CSS", available: false }
// ]

// --------------------------------------------
// Example 10: Difference between find() and findIndex()
// --------------------------------------------

const arr = [10, 20, 30, 40];

const foundElement = arr.find((val) => val > 25); // returns element
const foundIndex = arr.findIndex((val) => val > 25); // returns index

console.log("Found element:", foundElement); // Output: 30
console.log("Found index:", foundIndex); // Output: 2
