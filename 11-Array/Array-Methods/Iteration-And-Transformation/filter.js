// ============================================
// ARRAY METHOD: filter()
// ============================================
// The filter() method creates a new array with all elements
// that pass the test implemented by the provided function.

// It's commonly used to extract a subset of data based on conditions.

// ============================================
// Syntax:
// const newArray = array.filter(callback(currentValue, index, array));
// ============================================

// --------------------------------------------
// Example 1: Basic Usage - Filter even numbers
// --------------------------------------------

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log("Even Numbers:", evenNumbers);
// Output: [2, 4, 6]

// --------------------------------------------
// Example 2: Filtering strings with a condition
// --------------------------------------------

const names = ["Alice", "Bob", "Andrew", "Eve"];
const aNames = names.filter((name) => name.startsWith("A"));

console.log("Names starting with A:", aNames);
// Output: ['Alice', 'Andrew']

// --------------------------------------------
// Example 3: Filter array of objects by property
// --------------------------------------------

const products = [
  { name: "Laptop", price: 1500 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 },
];

const expensiveProducts = products.filter((product) => product.price > 100);

console.log("Expensive Products:", expensiveProducts);
// Output: [ { name: 'Laptop', price: 1500 } ]

// --------------------------------------------
// Example 4: Filter users by active status
// --------------------------------------------

const users = [
  { id: 1, name: "Alice", isActive: true },
  { id: 2, name: "Bob", isActive: false },
  { id: 3, name: "Charlie", isActive: true },
];

const activeUsers = users.filter((user) => user.isActive);

console.log("Active Users:", activeUsers);
// Output: [ { id: 1, name: 'Alice', isActive: true }, { id: 3, name: 'Charlie', isActive: true } ]

// --------------------------------------------
// Example 5: Remove falsy values (filter Boolean)
// --------------------------------------------

const mixedArray = [0, 1, "", "Hello", null, undefined, false, "World"];
const truthyValues = mixedArray.filter(Boolean);

console.log("Truthy Values:", truthyValues);
// Output: [1, "Hello", "World"]

// --------------------------------------------
// Example 6: Filtering using index
// --------------------------------------------

const letters = ["a", "b", "c", "d"];
const evenIndexLetters = letters.filter((letter, index) => index % 2 === 0);

console.log("Letters at even indices:", evenIndexLetters);
// Output: ['a', 'c']

// --------------------------------------------
// Example 7: Chain filter() with map()
// --------------------------------------------

const scores = [40, 60, 80, 90];
const passedWithGrades = scores
  .filter((score) => score >= 60)
  .map((score) => ({
    score,
    grade: score >= 90 ? "A" : score >= 80 ? "B" : "C",
  }));

console.log("Passed Scores with Grades:", passedWithGrades);
// Output:
// [
//   { score: 60, grade: 'C' },
//   { score: 80, grade: 'B' },
//   { score: 90, grade: 'A' }
// ]

// --------------------------------------------
// Example 8: Real-life case - Search filter
// --------------------------------------------

const searchKeyword = "lap";
const searchResults = products.filter((product) =>
  product.name.toLowerCase().includes(searchKeyword.toLowerCase())
);

console.log("Search Results:", searchResults);
// Output: [ { name: 'Laptop', price: 1500 } ]

// --------------------------------------------
// Example 9: Nested filtering
// --------------------------------------------

const orders = [
  {
    id: 1,
    items: [
      { name: "Mouse", quantity: 1 },
      { name: "Keyboard", quantity: 0 },
    ],
  },
  {
    id: 2,
    items: [
      { name: "Laptop", quantity: 1 },
      { name: "Charger", quantity: 2 },
    ],
  },
];

// Get orders that contain items with quantity > 0
const validOrders = orders.filter((order) =>
  order.items.some((item) => item.quantity > 0)
);

console.log("Valid Orders:", validOrders);
// Output: both orders are valid since both have items with quantity > 0

// --------------------------------------------
// Example 10: Compare with find()
// --------------------------------------------

const ids = [1, 2, 3, 4, 5];

const resultFilter = ids.filter((id) => id > 3);
console.log("filter result:", resultFilter); // [4, 5]

const resultFind = ids.find((id) => id > 3);
console.log("find result:", resultFind); // 4

// Note: filter returns all matches, find returns only the first match
