// =====================================================
// SPREAD OPERATOR TO COPY ARRAY IN JAVASCRIPT
// =====================================================

// =========================================
// 1. Basic Array Copy Using Spread Operator
// =========================================
const original = [1, 2, 3];
const copy = [...original];
console.log(copy);
// Output: [1, 2, 3]

// =========================================
// 2. Verifying Independent Copy (Shallow Copy)
// =========================================
copy.push(4);
console.log("Original:", original); // [1, 2, 3]
console.log("Copy:", copy); // [1, 2, 3, 4]
// Changes to 'copy' do not affect 'original'

// =========================================
// 3. Copying Array with Non-Primitive Elements
// =========================================
const users = [{ name: "john" }, { name: "sara" }];

const copiedUsers = [...users];
copiedUsers[0].name = "mike";
console.log(users[0].name); // 'mike'
console.log(copiedUsers[0].name); // 'mike'
// Note: Spread creates a shallow copy, not deep copy

// =========================================
// 4. Real-World Case: Resetting to Original List
// =========================================
const defaultItems = ["home", "about", "contact"];
let currentItems = [...defaultItems];
currentItems.push("blog");
console.log("Current:", currentItems); // ['home', 'about', 'contact', 'blog']
console.log("Default:", defaultItems); // ['home', 'about', 'contact']

// Reset currentItems to default
currentItems = [...defaultItems];
console.log("Reset:", currentItems); // ['home', 'about', 'contact']

// =========================================
// 5. Combining Copy with Sorting
// =========================================
const scores = [50, 90, 30, 80];
const sortedScores = [...scores].sort((a, b) => b - a);
console.log("Original:", scores); // [50, 90, 30, 80]
console.log("Sorted:", sortedScores); // [90, 80, 50, 30]
// Spread allows non-destructive sorting

// =========================================
// 6. Using Spread to Clone While Filtering
// =========================================
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = [...numbers].filter((n) => n % 2 === 0);
console.log("Original:", numbers); // [1, 2, 3, 4, 5]
console.log("Even:", evenNumbers); // [2, 4]
