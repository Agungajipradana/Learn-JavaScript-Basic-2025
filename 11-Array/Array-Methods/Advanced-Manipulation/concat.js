// ============================================
// ARRAY METHOD: concat()
// ============================================
// The `concat()` method is used to merge two or more arrays.
// It returns a **new array** without modifying the original arrays.

// ============================================
// Example 1: Simple concatenation of two arrays
// ============================================
const fruits = ["apple", "banana"];
const moreFruits = ["orange", "grape"];

const allFruits = fruits.concat(moreFruits);

console.log("All fruits:", allFruits);
// Output: ["apple", "banana", "orange", "grape"]
// Original arrays remain unchanged

// ============================================
// Example 2: Concatenating more than two arrays
// ============================================
const numbers1 = [1, 2];
const numbers2 = [3, 4];
const numbers3 = [5, 6];

const combined = numbers1.concat(numbers2, numbers3);

console.log("Combined numbers:", combined);
// Output: [1, 2, 3, 4, 5, 6]

// ============================================
// Example 3: Concatenating arrays and values
// ============================================
const base = [10, 20];
const result = base.concat(30, [40, 50]);

console.log("Concatenated with values:", result);
// Output: [10, 20, 30, 40, 50]

// ============================================
// Example 4: Concatenating arrays of strings
// ============================================
const greet = ["Hello"];
const name = ["John"];

const message = greet.concat(name);

console.log("Greeting message:", message.join(" "));
// Output: "Hello John"

// ============================================
// Example 5: Merging user lists
// ============================================
const admins = ["Alice", "Bob"];
const users = ["Charlie", "David"];

const allUsers = admins.concat(users);

console.log("All users:", allUsers);
// Output: ["Alice", "Bob", "Charlie", "David"]

// ============================================
// Example 6: Concatenating nested arrays (shallow only)
// ============================================
const nested1 = [[1], [2]];
const nested2 = [[3], [4]];

const combinedNested = nested1.concat(nested2);

console.log("Combined nested arrays:", combinedNested);
// Output: [[1], [2], [3], [4]]
// Note: concat is shallow, it does not deep clone inner arrays

// ============================================
// Example 7: Flattening with concat + spread
// ============================================
const part1 = [1, 2];
const part2 = [3, 4];
const part3 = [5, 6];

const flatAll = [].concat(...part1, ...part2, ...part3);

console.log("Flattened result:", flatAll);
// Output: [1, 2, 3, 4, 5, 6]

// ============================================
// Example 8: Concatenating with empty arrays
// ============================================
const start = [1, 2];
const empty = [];
const end = [3, 4];

const full = start.concat(empty, end);

console.log("Full array with empty:", full);
// Output: [1, 2, 3, 4]

// ============================================
// Example 9: Merging results from functions
// ============================================
function getFrontend() {
  return ["HTML", "CSS", "JavaScript"];
}

function getBackend() {
  return ["Node.js", "Express"];
}

const fullStack = getFrontend().concat(getBackend());

console.log("Full stack skills:", fullStack);
// Output: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express']
