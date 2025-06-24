// ===========================
// JavaScript Map Examples
// ===========================

// ---------------------------
// 1. Creating an empty Map
// ---------------------------
const emptyMap = new Map();
console.log("1. Empty Map:", emptyMap); // Output: Map(0) {}

// ---------------------------
// 2. Creating a Map from an array
// ---------------------------
// Each item is a [key, value] pair
const userMap = new Map([
  ["name", "John"],
  ["age", 25],
  ["isAdmin", false],
]);
console.log("2. Map from array:", userMap);
// Output: Map(3) {"name" => "John", "age" => 25, "isAdmin" => false}

// ---------------------------
// 3. Adding values to the Map
// ---------------------------
userMap.set("email", "john@example.com"); // Add a new key-value pair
userMap.set("age", 26); // Overwrite the existing 'age' value
console.log("3. After adding/updating values:", userMap);
// Output: Map(4) {"name" => "John", "age" => 26, "isAdmin" => false, "email" => "john@example.com"}

// ---------------------------
// 4. Getting a value from the Map
// ---------------------------
const name = userMap.get("name");
console.log("4. Get value for key 'name':", name); // Output: John

const unknown = userMap.get("unknownKey");
console.log("4. Get value for non-existent key:", unknown); // Output: undefined

// ---------------------------
// 5. Checking if a key exists in the Map
// ---------------------------
console.log("5. Has key 'email':", userMap.has("email")); // Output: true
console.log("5. Has key 'password':", userMap.has("password")); // Output: false

// ---------------------------
// BONUS: Iterating over a Map
// ---------------------------
console.log("Bonus. Iterate over map using for...of:");
for (const [key, value] of userMap) {
  console.log(`${key}: ${value}`);
}
// Output:
// name: John
// age: 26
// isAdmin: false
// email: john@example.com

// ---------------------------
// BONUS: Using non-string keys
// ---------------------------
const complexMap = new Map();

const objKey = { id: 1 };
const funcKey = function () {};
const numKey = 42;

complexMap.set(objKey, "Object as key");
complexMap.set(funcKey, "Function as key");
complexMap.set(numKey, "Number as key");

console.log("Bonus. Complex Map with various key types:");
console.log(complexMap.get(objKey)); // Output: Object as key
console.log(complexMap.get(funcKey)); // Output: Function as key
console.log(complexMap.get(numKey)); // Output: Number as key

// ---------------------------
// BONUS USE CASE: Count frequency of words
// ---------------------------
const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
const wordCount = new Map();

for (const word of words) {
  if (wordCount.has(word)) {
    wordCount.set(word, wordCount.get(word) + 1);
  } else {
    wordCount.set(word, 1);
  }
}

console.log("Bonus. Word frequencies:");
for (const [word, count] of wordCount) {
  console.log(`${word}: ${count}`);
}
// Output:
// apple: 3
// banana: 2
// orange: 1
