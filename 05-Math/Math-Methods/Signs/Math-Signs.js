// ----------------------------------------------------
// Math.sign(x)
// Returns the sign of a number:
// - 1 if the number is positive
// - -1 if the number is negative
// - 0 if the number is 0
// - -0 if the number is -0
// - NaN if the input is not a number
// ----------------------------------------------------

// Basic examples
console.log(Math.sign(5)); // Output: 1
console.log(Math.sign(-5)); // Output: -1
console.log(Math.sign(0)); // Output: 0
console.log(Math.sign(-0)); // Output: -0
console.log(Math.sign(NaN)); // Output: NaN
console.log(Math.sign("10")); // Output: 1 (string is converted to number)
console.log(Math.sign("abc")); // Output: NaN

// ----------------------------------------------------
// Common Use Cases
// ----------------------------------------------------

// 1. Detect positive or negative value for conditional logic
const balance = -1200;
if (Math.sign(balance) === -1) {
  console.log("Your account is overdrawn."); // Output: Your account is overdrawn.
}

// 2. Display arrow based on number direction
const change = 30;
const sign = Math.sign(change);
if (sign === 1) {
  console.log("⬆ Positive Change"); // Output: ⬆ Positive Change
} else if (sign === -1) {
  console.log("⬇ Negative Change");
} else {
  console.log("No Change");
}

// 3. Normalize direction in movement logic (e.g., game or animation)
function getDirection(x1, x2) {
  return Math.sign(x2 - x1);
}
console.log(getDirection(100, 120)); // Output: 1 (move right)
console.log(getDirection(120, 100)); // Output: -1 (move left)
console.log(getDirection(100, 100)); // Output: 0 (no movement)

// 4. Invert a value while keeping its sign
const speed = -5;
const inverted = Math.sign(speed) * Math.abs(speed);
console.log(inverted); // Output: -5

// 5. Ensure always return -1 or 1 for directional logic
function normalizeSign(n) {
  const s = Math.sign(n);
  return s === 0 ? 1 : s;
}
console.log(normalizeSign(0)); // Output: 1
console.log(normalizeSign(-10)); // Output: -1

// 6. Filter numbers based on sign in an array
const numbers = [3, -1, 0, -5, 10, -7, 0];
const positives = numbers.filter((n) => Math.sign(n) === 1);
const negatives = numbers.filter((n) => Math.sign(n) === -1);
console.log(positives); // Output: [3, 10]
console.log(negatives); // Output: [-1, -5, -7]

// 7. Use in game physics for direction adjustment
let velocity = -9.8;
let bounceDirection = -Math.sign(velocity); // reverse direction on bounce
console.log(bounceDirection); // Output: 1

// 8. Label chart data based on sign (e.g., profit/loss)
const profit = -345;
console.log(Math.sign(profit) === 1 ? "Profit" : "Loss"); // Output: Loss

// 9. Determine trend direction in stock graph
function getTrend(delta) {
  return Math.sign(delta);
}
console.log(getTrend(-0.003)); // Output: -1 (downward trend)

// 10. Safe number check for dynamic input
function checkNumber(input) {
  const result = Math.sign(Number(input));
  console.log(isNaN(result) ? "Invalid input" : `Sign: ${result}`);
}
checkNumber("100"); // Output: Sign: 1
checkNumber("-25"); // Output: Sign: -1
checkNumber("hello"); // Output: Invalid input
