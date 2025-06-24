// =====================================================
// DESTRUCTURING DURING ITERATION IN JAVASCRIPT
// =====================================================

// =========================================
// 1. Basic Array Destructuring in Loop
// =========================================
const pairs = [
  [1, "one"],
  [2, "two"],
  [3, "three"],
];

// Loop through array of pairs and destructure each pair
for (const [num, word] of pairs) {
  console.log(`${num} = ${word}`);
  // Output:
  // 1 = one
  // 2 = two
  // 3 = three
}

// =========================================
// 2. Array of Objects (with Object Destructuring)
// =========================================
const people = [
  { name: "john", age: 30 },
  { name: "mike", age: 25 },
  { name: "sara", age: 28 },
];

// Destructure each object while iterating
for (const { name, age } of people) {
  console.log(`${name} is ${age} years old`);
}

// =========================================
// 3. Nested Destructuring during Iteration
// =========================================
const users = [
  {
    id: 1,
    profile: { name: "john", email: "john@example.com" },
  },
  {
    id: 2,
    profile: { name: "mike", email: "mike@example.com" },
  },
];

// Destructure nested object properties in the loop
for (const {
  id,
  profile: { name, email },
} of users) {
  console.log(`User ${id}: ${name} (${email})`);
  // Output:
  // User 1: john (john@example.com)
  // User 2: mike (mike@example.com)
}

// =========================================
// 4. Destructuring with Index in forEach()
// =========================================
const colors = ["red", "green", "blue"];

colors.forEach((color, index) => {
  console.log(`Color ${index + 1}: ${color}`);
  // Output:
  // Color 1: red
  // Color 2: green
  // Color 3: blue
});

// =========================================
// 5. Real-World Case: Parsing Query Parameters
// =========================================
const queryParams = [
  ["search", "books"],
  ["page", "2"],
  ["sort", "asc"],
];

// Convert array of key-value pairs into object using destructuring
const query = {};
for (const [key, value] of queryParams) {
  query[key] = value;
}
console.log(query);
// Output:
// { search: 'books', page: '2', sort: 'asc' }

// =========================================
// 6. Real-World Case: Logging Server Logs
// =========================================
const logs = [
  ["INFO", "Server started"],
  ["ERROR", "Connection failed"],
  ["DEBUG", "Cache cleared"],
];

for (const [level, message] of logs) {
  console.log(`[${level}] ${message}`);
  // Output:
  // [INFO] Server started
  // [ERROR] Connection failed
  // [DEBUG] Cache cleared
}
