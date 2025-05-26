// -------------------------------------------
// Math.abs(x)
// Returns the absolute (non-negative) value of a number.
// If x is negative, it returns -x; if x is positive or zero, it returns x.
// -------------------------------------------

// Basic Examples
console.log(Math.abs(5)); // 5 → already positive
console.log(Math.abs(-5)); // 5 → converted from negative to positive
console.log(Math.abs(0)); // 0 → stays the same
console.log(Math.abs(-0)); // 0 → -0 and 0 are treated the same
console.log(Math.abs("10")); // 10 → string is coerced to number
console.log(Math.abs(null)); // 0 → null becomes 0
console.log(Math.abs(undefined)); // NaN → undefined can't be converted to a number
console.log(Math.abs("abc")); // NaN → non-numeric string returns NaN

// Real-World Use Cases

// 1. Calculating distance difference
// Compare distances regardless of direction
const target = 100;
const current = 80;
const difference = Math.abs(target - current);
console.log(difference); // 20 → the distance between 80 and 100

// 2. Score difference in a game
const player1 = 120;
const player2 = 145;
const scoreGap = Math.abs(player1 - player2);
console.log(`Score gap: ${scoreGap}`); // Score gap: 25

// 3. Difference in time (e.g., countdown or duration comparison)
const expectedTime = 60; // seconds
const actualTime = 48; // seconds
const timeDifference = Math.abs(expectedTime - actualTime);
console.log(`Time difference: ${timeDifference} seconds`); // 12 seconds

// 4. Tracking value fluctuations (e.g., stock or currency change)
const yesterdayPrice = 10.5;
const todayPrice = 9.8;
const fluctuation = Math.abs(todayPrice - yesterdayPrice);
console.log(`Price moved by $${fluctuation}`); // Price moved by $0.7

// 5. Handling user input differences
function checkDifference(a, b) {
  if (Math.abs(a - b) < 0.01) {
    console.log("Values are approximately equal.");
  } else {
    console.log("Values are different.");
  }
}
checkDifference(1.0001, 1.0002); // Values are approximately equal.
checkDifference(1.1, 1.2); // Values are different.

// 6. Geometry: Calculate distance between two points (1D)
function distance1D(x1, x2) {
  return Math.abs(x2 - x1);
}
console.log(distance1D(5, 9)); // 4
console.log(distance1D(9, 5)); // 4

// 7. Edge Case: Non-numeric value
console.log(Math.abs([])); // 0 → empty array coerced to 0
console.log(Math.abs([10])); // 10 → single-item array coerced to number
console.log(Math.abs([1, 2])); // NaN → multiple-item array returns NaN


