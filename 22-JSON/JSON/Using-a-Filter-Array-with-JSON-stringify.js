// =====================================================
// Using a Filter Array with JSON.stringify()
// =====================================================

// -----------------------------------------------------
// BASIC EXAMPLE: Include selected properties only
// -----------------------------------------------------

const user = {
  name: "Michael",
  age: 32,
  email: "michael@example.com",
  isAdmin: true,
};

// Only include name and email in the JSON output
const filteredJSON = JSON.stringify(user, ["name", "email"]);

console.log("[Basic] Filtered JSON:", filteredJSON);
// Output: {"name":"Michael","email":"michael@example.com"}

// -----------------------------------------------------
// INTERMEDIATE EXAMPLE: Nested object with selected keys
// -----------------------------------------------------

const article = {
  title: "JavaScript Tips",
  author: {
    name: "Natalie",
    email: "natalie@example.com",
  },
  tags: ["JS", "web", "tips"],
  published: true,
};

// Note: The filter array only works at the top level
const articleJSON = JSON.stringify(article, ["title", "author"]);

console.log("\n[Intermediate] Article JSON (shallow filter):", articleJSON);
// Output: {"title":"JavaScript Tips","author":{"name":"Natalie","email":"natalie@example.com"}}

// -----------------------------------------------------
// ADVANCED EXAMPLE: Use filter array + formatting
// -----------------------------------------------------

const product = {
  id: 301,
  name: "Wireless Mouse",
  price: 250,
  stock: 150,
  supplier: "TechCorp",
  warehouse: "B2",
  category: "Accessories",
};

// Selectively include properties in formatted JSON
const productJSON = JSON.stringify(
  product,
  ["id", "name", "price", "category"],
  2
);

console.log("\n[Advanced] Formatted Filtered JSON:\n", productJSON);
/*
Output:
{
  "id": 301,
  "name": "Wireless Mouse",
  "price": 250,
  "category": "Accessories"
}
*/

// -----------------------------------------------------
// REAL-WORLD CASE: Send safe user data to API
// -----------------------------------------------------

const fullUser = {
  id: 808,
  username: "frontendfan",
  email: "fan@example.com",
  password: "notsecure",
  createdAt: new Date(),
  lastLogin: new Date(),
};

// Only include safe public fields
const safeJSON = JSON.stringify(fullUser, ["id", "username", "email"]);

console.log("\n[Real-World] Safe User JSON:", safeJSON);
// Output: {"id":808,"username":"frontendfan","email":"fan@example.com"}

// -----------------------------------------------------
// NOTE:
// - A filter array in JSON.stringify(object, filterArray) limits which keys are included.
// - It only applies to the top-level keys, not nested objects.
// - Use when sending public data, filtering logs, or securing sensitive info.
// -----------------------------------------------------
