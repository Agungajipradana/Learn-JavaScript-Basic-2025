// =======================================
// DO...WHILE LOOP IN JAVASCRIPT
// =======================================

// --------------------------------------------------
// 1. Basic do...while Loop
// --------------------------------------------------
// The block is executed at least once before checking the condition.
let i = 0;
do {
  console.log("Basic loop - iteration:", i);
  i++;
} while (i < 5);
// Output:
// Basic loop - iteration: 0
// Basic loop - iteration: 1
// Basic loop - iteration: 2
// Basic loop - iteration: 3
// Basic loop - iteration: 4

// --------------------------------------------------
// 2. do...while Executes Once Even if False
// --------------------------------------------------
// Demonstrates that the loop executes once even if the condition is false.
let count = 10;
do {
  console.log("Executed once - count:", count);
  count++;
} while (count < 5);
// Output:
// Executed once - count: 10

// --------------------------------------------------
// 3. User Input Validation Simulation
// --------------------------------------------------
// Simulates asking for input until it's non-empty.
const mockInputs = ["", "   ", "John"];
let input;
let index = 0;

do {
  input = mockInputs[index];
  console.log(`Input attempt ${index + 1}: "${input}"`);
  index++;
} while (input.trim() === "" && index < mockInputs.length);
// Output:
// Input attempt 1: ""
// Input attempt 2: "   "
// Input attempt 3: "John"

// --------------------------------------------------
// 4. Iterating Over an Array
// --------------------------------------------------
// Loop through an array using do...while.
const fruits = ["apple", "banana", "cherry"];
let j = 0;

do {
  console.log(`Fruit at index ${j}:`, fruits[j]);
  j++;
} while (j < fruits.length);
// Output:
// Fruit at index 0: apple
// Fruit at index 1: banana
// Fruit at index 2: cherry

// --------------------------------------------------
// 5. Summing Numbers
// --------------------------------------------------
// Calculates the sum of numbers 1 through 5 using do...while.
let num = 1;
let sum = 0;

do {
  sum += num;
  num++;
} while (num <= 5);

console.log("Total sum from 1 to 5:", sum);
// Output:
// Total sum from 1 to 5: 15

// --------------------------------------------------
// 6. Generating Random Numbers Until a Condition
// --------------------------------------------------
// Example: Keep generating random numbers until we get a number > 0.9
let randomValue;

do {
  randomValue = Math.random();
  console.log("Generated:", randomValue);
} while (randomValue <= 0.9);

console.log("Stopped at:", randomValue);
// Output:
// Generated: 0.58
// ...
// Stopped at: 0.91 (example output)

// --------------------------------------------------
// 7. Using break in do...while
// --------------------------------------------------
// Stop loop early based on a custom condition.
let k = 0;
do {
  if (k === 3) {
    console.log("Breaking at k =", k);
    break;
  }
  console.log("k =", k);
  k++;
} while (k < 5);
// Output:
// k = 0
// k = 1
// k = 2
// Breaking at k = 3

// --------------------------------------------------
// 8. Real-World Case: Retry Until Condition is Met
// --------------------------------------------------
// Example: Simulate retrying an operation (e.g., API call) until success.
let attempt = 0;
let success = false;

do {
  attempt++;
  console.log(`Attempt ${attempt}: Trying operation...`);

  // Simulate 3rd attempt succeeds
  if (attempt === 3) {
    success = true;
    console.log("Operation succeeded");
  } else {
    console.log("Operation failed");
  }
} while (!success && attempt < 5);
// Output:
// Attempt 1: Trying operation...
// Operation failed
// Attempt 2: Trying operation...
// Operation failed
// Attempt 3: Trying operation...
// Operation succeeded
