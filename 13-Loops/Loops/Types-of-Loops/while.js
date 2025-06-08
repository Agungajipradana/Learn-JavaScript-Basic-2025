// =======================================
// WHILE LOOP IN JAVASCRIPT
// =======================================

// --------------------------------------------------
// 1. Basic while Loop
// --------------------------------------------------
// Executes the loop as long as the condition is true.
let i = 0;
while (i < 5) {
  console.log("Basic loop - iteration:", i);
  i++;
}
// Output:
// Basic loop - iteration: 0
// Basic loop - iteration: 1
// Basic loop - iteration: 2
// Basic loop - iteration: 3
// Basic loop - iteration: 4

// --------------------------------------------------
// 2. Decrementing with while
// --------------------------------------------------
// Countdown from 5 to 1 using while.
let count = 5;
while (count > 0) {
  console.log("Countdown:", count);
  count--;
}
// Output:
// Countdown: 5
// Countdown: 4
// Countdown: 3
// Countdown: 2
// Countdown: 1

// --------------------------------------------------
// 3. Looping Until User Input is Valid (Simulated)
// --------------------------------------------------
// Simulate checking a condition, like user input (for learning purpose).
let input = "";
let attempts = 0;
const mockInputs = ["", "   ", "John"]; // Simulated user inputs

while (input.trim() === "") {
  input = mockInputs[attempts]; // Simulate user input
  console.log(`Attempt ${attempts + 1}: input = "${input}"`);
  attempts++;
}
// Output:
// Attempt 1: input = ""
// Attempt 2: input = "   "
// Attempt 3: input = "John"

// --------------------------------------------------
// 4. Iterating Over an Array with while
// --------------------------------------------------
// Similar to for loop but using while.
const colors = ["red", "green", "blue"];
let index = 0;

while (index < colors.length) {
  console.log(`Color at index ${index}:`, colors[index]);
  index++;
}
// Output:
// Color at index 0: red
// Color at index 1: green
// Color at index 2: blue

// --------------------------------------------------
// 5. Summing Numbers Using while
// --------------------------------------------------
// Calculate the sum of numbers from 1 to 5.
let num = 1;
let total = 0;

while (num <= 5) {
  total += num;
  num++;
}
console.log("Sum from 1 to 5:", total);
// Output:
// Sum from 1 to 5: 15

// --------------------------------------------------
// 6. Infinite Loop with Manual Break
// --------------------------------------------------
// Be careful: while can run forever if condition never becomes false.
let x = 0;

while (true) {
  console.log("Current value of x:", x);
  x++;
  if (x >= 3) {
    console.log("Breaking out of loop");
    break;
  }
}
// Output:
// Current value of x: 0
// Current value of x: 1
// Current value of x: 2
// Breaking out of loop

// --------------------------------------------------
// 7. Skipping Iteration with continue (via if statement)
// --------------------------------------------------
// Note: while does not have a direct continue in syntax, but can be simulated.
let n = 0;

while (n < 5) {
  n++;
  if (n === 3) {
    console.log("Skipping 3");
    continue;
  }
  console.log("Current number:", n);
}
// Output:
// Current number: 1
// Current number: 2
// Skipping 3
// Current number: 4
// Current number: 5

// --------------------------------------------------
// 8. Real-World Case: Finding First Even Number
// --------------------------------------------------
// Find the first even number in an array.
const nums = [3, 7, 11, 14, 21];
let pos = 0;
let firstEven = null;

while (pos < nums.length) {
  if (nums[pos] % 2 === 0) {
    firstEven = nums[pos];
    break;
  }
  pos++;
}

console.log("First even number:", firstEven);
// Output:
// First even number: 14
