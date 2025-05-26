// -------------------------------------------
// Math.log(x)
// Returns the natural logarithm (base e) of a number.
// That is: the inverse function of Math.exp(x).
// -------------------------------------------

// Basic examples
console.log(Math.log(1));
// Output: 0
// Explanation: logₑ(1) = 0 because e^0 = 1

console.log(Math.log(Math.E));
// Output: 1
// Explanation: logₑ(e) = 1 because e^1 = e

console.log(Math.log(10));
// Output: ~2.302585
// Explanation: logₑ(10) ≈ 2.302585 (since e^2.302585 ≈ 10)

console.log(Math.log(0));
// Output: -Infinity
// Explanation: The natural log of 0 tends toward negative infinity

console.log(Math.log(-1));
// Output: NaN
// Explanation: Logarithm of negative numbers is not real (returns NaN in JS)

// -------------------------------------------
// Comparing to other log functions
// -------------------------------------------

console.log(Math.log10(100));
// Output: 2 (log base 10)

console.log(Math.log2(8));
// Output: 3 (log base 2)

console.log(Math.log(100) / Math.log(10));
// Output: 2 (log base 10 using change-of-base formula)

console.log(Math.log(8) / Math.log(2));
// Output: 3 (log base 2 using change-of-base formula)

// -------------------------------------------
// Use cases and practical examples
// -------------------------------------------

// 1. Finding how many times a number must be multiplied by e to get another number
const x = 20;
console.log(Math.exp(Math.log(x))); // Output: 20
// Explanation: exp and log are inverse functions

// 2. Calculating time in exponential growth/decay
// Example: Find time required for population to grow from P0 to P at rate r
function timeToGrow(P0, P, r) {
  return Math.log(P / P0) / r;
}
console.log(timeToGrow(1000, 2000, 0.05));
// Output: ~13.86 (years to double at 5% growth)

// 3. Data normalization in machine learning
const values = [1, 10, 100, 1000];
const logValues = values.map((v) => Math.log(v));
console.log(logValues);
// Output: [0, 2.302585, 4.60517, 6.907755]

// 4. Logarithmic scale transformations (e.g. for plotting)
function logScaleTransform(data) {
  return data.map((v) => (v > 0 ? Math.log(v) : NaN));
}
console.log(logScaleTransform([0.1, 1, 10, 100]));
// Output: [-2.302585, 0, 2.302585, 4.60517]

// 5. Measuring entropy or information gain (used in decision trees, AI)
function informationGain(prob) {
  return -prob * Math.log(prob);
}
console.log(informationGain(0.5));
// Output: ~0.34657359027997264

// 6. Converting exponential equations to linear form
// For y = Ae^(kx), log(y) = log(A) + kx
function linearizeExponential(y, A) {
  return Math.log(y) - Math.log(A);
}
console.log(linearizeExponential(100, 10)); // Output: ~2.302585

// 7. Logarithmic regression fit (used in statistics)
function logRegression(x, a, b) {
  return a + b * Math.log(x);
}
console.log(logRegression(10, 2, 3)); // Output: 2 + 3 * log(10) ≈ 8.907755

// 8. Preventing underflow in small multiplications
const smallValues = [1e-10, 1e-20, 1e-30];
const productLog = smallValues.reduce((acc, val) => acc + Math.log(val), 0);
console.log(productLog); // Sum of logs = log of product
console.log(Math.exp(productLog)); // Should be equal to the product of original values

// 9. Validating inputs
function safeLog(x) {
  return x > 0 ? Math.log(x) : NaN;
}
console.log(safeLog(-5)); // NaN
console.log(safeLog(5)); // ~1.6094

// 10. Simulating log loss in machine learning
function logLoss(predicted, actual) {
  return -(
    actual * Math.log(predicted) +
    (1 - actual) * Math.log(1 - predicted)
  );
}
console.log(logLoss(0.9, 1)); // Output: small loss ~0.105
console.log(logLoss(0.1, 1)); // Output: large loss ~2.302
