// -------------------------------------------
// Math.exp(x)
// Returns Euler's number (e ≈ 2.718) raised to the power of x.
// Equivalent to: Math.pow(Math.E, x)
// -------------------------------------------

// Basic Examples
console.log(Math.exp(1));     // ≈ 2.718 (e^1)
console.log(Math.exp(0));     // 1 (e^0 = 1)
console.log(Math.exp(-1));    // ≈ 0.367 (1 / e)
console.log(Math.exp(2));     // ≈ 7.389 (e^2)
console.log(Math.exp(-2));    // ≈ 0.135

// Type coercion behavior
console.log(Math.exp("2"));   // ≈ 7.389 (string converted to number)
console.log(Math.exp(null));  // 1 (null becomes 0 → e^0 = 1)
console.log(Math.exp(undefined)); // NaN
console.log(Math.exp("abc"));     // NaN

// Real-World Use Cases

// 1. Exponential growth modeling (e.g., population growth, bacteria)
function growth(initialValue, growthRate, time) {
  return initialValue * Math.exp(growthRate * time);
}
const population = growth(100, 0.05, 10); // 5% growth per year for 10 years
console.log("Estimated population:", population.toFixed(2)); // ≈ 164.87

// 2. Continuous compound interest
// Formula: A = P * e^(rt)
function compoundInterest(principal, rate, time) {
  return principal * Math.exp(rate * time);
}
const investment = compoundInterest(1000, 0.08, 5); // 8% annual rate, 5 years
console.log("Investment return:", investment.toFixed(2)); // ≈ 1491.82

// 3. Physics simulation: radioactive decay or cooling
// Decay formula: N(t) = N0 * e^(-λt)
function radioactiveDecay(initialAmount, decayConstant, time) {
  return initialAmount * Math.exp(-decayConstant * time);
}
const remaining = radioactiveDecay(100, 0.1, 10);
console.log("Remaining substance:", remaining.toFixed(2)); // ≈ 36.79

// 4. Probability distribution (e.g., Gaussian/Normal distribution)
function normalPDF(x, mean = 0, stdDev = 1) {
  const coefficient = 1 / (stdDev * Math.sqrt(2 * Math.PI));
  const exponent = -Math.pow(x - mean, 2) / (2 * Math.pow(stdDev, 2));
  return coefficient * Math.exp(exponent);
}
console.log("PDF value at x = 1:", normalPDF(1).toFixed(6)); // ≈ 0.241971

// 5. Compare with Math.pow for verification
console.log("Math.exp(2):", Math.exp(2)); // ≈ 7.389
console.log("Math.pow(Math.E, 2):", Math.pow(Math.E, 2)); // ≈ 7.389

