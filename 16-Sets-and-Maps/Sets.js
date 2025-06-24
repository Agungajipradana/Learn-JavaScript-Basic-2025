// ===========================
// JavaScript Set Examples
// ===========================

// ---------------------------
// 1. Creating an empty Set
// ---------------------------
const emptySet = new Set();
console.log("1. Empty Set:", emptySet); // Output: Set(0) {}

// ---------------------------
// 2. Creating a Set from an Array
// ---------------------------
const numberArray = [1, 2, 3, 3, 4, 4, 5];
const numberSet = new Set(numberArray);
console.log("2. Set from Array:", numberSet); // Output: Set(5) {1, 2, 3, 4, 5}

// ---------------------------
// 3. Adding an element to a Set
// ---------------------------
numberSet.add(6); // Add a new unique value
numberSet.add(3); // Duplicate, will be ignored
console.log("3. After Adding Elements:", numberSet); // Output: Set(6) {1, 2, 3, 4, 5, 6}

// ---------------------------
// 4. Deleting an element from a Set
// ---------------------------
numberSet.delete(2); // Remove value 2 from the set
console.log("4. After Deleting 2:", numberSet); // Output: Set(5) {1, 3, 4, 5, 6}

// ---------------------------
// 5. Checking if an element exists in a Set
// ---------------------------
console.log("5. Has 3:", numberSet.has(3)); // true
console.log("5. Has 7:", numberSet.has(7)); // false

// ---------------------------
// 6. Clearing all elements from a Set
// ---------------------------
const clearSet = new Set([1, 2, 3]);
console.log("6. Before Clear:", clearSet); // Set(3) {1, 2, 3}
clearSet.clear();
console.log("6. After Clear:", clearSet); // Set(0) {}

// ---------------------------
// 7. Union of Sets
// ---------------------------
// Union means combining all elements from both sets (no duplicates)
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

const union = new Set([...setA, ...setB]); // Spread both sets into a new one
console.log("7. Union of setA and setB:", union); // Set(5) {1, 2, 3, 4, 5}

// ---------------------------
// 8. Intersection of Sets
// ---------------------------
// Intersection means elements that exist in both sets
const intersection = new Set([...setA].filter((item) => setB.has(item)));
console.log("8. Intersection of setA and setB:", intersection); // Set(1) {3}

// ---------------------------
// 9. Difference of Sets
// ---------------------------
// Difference means elements in setA that are NOT in setB
const difference = new Set([...setA].filter((item) => !setB.has(item)));
console.log("9. Difference of setA and setB:", difference); // Set(2) {1, 2}

// ---------------------------
// BONUS CASE: Use Set to remove duplicates from array of strings
// ---------------------------
const fruits = ["apple", "banana", "apple", "orange", "banana"];
const uniqueFruits = [...new Set(fruits)];
console.log("Bonus. Unique Fruits:", uniqueFruits); // ['apple', 'banana', 'orange']

// ---------------------------
// BONUS CASE: Count unique characters in a string
// ---------------------------
const text = "javascript";
const uniqueChars = new Set(text);
console.log("Bonus. Unique Characters in 'javascript':", uniqueChars); // Set(9) {'j', 'a', 'v', 's', 'c', 'r', 'i', 'p', 't'}
console.log("Bonus. Total Unique Characters:", uniqueChars.size); // 9
