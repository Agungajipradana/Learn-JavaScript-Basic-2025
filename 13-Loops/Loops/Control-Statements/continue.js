// =======================================
// CONTINUE STATEMENT IN JAVASCRIPT LOOPS
// =======================================

// --------------------------------------------------
// 1. Basic Usage of continue in a for Loop
// --------------------------------------------------
// The `continue` statement skips the current iteration and moves to the next one.

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // Skip when i is 3
  }
  console.log(i);
}
// Output:
// 1
// 2
// 4
// 5

// --------------------------------------------------
// 2. Using continue in a while Loop
// --------------------------------------------------
// Skipping certain values inside a while loop.

let count = 0;

while (count < 5) {
  count++;
  if (count === 2) {
    continue; // Skip printing when count is 2
  }
  console.log(`Count: ${count}`);
}
// Output:
// Count: 1
// Count: 3
// Count: 4
// Count: 5

// --------------------------------------------------
// 3. Skipping Odd Numbers in a for Loop
// --------------------------------------------------
// Print only even numbers from 1 to 10 using continue.

for (let num = 1; num <= 10; num++) {
  if (num % 2 !== 0) {
    continue; // Skip odd numbers
  }
  console.log(num);
}
// Output:
// 2
// 4
// 6
// 8
// 10

// --------------------------------------------------
// 4. Continue in Nested Loops (Inner Loop Only)
// --------------------------------------------------
// Skip certain values in the inner loop.

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) {
      continue; // Skip j == 2
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}
// Output:
// i: 1, j: 1
// i: 1, j: 3
// i: 2, j: 1
// i: 2, j: 3
// i: 3, j: 1
// i: 3, j: 3

// --------------------------------------------------
// 5. Real-World Case: Filtering Valid Inputs
// --------------------------------------------------
// Skip empty or whitespace-only inputs.

const userInputs = ["hello", "", "world", " ", "JavaScript"];

for (const input of userInputs) {
  if (input.trim() === "") {
    continue; // Skip invalid inputs
  }
  console.log(`Valid input: ${input}`);
}
// Output:
// Valid input: hello
// Valid input: world
// Valid input: JavaScript

// --------------------------------------------------
// 6. Real-World Case: Processing Data but Skip Errors
// --------------------------------------------------
// Suppose we have data with some invalid entries that should be skipped.

const data = [100, 200, null, 400, undefined, 500];

for (const value of data) {
  if (value == null) {
    continue; // Skip null or undefined
  }
  console.log(`Processing value: ${value}`);
}
// Output:
// Processing value: 100
// Processing value: 200
// Processing value: 400
// Processing value: 500

// --------------------------------------------------
// 7. Combining continue with Other Conditions
// --------------------------------------------------
// Skip values below threshold, process the rest.

const scores = [45, 82, 90, 32, 77, 100];
const passingScore = 60;

for (const score of scores) {
  if (score < passingScore) {
    continue; // Skip failing scores
  }
  console.log(`Passed with score: ${score}`);
}
// Output:
// Passed with score: 82
// Passed with score: 90
// Passed with score: 77
// Passed with score: 100
