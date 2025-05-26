// ----------------------------------------------------
// Math.round(x)
// Rounds a number to the nearest integer.
// If the fractional part is 0.5 or greater, the number is rounded UP.
// If the fractional part is less than 0.5, the number is rounded DOWN.
// ----------------------------------------------------

// Basic examples
console.log(Math.round(4.5)); // Output: 5
console.log(Math.round(4.4)); // Output: 4
console.log(Math.round(7.9)); // Output: 8
console.log(Math.round(7.1)); // Output: 7
console.log(Math.round(-2.5)); // Output: -2
console.log(Math.round(-2.6)); // Output: -3

// ----------------------------------------------------
// Common Use Cases
// ----------------------------------------------------

// 1. Round price to nearest whole currency
const price = 19.75;
const roundedPrice = Math.round(price);
console.log(roundedPrice); // Output: 20

// 2. Round user ratings
const avgRating = 3.67;
const displayRating = Math.round(avgRating);
console.log(displayRating); // Output: 4

// 3. Round average score in grading system
const totalScore = 266;
const subjects = 4;
const average = totalScore / subjects;
console.log(Math.round(average)); // Output: 67

// 4. Round sensor value in hardware reading
const temperature = 21.54;
const roundedTemp = Math.round(temperature);
console.log(roundedTemp); // Output: 22

// 5. Round coordinates in canvas drawing
const mouseX = 54.7;
const mouseY = 129.3;
console.log(Math.round(mouseX), Math.round(mouseY)); // Output: 55 129

// 6. Simulate dice roll (1–6)
function rollDice() {
  return Math.round(Math.random() * 5 + 1);
}
console.log(rollDice()); // Output: Random integer from 1 to 6

// 7. Round estimated delivery time
const estimatedTime = 3.6;
console.log(Math.round(estimatedTime)); // Output: 4 (days)

// 8. Round payment amount with discount
const rawAmount = 88.499;
const finalAmount = Math.round(rawAmount);
console.log(finalAmount); // Output: 88

// 9. Round conversion result from km to miles
const km = 10;
const miles = km * 0.621371;
console.log(Math.round(miles)); // Output: 6

// 10. Round animation duration to nearest frame (60 fps = ~16.67 ms/frame)
const duration = 37.85;
const frames = Math.round(duration / 16.67);
console.log(frames); // Output: 2
