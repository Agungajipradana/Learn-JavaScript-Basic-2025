// =======================================
// BREAK STATEMENT IN JAVASCRIPT LOOPS
// =======================================

// --------------------------------------------------
// 1. Basic Usage of break in a for Loop
// --------------------------------------------------
// The `break` statement exits the loop immediately when a condition is met.

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // Exit the loop when i is 5
  }
  console.log(i);
}
// Output:
// 1
// 2
// 3
// 4

// --------------------------------------------------
// 2. Using break in a while Loop
// --------------------------------------------------
// This example stops an infinite loop with a condition.

let count = 0;

while (true) {
  count++;
  if (count > 3) {
    break; // Stop the loop once count exceeds 3
  }
  console.log(`Count: ${count}`);
}
// Output:
// Count: 1
// Count: 2
// Count: 3

// --------------------------------------------------
// 3. Finding the First Match in an Array
// --------------------------------------------------
// Stop the loop once the first match is found.

const numbers = [10, 25, 8, 30, 15];
const target = 30;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === target) {
    console.log(`Found ${target} at index ${i}`);
    break; // No need to continue looping
  }
}
// Output:
// Found 30 at index 3

// --------------------------------------------------
// 4. Nested Loop with break (Inner Loop Only)
// --------------------------------------------------
// The break will only exit the inner loop.

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) {
      break; // Exits the inner loop only
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}
// Output:
// i: 1, j: 1
// i: 2, j: 1
// i: 3, j: 1

// --------------------------------------------------
// 5. Labeled break to Exit Outer Loop
// --------------------------------------------------
// Use a label to break out of nested loops entirely.

outerLoop: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) {
      break outerLoop; // Breaks both loops
    }
    console.log(`Outer i: ${i}, Inner j: ${j}`);
  }
}
// Output:
// Outer i: 1, Inner j: 1

// --------------------------------------------------
// 6. Real-World Example: Validating Input
// --------------------------------------------------
// Simulating input validation using a loop with break.

const inputs = ["", "  ", "John"];

for (const input of inputs) {
  if (input.trim() === "") {
    console.log("Invalid input, please enter a value.");
    break;
  }
  console.log(`You entered: ${input}`);
}
// Output:
// Invalid input, please enter a value.

// --------------------------------------------------
// 7. Real-World Example: Stop Looping on Condition
// --------------------------------------------------
// Loop through data and stop processing once a threshold is hit.

const sales = [500, 800, 1200, 900, 400];
const limit = 1000;

for (const sale of sales) {
  if (sale > limit) {
    console.log(`High sale detected: ${sale}, stopping process.`);
    break;
  }
  console.log(`Processing sale: ${sale}`);
}
// Output:
// Processing sale: 500
// Processing sale: 800
// High sale detected: 1200, stopping process.
