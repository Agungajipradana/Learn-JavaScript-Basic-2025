// -------------------------------------------
// Math.max(...values)
// Returns the largest number from the given arguments.
// If any argument is not a number and cannot be coerced to one, the result is NaN.
// If no arguments are provided, returns -Infinity.
// -------------------------------------------

// Basic examples

// Output: 10
// Explanation: 10 is the largest of the two numbers

console.log(Math.max(-10, -5, 0));
// Output: 0
// Explanation: 0 is the largest value among the negatives

console.log(Math.max());
// Output: -Infinity
// Explanation: No arguments provided, default is -Infinity

console.log(Math.max(2, "5", true));
// Output: 5
// Explanation: '5' is coerced to 5, true is coerced to 1

console.log(Math.max(4, "hello"));
// Output: NaN
// Explanation: 'hello' cannot be coerced to a number

// -------------------------------------------
// Advanced use cases
// -------------------------------------------

// 1. Find the max value in an array using spread operator
const numbers = [3, 1, 7, 4, 9];
console.log(Math.max(...numbers));
// Output: 9

// 2. Get the max of dynamically generated values
function getRandomMax(count) {
  const randomNumbers = Array.from(
    { length: count },
    () => Math.random() * 100
  );
  console.log("Random numbers:", randomNumbers);
  return Math.max(...randomNumbers);
}
console.log("Max random number:", getRandomMax(5));
// Output: Max of 5 random numbers

// 3. Compare object values
const people = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 35 },
  { name: "Charlie", age: 28 },
];
const maxAge = Math.max(...people.map((p) => p.age));
console.log(maxAge);
// Output: 35

// 4. Find the person with the highest score
const scores = [
  { player: "A", score: 15 },
  { player: "B", score: 27 },
  { player: "C", score: 23 },
];
const topScore = Math.max(...scores.map((s) => s.score));
const topPlayer = scores.find((s) => s.score === topScore);
console.log(topPlayer);
// Output: { player: 'B', score: 27 }

// 5. Use with Math.min to find range
const values = [5, 10, 2, 8];
const max = Math.max(...values);
const min = Math.min(...values);
console.log(`Range: ${max - min}`);
// Output: Range: 8

// 6. Avoiding spread for very large arrays (alternative approach)
function getMaxFromLargeArray(arr) {
  return arr.reduce((max, curr) => (curr > max ? curr : max), -Infinity);
}
const largeArray = Array.from({ length: 10000 }, (_, i) => i + 1);
console.log(getMaxFromLargeArray(largeArray));
// Output: 10000

// 7. Handling negative and positive mix
const mixed = [-10, 0, 25, -5];
console.log(Math.max(...mixed));
// Output: 25

// 8. Return maximum value or a fallback
function getMaxOrDefault(values, fallback = 0) {
  const result = Math.max(...values);
  return Number.isFinite(result) ? result : fallback;
}
console.log(getMaxOrDefault([])); // Output: 0
console.log(getMaxOrDefault([1, 2, 3])); // Output: 3

// 9. Validate user input and find max
function validateAndMax(values) {
  if (values.some((v) => typeof v !== "number")) return "Invalid input";
  return Math.max(...values);
}
console.log(validateAndMax([1, 2, 3])); // Output: 3
console.log(validateAndMax([1, "x", 3])); // Output: Invalid input

// 10. Use inside other calculations
const prices = [120, 180, 95];
const highestPrice = Math.max(...prices);
const discounted = highestPrice * 0.9;
console.log(`Discounted highest price: $${discounted}`);
// Output: Discounted highest price: $162
