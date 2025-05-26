// -------------------------------------------
// Math.expm1(x)
// Returns e^x - 1 (exponential of x minus 1).
// This method provides higher precision than using Math.exp(x) - 1,
// especially for small values of x close to zero.
// -------------------------------------------

// Basic examples
console.log(Math.expm1(1));
// Output: 1.718281828459045
// Explanation: e^1 - 1 ≈ 2.71828 - 1 = 1.71828

console.log(Math.expm1(0));
// Output: 0
// Explanation: e^0 - 1 = 1 - 1 = 0

console.log(Math.expm1(-1));
// Output: -0.6321205588285577
// Explanation: e^-1 - 1 ≈ 0.367879 - 1 = -0.63212

// -------------------------------------------
// Precision comparison with Math.exp(x) - 1
// -------------------------------------------

const smallValue = 1e-10;

console.log(Math.exp(smallValue) - 1); // 1.000000082740371e-10 (less precise)
console.log(Math.expm1(smallValue)); // 1e-10 (more precise)

// -------------------------------------------
// Practical use cases
// -------------------------------------------

// 1. Computing compound interest rate changes for very small rates
function compoundInterestRateChange(rate) {
  return Math.expm1(rate);
}
console.log(compoundInterestRateChange(0.0001)); // 0.00010000500016667083

// 2. Calculating growth rates where x is very small
const growthRate = 0.0000005;
console.log(Math.expm1(growthRate));
// Output close to growthRate itself but more precise

// 3. Financial calculations involving continuous compounding
function continuousCompounding(principal, rate, time) {
  return principal * Math.expm1(rate * time);
}
console.log(continuousCompounding(1000, 0.05, 1));
// Output: ~51.27109637602412 (interest earned after 1 year)

// 4. Physics: exponential decay approximations for small decay constants
function decayApproximation(constant, time) {
  return Math.expm1(-constant * time);
}
console.log(decayApproximation(0.00001, 1000)); // ~-0.00995

// 5. Handling values near zero to avoid floating point precision errors
const nearZero = 1e-15;
console.log(Math.expm1(nearZero)); // 1e-15 (accurate)
console.log(Math.exp(nearZero) - 1); // 1.1102230246251565e-15 (less accurate)

// 6. Chaining with other Math methods for complex calculations
const x = 0.1;
console.log(Math.log1p(Math.expm1(x))); // Output: 0.1 (inverse functions combined)

// 7. Use in statistical computations where e^x -1 is frequent
function statisticalCalc(x) {
  return Math.expm1(x) / x;
}
console.log(statisticalCalc(0.01)); // ~1.005

// 8. Approximations in Taylor series expansions
function taylorExpm1(x, terms = 5) {
  let sum = 0;
  for (let n = 1; n <= terms; n++) {
    sum += Math.pow(x, n) / factorial(n);
  }
  return sum;
}

function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

console.log(taylorExpm1(0.5)); // Approximate e^0.5 -1 using 5 terms

// 9. Negative input close to zero
console.log(Math.expm1(-1e-10)); // -1e-10 (precise)

// 10. Dynamic input example
function calculateExpMinusOne(value) {
  return Math.expm1(value);
}
console.log(calculateExpMinusOne(2)); // 6.38905609893065
