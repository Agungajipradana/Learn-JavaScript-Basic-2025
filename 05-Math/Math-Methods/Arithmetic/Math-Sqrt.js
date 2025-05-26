// -------------------------------------------
// Math.sqrt(x)
// Returns the square root of a number x.
// If x is negative, returns NaN.
// -------------------------------------------

// Basic Examples
console.log(Math.sqrt(9)); // 3 (since 3 * 3 = 9)
console.log(Math.sqrt(0)); // 0
console.log(Math.sqrt(1)); // 1
console.log(Math.sqrt(16)); // 4
console.log(Math.sqrt(2)); // 1.4142135623730951 (approximate)
console.log(Math.sqrt(-4)); // NaN (square root of negative number)

// Type coercion behavior
console.log(Math.sqrt("25")); // 5 (string converted to number)
console.log(Math.sqrt(null)); // 0 (null converted to 0)
console.log(Math.sqrt(undefined)); // NaN
console.log(Math.sqrt("abc")); // NaN

// Real-World Use Cases

// 1. Calculating the length of the hypotenuse in a right triangle (Pythagoras theorem)
function hypotenuse(a, b) {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}
console.log(hypotenuse(3, 4)); // 5

// 2. Calculating distance between two points in 2D space
function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
console.log(distance(1, 2, 4, 6)); // 5

// 3. Standard deviation calculation (simplified)
function standardDeviation(arr) {
  const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
  const variance =
    arr.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / arr.length;
  return Math.sqrt(variance);
}
console.log(standardDeviation([10, 12, 23, 23, 16, 23, 21, 16])); // ~5.237

// 4. Scaling values proportionally (e.g., graphics, UI sizes)
const originalSize = 100;
const scaleFactor = Math.sqrt(2);
const newSize = originalSize * scaleFactor;
console.log(newSize); // 141.4213562373095

// 5. Physics: Calculate root mean square (RMS) value
function rms(values) {
  const squareSum = values.reduce((acc, val) => acc + Math.pow(val, 2), 0);
  return Math.sqrt(squareSum / values.length);
}
console.log(rms([3, 4])); // 3.5355339059327378

// 6. Edge case: zero and negative inputs
console.log(Math.sqrt(0)); // 0
console.log(Math.sqrt(-1)); // NaN

// 7. Using with variables dynamically
const num = 49;
console.log(Math.sqrt(num)); // 7

// 8. Combining with Math.abs to avoid NaN for negative values (custom)
function safeSqrt(x) {
  return Math.sqrt(Math.abs(x));
}
console.log(safeSqrt(-9)); // 3

// 9. Using in geometry: radius from area of circle
function radiusFromArea(area) {
  return Math.sqrt(area / Math.PI);
}
console.log(radiusFromArea(314.159)); // ~10

// 10. Using in optimization: Euclidean norm of vector
function euclideanNorm(vector) {
  const sumSquares = vector.reduce((acc, val) => acc + Math.pow(val, 2), 0);
  return Math.sqrt(sumSquares);
}
console.log(euclideanNorm([3, 4, 12])); // 13
