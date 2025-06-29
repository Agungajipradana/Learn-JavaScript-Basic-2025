// =====================================================
// Converting JSON to JavaScript Object
// =====================================================

// -----------------------------------------------------
// BASIC EXAMPLE: Simple JSON string
// -----------------------------------------------------

const jsonString = '{"name":"John", "age":25}';

// Convert JSON string to JavaScript object
const user = JSON.parse(jsonString);

console.log("[Basic] Name:", user.name); // Output: John
console.log("[Basic] Age:", user.age); // Output: 25

// -----------------------------------------------------
// INTERMEDIATE EXAMPLE: Nested JSON
// -----------------------------------------------------

const jsonNested = `
{
  "name": "Emma",
  "contact": {
    "email": "emma@example.com",
    "phone": "123-456-7890"
  },
  "skills": ["JavaScript", "React", "Node.js"]
}
`;

const dev = JSON.parse(jsonNested);

console.log("\n[Intermediate] Name:", dev.name); // Output: Emma
console.log("[Intermediate] Email:", dev.contact.email); // Output: emma@example.com
console.log("[Intermediate] First Skill:", dev.skills[0]); // Output: JavaScript

// -----------------------------------------------------
// ADVANCED EXAMPLE: Array of objects
// -----------------------------------------------------

const jsonArray = `
[
  { "id": 1, "title": "Post One", "published": true },
  { "id": 2, "title": "Post Two", "published": false },
  { "id": 3, "title": "Post Three", "published": true }
]
`;

const posts = JSON.parse(jsonArray);

console.log("\n[Advanced] All Post Titles:");
posts.forEach((post, index) => {
  console.log(
    ` - ${index + 1}: ${post.title} (${post.published ? "Published" : "Draft"})`
  );
});
// Output:
// - 1: Post One (Published)
// - 2: Post Two (Draft)
// - 3: Post Three (Published)

// -----------------------------------------------------
// REAL-WORLD CASE: Parsing server response (simulated)
// -----------------------------------------------------

const serverResponse = `
{
  "status": "success",
  "data": {
    "user": {
      "id": 101,
      "username": "johndoe",
      "roles": ["admin", "editor"]
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR..."
  }
}
`;

const apiResult = JSON.parse(serverResponse);

console.log("\n[Real-World] Username:", apiResult.data.user.username); // Output: johndoe
console.log("[Real-World] Roles:", apiResult.data.user.roles.join(", ")); // Output: admin, editor
console.log(
  "[Real-World] Auth Token (truncated):",
  apiResult.token.slice(0, 10) + "..."
);
// Output: eyJhbGciO...

// -----------------------------------------------------
// WARNING: Invalid JSON (uncomment to test error)
// -----------------------------------------------------

// const badJSON = "{name: 'John'}"; // Invalid: keys must be in double quotes
// const result = JSON.parse(badJSON); // This will throw a SyntaxError
