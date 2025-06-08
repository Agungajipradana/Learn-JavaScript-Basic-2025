// ===============================
// Object.values(obj)
// ===============================
// Description:
// Object.values(obj) is a static method in JavaScript that returns an array
// of the object's own enumerable property **values**.

// Syntax:
// Object.values(object)

// ===============================
// Basic Example
// ===============================
const user = {
  name: "John",
  age: 25,
  email: "john@example.com",
};

console.log(Object.values(user));
// Output: ['John', 25, 'john@example.com']
// Explanation: Returns an array of all property values

// ===============================
// Example with Empty Object
// ===============================
const emptyObject = {};

console.log(Object.values(emptyObject));
// Output: []
// Explanation: No properties means no values

// ===============================
// Example with Mixed Data Types
// ===============================
const settings = {
  darkMode: true,
  fontSize: 16,
  language: "en",
};

console.log(Object.values(settings));
// Output: [true, 16, 'en']
// Explanation: All values regardless of type are returned

// ===============================
// Example with Nested Objects
// ===============================
const person = {
  id: 101,
  name: "Alice",
  address: {
    street: "123 Main St",
    city: "Metropolis",
  },
};

console.log(Object.values(person));
// Output: [101, 'Alice', { street: '123 Main St', city: 'Metropolis' }]
// Explanation: Top-level values are returned; nested objects are not expanded

// ===============================
// Example: Summing Object Values (Numbers Only)
// ===============================
const scores = {
  math: 90,
  science: 85,
  english: 88,
};

const totalScore = Object.values(scores).reduce((sum, value) => sum + value, 0);
console.log(totalScore);
// Output: 263
// Explanation: Useful for adding up numeric values in an object

// ===============================
// Example: Filtering Boolean Values
// ===============================
const permissions = {
  canEdit: true,
  canDelete: false,
  canView: true,
};

const permissionValues = Object.values(permissions);
const allowed = permissionValues.filter((value) => value === true).length;

console.log(`Allowed permissions count: ${allowed}`);
// Output: Allowed permissions count: 2
// Explanation: We count how many permissions are set to true

// ===============================
// Real-world Case: Rendering List Items from Object
// ===============================
const product = {
  title: "Laptop",
  brand: "Lenovo",
  price: 1200,
};

Object.values(product).forEach((value) => {
  console.log(`- ${value}`);
});
// Output:
// - Laptop
// - Lenovo
// - 1200
// Explanation: Commonly used to render items dynamically in UI

// ===============================
// Real-world Case: Validating Required Field Values
// ===============================
const formData = {
  name: "John",
  email: "",
  password: "",
};

const missingValues = Object.values(formData).filter((value) => value === "");

console.log(`Missing fields count: ${missingValues.length}`);
// Output: Missing fields count: 2
// Explanation: Useful for checking if any required values are empty

// ===============================
// Real-world Case: Convert Object Values to String (e.g., for Logs or CSV)
// ===============================
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021,
};

const csvRow = Object.values(car).join(",");
console.log(csvRow);
// Output: "Toyota,Corolla,2021"
// Explanation: Used when exporting data to CSV or displaying in logs
