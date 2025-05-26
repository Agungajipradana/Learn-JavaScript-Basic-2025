// -------------------------------------------
// Math.min(...values)
// Returns the smallest number from the given arguments.
// If any argument is not a number and cannot be coerced to one, the result is NaN.
// If no arguments are provided, returns Infinity.
// -------------------------------------------

// Basic examples
console.log(Math.min(5, 10));
// Output: 5
// Explanation: 5 is the smallest of the two numbers

console.log(Math.min(-10, -5, 0));
// Output: -10
// Explanation: -10 is the smallest value

console.log(Math.min());
// Output: Infinity
// Explanation: No arguments provided, default is Infinity

console.log(Math.min(2, "5", true));
// Output: 1
// Explanation: '5' is coerced to 5, true is coerced to 1

console.log(Math.min(4, "hello"));
// Output: NaN
// Explanation: 'hello' cannot be coerced to a number

// -------------------------------------------
// Advanced use cases
// -------------------------------------------

// 1. Find the min value in an array using spread operator
const numbers = [3, 1, 7, 4, 9];
console.log(Math.min(...numbers));
// Output: 1

// 2. Get the min of dynamically generated values
function getRandomMin(count) {
  const randomNumbers = Array.from(
    { length: count },
    () => Math.random() * 100
  );
  console.log("Random numbers:", randomNumbers);
  return Math.min(...randomNumbers);
}
console.log("Min random number:", getRandomMin(5));
// Output: Min of 5 random numbers

// 3. Compare object values
const people = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 35 },
  { name: "Charlie", age: 28 },
];
const minAge = Math.min(...people.map((p) => p.age));
console.log(minAge);
// Output: 22

// 4. Find the person with the lowest score
const scores = [
  { player: "A", score: 15 },
  { player: "B", score: 27 },
  { player: "C", score: 10 },
];
const lowestScore = Math.min(...scores.map((s) => s.score));
const lowestPlayer = scores.find((s) => s.score === lowestScore);
console.log(lowestPlayer);
// Output: { player: 'C', score: 10 }

// 5. Find the range between max and min
const values = [5, 10, 2, 8];
const min = Math.min(...values);
const max = Math.max(...values);
console.log(`Range: ${max - min}`);
// Output: Range: 8

// 6. Avoiding spread for very large arrays (alternative approach)
function getMinFromLargeArray(arr) {
  return arr.reduce((min, curr) => (curr < min ? curr : min), Infinity);
}
const largeArray = Array.from({ length: 10000 }, (_, i) => 10000 - i);
console.log(getMinFromLargeArray(largeArray));
// Output: 1

// 7. Handling negative and positive mix
const mixed = [-10, 0, 25, -5];
console.log(Math.min(...mixed));
// Output: -10

// 8. Return minimum value or a fallback
function getMinOrDefault(values, fallback = 0) {
  const result = Math.min(...values);
  return Number.isFinite(result) ? result : fallback;
}
console.log(getMinOrDefault([])); // Output: 0
console.log(getMinOrDefault([1, 2, 3])); // Output: 1

// 9. Validate user input and find min
function validateAndMin(values) {
  if (values.some((v) => typeof v !== "number")) return "Invalid input";
  return Math.min(...values);
}
console.log(validateAndMin([1, 2, 3])); // Output: 1
console.log(validateAndMin([1, "x", 3])); // Output: Invalid input

// 10. Use in price comparison logic
const prices = [120, 180, 95];
const lowestPrice = Math.min(...prices);
console.log(`Lowest price: $${lowestPrice}`);
// Output: Lowest price: $95
