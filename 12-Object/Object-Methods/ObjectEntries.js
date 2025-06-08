// ===============================
// Object.entries(obj)
// ===============================
// Description:
// Object.entries(obj) returns an array of a given object's own enumerable string-keyed
// property [key, value] pairs.

// Syntax:
// Object.entries(object)

// ===============================
// Basic Example
// ===============================
const user = {
  name: "John",
  age: 25,
  email: "john@example.com",
};

console.log(Object.entries(user));
// Output: [['name', 'John'], ['age', 25], ['email', 'john@example.com']]
// Explanation: Each entry is a 2-element array: [key, value]

// ===============================
// Example with Empty Object
// ===============================
const emptyObject = {};

console.log(Object.entries(emptyObject));
// Output: []
// Explanation: No entries because there are no properties

// ===============================
// Example with Mixed Data Types
// ===============================
const config = {
  darkMode: true,
  version: 3,
  language: "en",
};

console.log(Object.entries(config));
// Output: [['darkMode', true], ['version', 3], ['language', 'en']]
// Explanation: Works with various types of values

// ===============================
// Example: Looping Through Entries
// ===============================
const book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  year: 1937,
};

Object.entries(book).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
// Output:
// title: The Hobbit
// author: J.R.R. Tolkien
// year: 1937
// Explanation: Destructuring [key, value] pairs for readable output

// ===============================
// Example: Converting Entries Back to Object
// ===============================
const entries = [
  ["brand", "Apple"],
  ["model", "iPhone"],
  ["year", 2022],
];

const phone = Object.fromEntries(entries);
console.log(phone);
// Output: { brand: 'Apple', model: 'iPhone', year: 2022 }
// Explanation: Object.entries and Object.fromEntries are often used together

// ===============================
// Real-world Case: Transforming Keys and Values
// ===============================
const settings = {
  fontSize: "12px",
  theme: "dark",
  layout: "grid",
};

// Convert all values to uppercase
const updated = Object.fromEntries(
  Object.entries(settings).map(([key, value]) => [key, value.toUpperCase()])
);

console.log(updated);
// Output: { fontSize: '12PX', theme: 'DARK', layout: 'GRID' }
// Explanation: You can easily transform object data using Object.entries()

// ===============================
// Real-world Case: Filtering Key-Value Pairs
// ===============================
const env = {
  NODE_ENV: "production",
  DEBUG: false,
  API_KEY: "123abc",
};

// Keep only keys that start with 'API'
const filtered = Object.fromEntries(
  Object.entries(env).filter(([key]) => key.startsWith("API"))
);

console.log(filtered);
// Output: { API_KEY: '123abc' }
// Explanation: Very useful for filtering configuration or sensitive keys

// ===============================
// Real-world Case: Comparing Two Objects by Entries
// ===============================
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 20, c: 3 };

// Find differences
const differences = Object.entries(obj1).filter(
  ([key, value]) => obj2[key] !== value
);

console.log(differences);
// Output: [['b', 2]]
// Explanation: Shows properties that are not equal in both objects

// ===============================
// Real-world Case: Generating HTML from Object
// ===============================
const profile = {
  name: "Jane",
  job: "Engineer",
  location: "NYC",
};

const html = Object.entries(profile)
  .map(([key, value]) => `<p><strong>${key}</strong>: ${value}</p>`)
  .join("\n");

console.log(html);
// Output:
// <p><strong>name</strong>: Jane</p>
// <p><strong>job</strong>: Engineer</p>
// <p><strong>location</strong>: NYC</p>
// Explanation: Useful for generating dynamic UI content
