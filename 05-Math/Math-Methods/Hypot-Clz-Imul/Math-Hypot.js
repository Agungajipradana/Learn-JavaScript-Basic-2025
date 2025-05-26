// Math-hypot.js

// -------------------------------------------
// Math.hypot(...values)
// Returns the square root of the sum of the squares of its arguments.
// It calculates the Euclidean distance from the origin to the point
// defined by the given coordinates (values).
// -------------------------------------------

// Basic Examples:
console.log(Math.hypot(3, 4));            // 5
// Explanation: sqrt(3² + 4²) = sqrt(9 + 16) = sqrt(25) = 5

console.log(Math.hypot(5, 12));           // 13
// Explanation: sqrt(5² + 12²) = sqrt(25 + 144) = sqrt(169) = 13

console.log(Math.hypot(3, 4, 12));        // 13
// Explanation: sqrt(3² + 4² + 12²) = sqrt(9 + 16 + 144) = sqrt(169) = 13

console.log(Math.hypot());                 // 0
// Explanation: No arguments, returns 0

console.log(Math.hypot(0, 0));             // 0

console.log(Math.hypot(-3, -4));           // 5
// Explanation: Negative values treated as positive in squares

// Type coercion examples:
console.log(Math.hypot("3", 4));           // 5
console.log(Math.hypot(null, 4));          // 4 (null converted to 0)
console.log(Math.hypot(undefined, 4));     // NaN (undefined converted to NaN)
console.log(Math.hypot("abc", 4));         // NaN (invalid string)

// -------------------------------------------
// Real-world use cases and more complex examples
// -------------------------------------------

// 1. Calculate distance between two points in 2D space
function distance2D(x1, y1, x2, y2) {
  return Math.hypot(x2 - x1, y2 - y1);
}
console.log(distance2D(1, 2, 4, 6));  // 5

// 2. Calculate distance between points in 3D space
function distance3D(x1, y1, z1, x2, y2, z2) {
  return Math.hypot(x2 - x1, y2 - y1, z2 - z1);
}
console.log(distance3D(1, 2, 3, 4, 6, 8));  // 7.0710678118654755

// 3. Calculate magnitude (length) of a vector with any dimensions
function vectorLength(...components) {
  return Math.hypot(...components);
}
console.log(vectorLength(3, 4));            // 5
console.log(vectorLength(3, 4, 12));        // 13

// 4. Physics example: calculate resultant velocity from components
function resultantVelocity(vx, vy) {
  return Math.hypot(vx, vy);
}
console.log(resultantVelocity(5, 12));      // 13

// 5. Graphics: calculate distance between points (hit detection, drawing)
const pointA = { x: 10, y: 15 };
const pointB = { x: 25, y: 30 };
console.log(Math.hypot(pointB.x - pointA.x, pointB.y - pointA.y)); // 21.213203435596427

// 6. Edge case: no arguments returns 0
console.log(Math.hypot());                  // 0

// 7. Handling infinite and NaN values
console.log(Math.hypot(Infinity, 3));      // Infinity
console.log(Math.hypot(NaN, 3));           // NaN

// 8. Using with dynamic number of arguments
const coords = [3, 4, 5];
console.log(Math.hypot(...coords));        // 7.0710678118654755

// 9. Negative inputs treated as positive in square calculation
console.log(Math.hypot(-3, -4));           // 5

// 10. Combining with other Math methods, e.g., rounding result
console.log(Math.round(Math.hypot(3, 4)));  // 5
