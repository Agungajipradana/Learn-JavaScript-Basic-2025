// ===============================
// Object.keys(obj)
// ===============================
// Description:
// Object.keys(obj) is a static method in JavaScript that returns an array
// containing the names (keys) of the enumerable own properties of an object.

// Syntax:
// Object.keys(object)

// ===============================
// Basic Example
// ===============================
const user = {
  name: "John",
  age: 25,
  email: "john@example.com",
};

console.log(Object.keys(user));
// Output: ['name', 'age', 'email']
// Explanation: It returns all the top-level keys of the object

// ===============================
// Example with Empty Object
// ===============================
const emptyObject = {};

console.log(Object.keys(emptyObject));
// Output: []
// Explanation: There are no keys in an empty object

// ===============================
// Example with Nested Objects
// ===============================
const employee = {
  id: 101,
  name: "Alice",
  department: {
    name: "Engineering",
    location: "Building 1",
  },
};

console.log(Object.keys(employee));
// Output: ['id', 'name', 'department']
// Explanation: Only the top-level keys are returned, not nested keys

// ===============================
// Example: Using Object.keys in a Loop
// ===============================
const product = {
  name: "Laptop",
  price: 1200,
  brand: "Lenovo",
};

Object.keys(product).forEach((key) => {
  console.log(`${key}: ${product[key]}`);
});
// Output:
// name: Laptop
// price: 1200
// brand: Lenovo
// Explanation: We loop through all keys and print key-value pairs

// ===============================
// Example: Filtering properties dynamically
// ===============================
const settings = {
  theme: "dark",
  layout: "grid",
  debug: true,
  version: 2,
};

// Case: Get only keys with string values
const stringKeys = Object.keys(settings).filter(
  (key) => typeof settings[key] === "string"
);

console.log(stringKeys);
// Output: ['theme', 'layout']
// Explanation: We filter only the keys that have string values

// ===============================
// Real-world Case: Dynamic Form Field Validation
// ===============================
const formData = {
  username: "john123",
  email: "john@example.com",
  password: "",
  confirmPassword: "",
};

const emptyFields = Object.keys(formData).filter((key) => formData[key] === "");

console.log(emptyFields);
// Output: ['password', 'confirmPassword']
// Explanation: Useful in form validation to detect which fields are empty

// ===============================
// Real-world Case: Converting Object to CSV Header Row
// ===============================
const userData = {
  id: 1,
  name: "Jane Doe",
  age: 30,
  email: "jane@example.com",
};

const csvHeader = Object.keys(userData).join(",");
console.log(csvHeader);
// Output: "id,name,age,email"
// Explanation: Often used to generate CSV headers for export
