// =====================================================
// HOF: filter() IN JAVASCRIPT
// =====================================================

// -----------------------------------------------------
// 1. What is filter()?
// -----------------------------------------------------
// `filter()` is a High Order Function available on arrays.
// It creates a new array with all elements that pass the test
// implemented by the provided function.

// Syntax:
// const filteredArray = array.filter(function (element, index, array) {
//   return condition;
// });

// Only elements returning `true` from the callback will be included.

// -----------------------------------------------------
// 2. Basic Example: Filter Even Numbers
// -----------------------------------------------------

const numbers = [1, 2, 3, 4, 5, 6];

const evens = numbers.filter(function (num) {
  return num % 2 === 0;
});

console.log("Even numbers:", evens); // Output: [2, 4, 6]

// -----------------------------------------------------
// 3. Using Arrow Function Syntax
// -----------------------------------------------------

const odds = numbers.filter((num) => num % 2 !== 0);
console.log("Odd numbers:", odds); // Output: [1, 3, 5]

// -----------------------------------------------------
// 4. Case: Filter Users by Role
// -----------------------------------------------------

const users = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "editor" },
  { id: 3, name: "Charlie", role: "admin" },
  { id: 4, name: "Daisy", role: "viewer" },
];

const admins = users.filter(function (user) {
  return user.role === "admin";
});

console.log("Admin users:", admins);
// Output:
// [
//   { id: 1, name: 'Alice', role: 'admin' },
//   { id: 3, name: 'Charlie', role: 'admin' }
// ]

// -----------------------------------------------------
// 5. Case: Filter Products with Price Above a Threshold
// -----------------------------------------------------

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 25 },
  { name: "Monitor", price: 300 },
];

const expensive = products.filter((product) => product.price > 100);

console.log("Expensive products:", expensive);
// Output:
// [
//   { name: 'Laptop', price: 1000 },
//   { name: 'Monitor', price: 300 }
// ]

// -----------------------------------------------------
// 6. Case: Filter Valid Emails
// -----------------------------------------------------

const emails = [
  "john@example.com",
  "",
  "invalid",
  "jane@example.com",
  null,
  "mark@example.com",
];

const validEmails = emails.filter(function (email) {
  return typeof email === "string" && email.includes("@");
});

console.log("Valid emails:", validEmails);
// Output:
// ['john@example.com', 'jane@example.com', 'mark@example.com']

// -----------------------------------------------------
// 7. Case: Remove Duplicate Values (Using indexOf)
// -----------------------------------------------------

const values = [1, 2, 2, 3, 4, 4, 5];

const uniqueValues = values.filter(function (val, index, array) {
  return array.indexOf(val) === index;
});

console.log("Unique values:", uniqueValues); // Output: [1, 2, 3, 4, 5]

// -----------------------------------------------------
// 8. Case: Filter Based on Nested Object Property
// -----------------------------------------------------

const orders = [
  { id: 101, customer: { name: "Alice" }, paid: true },
  { id: 102, customer: { name: "Bob" }, paid: false },
  { id: 103, customer: { name: "Charlie" }, paid: true },
];

const paidOrders = orders.filter((order) => order.paid);

console.log("Paid orders:", paidOrders);
// Output:
// [
//   { id: 101, customer: { name: 'Alice' }, paid: true },
//   { id: 103, customer: { name: 'Charlie' }, paid: true }
// ]

// -----------------------------------------------------
// 9. Case: Search Filter (Simulate Search Feature)
// -----------------------------------------------------

const blogPosts = [
  { id: 1, title: "JavaScript Basics" },
  { id: 2, title: "Advanced CSS Tricks" },
  { id: 3, title: "Node.js for Beginners" },
];

const searchKeyword = "js";

const searchResults = blogPosts.filter(function (post) {
  return post.title.toLowerCase().includes(searchKeyword.toLowerCase());
});

console.log("Search results for 'js':", searchResults);
// Output:
// [
//   { id: 1, title: 'JavaScript Basics' },
//   { id: 3, title: 'Node.js for Beginners' }
// ]

// -----------------------------------------------------
// 10. Summary: When to Use filter()
// -----------------------------------------------------
/*
✔ Use when you need to include only certain elements from an array
✔ Returns a new array with matching elements
✔ Original array is not modified
✖ Avoid using filter() for transformation → use map()
✖ Avoid using filter() for side effects → use forEach()
*/

// -----------------------------------------------------
// 11. Final Notes
// -----------------------------------------------------
/*
- filter() is commonly used in:
  - Data validation
  - Search features
  - Role-based filtering
  - Removing empty/null/undefined values
  - API result processing
*/
