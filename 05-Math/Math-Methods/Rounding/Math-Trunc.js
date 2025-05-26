// ----------------------------------------------------
// Math.trunc(x)
// Returns the integer part of a number by removing any fractional digits.
// It does NOT round the number — it simply removes everything after the decimal point.
// ----------------------------------------------------

// Basic usage
console.log(Math.trunc(4.9)); // Output: 4
console.log(Math.trunc(4.1)); // Output: 4
console.log(Math.trunc(-4.9)); // Output: -4
console.log(Math.trunc(-4.1)); // Output: -4
console.log(Math.trunc(0)); // Output: 0
console.log(Math.trunc(-0)); // Output: -0
console.log(Math.trunc(NaN)); // Output: NaN
console.log(Math.trunc(Infinity)); // Output: Infinity
console.log(Math.trunc(-Infinity)); // Output: -Infinity

// ----------------------------------------------------
// Common Use Cases
// ----------------------------------------------------

// 1. Removing decimals from a float value (no rounding)
const number = 12.987;
const result = Math.trunc(number);
console.log(result); // Output: 12

// 2. Truncate user input for whole-number form fields
const userInput = "47.85";
const cleanValue = Math.trunc(parseFloat(userInput));
console.log(cleanValue); // Output: 47

// 3. Truncate to use only hours from a float time
const duration = 5.75; // 5 hours and 45 minutes
const hoursOnly = Math.trunc(duration);
console.log(hoursOnly); // Output: 5

// 4. Truncate currency value to get whole dollar part
const amount = 159.99;
const dollars = Math.trunc(amount);
console.log(dollars); // Output: 159

// 5. Useful when working with pixel units in styling or canvas
const preciseX = 201.72;
const pixelX = Math.trunc(preciseX);
console.log(pixelX); // Output: 201

// 6. Truncate scrolling offset values
const scrollTop = 120.56;
const topOffset = Math.trunc(scrollTop);
console.log(topOffset); // Output: 120

// 7. Custom truncate for pagination logic (remove partial pages)
const totalItems = 55;
const itemsPerPage = 10;
const pages = Math.trunc(totalItems / itemsPerPage);
console.log(pages); // Output: 5

// 8. Strip decimal from percentage conversion
const ratio = 0.856;
const percentage = Math.trunc(ratio * 100);
console.log(percentage); // Output: 85

// 9. Remove decimal part for displaying score (e.g., in a leaderboard)
const score = 123.456;
const displayScore = Math.trunc(score);
console.log(displayScore); // Output: 123

// 10. Use truncation to convert from float to int when rounding is unwanted
const floatVal = -3.9999;
const intVal = Math.trunc(floatVal);
console.log(intVal); // Output: -3
