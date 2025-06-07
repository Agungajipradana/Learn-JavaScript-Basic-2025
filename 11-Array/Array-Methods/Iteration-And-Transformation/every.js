// ============================================
// ARRAY METHOD: every()
// ============================================
// The every() method tests whether ALL elements in the array
// pass the test implemented by the provided function.

// It returns true if the callback returns a truthy value for EVERY element,
// otherwise it returns false.

// ============================================
// Syntax:
// array.every(callback(currentValue, index, array))
// ============================================

// --------------------------------------------
// Example 1: Are all numbers greater than 0?
// --------------------------------------------

const numbers = [1, 2, 3, 4, 5];

const allPositive = numbers.every((num) => num > 0);

console.log("All numbers are positive:", allPositive);
// Output: true

// --------------------------------------------
// Example 2: Check if all strings are non-empty
// --------------------------------------------

const names = ["Alice", "Bob", "Charlie", ""];

const allNonEmpty = names.every((name) => name.length > 0);

console.log("All names are non-empty:", allNonEmpty);
// Output: false

// --------------------------------------------
// Example 3: Validate user inputs (email fields)
// --------------------------------------------

const emails = ["user@example.com", "admin@domain.com", "support@site.org"];

const allValidEmails = emails.every((email) => email.includes("@"));

console.log("All emails contain @:", allValidEmails);
// Output: true

// --------------------------------------------
// Example 4: Are all products in stock?
// --------------------------------------------

const products = [
  { id: 1, name: "Mouse", inStock: true },
  { id: 2, name: "Keyboard", inStock: true },
  { id: 3, name: "Monitor", inStock: false },
];

const allInStock = products.every((product) => product.inStock === true);

console.log("All products in stock:", allInStock);
// Output: false

// --------------------------------------------
// Example 5: Check if all students passed
// --------------------------------------------

const students = [
  { name: "John", grade: 85 },
  { name: "Mary", grade: 92 },
  { name: "Jake", grade: 78 },
];

const allPassed = students.every((student) => student.grade >= 75);

console.log("All students passed:", allPassed);
// Output: true

// --------------------------------------------
// Example 6: Are all values numbers?
// --------------------------------------------

const values = [10, 20, "30", 40];

const allNumbers = values.every((val) => typeof val === "number");

console.log("All values are numbers:", allNumbers);
// Output: false

// --------------------------------------------
// Example 7: Check if all files are images
// --------------------------------------------

const fileNames = ["photo.jpg", "logo.png", "banner.svg"];

const allImages = fileNames.every(
  (file) =>
    file.endsWith(".jpg") || file.endsWith(".png") || file.endsWith(".svg")
);

console.log("All files are images:", allImages);
// Output: true

// --------------------------------------------
// Example 8: Check if array is sorted ascending
// --------------------------------------------

const data = [2, 4, 6, 8, 10];

const isSortedAscending = data.every((num, index, arr) => {
  return index === 0 || arr[index] >= arr[index - 1];
});

console.log("Array is sorted in ascending order:", isSortedAscending);
// Output: true

// --------------------------------------------
// Example 9: Validate a form (all required fields filled)
// --------------------------------------------

const formData = {
  name: "John",
  email: "john@example.com",
  message: "Hello there!",
};

const requiredFields = ["name", "email", "message"];

const formIsValid = requiredFields.every(
  (field) => formData[field]?.trim().length > 0
);

console.log("Form is valid:", formIsValid);
// Output: true

// --------------------------------------------
// Example 10: Difference between every() and some()
// --------------------------------------------

const numbers2 = [10, 20, 30, 40];

const allAboveTen = numbers2.every((num) => num > 10); // false
const someAboveTen = numbers2.some((num) => num > 10); // true

console.log("All > 10:", allAboveTen); // Output: false
console.log("Some > 10:", someAboveTen); // Output: true
