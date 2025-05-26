// -------------------------------------------
// Math.floor(x)
// Rounds a number DOWN to the nearest integer.
// Always rounds toward negative infinity.
// -------------------------------------------

// Basic usage
console.log(Math.floor(4.9)); // Output: 4
console.log(Math.floor(7.01)); // Output: 7
console.log(Math.floor(10)); // Output: 10
console.log(Math.floor(-2.3)); // Output: -3
// Explanation: -2.3 rounded down becomes more negative

// -------------------------------------------
// Common Use Cases
// -------------------------------------------

// 1. Convert float to int without rounding up
const price = 19.95;
const wholePrice = Math.floor(price);
console.log(wholePrice); // Output: 19

// 2. Indexing random values from arrays
const colors = ["red", "green", "blue", "yellow"];
const randomIndex = Math.floor(Math.random() * colors.length);
console.log(colors[randomIndex]); // Output: Random color from the array

// 3. Calculate page number starting from 0
const offset = 27;
const itemsPerPage = 10;
const currentPage = Math.floor(offset / itemsPerPage);
console.log(currentPage); // Output: 2

// 4. Determine how many full containers can be filled
const totalWaterLiters = 55;
const containerSize = 20;
const fullContainers = Math.floor(totalWaterLiters / containerSize);
console.log(fullContainers); // Output: 2

// 5. Truncate a float number to use as index
const floatIndex = 3.76;
const arrayIndex = Math.floor(floatIndex);
console.log(arrayIndex); // Output: 3

// 6. Strip decimal from a negative float
const balance = -4.75;
const truncated = Math.floor(balance);
console.log(truncated); // Output: -5

// 7. Display discount tier
const totalItems = 43;
const itemsPerTier = 10;
const discountTier = Math.floor(totalItems / itemsPerTier);
console.log(discountTier); // Output: 4

// 8. Convert time in seconds to full minutes
const totalSeconds = 187;
const fullMinutes = Math.floor(totalSeconds / 60);
console.log(fullMinutes); // Output: 3

// 9. Get full days from total hours
const totalHours = 50;
const fullDays = Math.floor(totalHours / 24);
console.log(fullDays); // Output: 2

// 10. Round down currency with decimal
const amount = 123.99;
const roundedDown = Math.floor(amount);
console.log(roundedDown); // Output: 123
