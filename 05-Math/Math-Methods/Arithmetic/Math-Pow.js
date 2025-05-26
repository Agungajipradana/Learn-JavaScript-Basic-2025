// -------------------------------------------
// Math.pow(base, exponent)
// Returns the base raised to the power of exponent.
// Equivalent to: base ** exponent (ES7+ operator)
// -------------------------------------------

// Basic Examples
console.log(Math.pow(2, 3)); // 8 (2^3 = 2*2*2)
console.log(Math.pow(5, 0)); // 1 (any number to power 0 is 1)
console.log(Math.pow(7, 1)); // 7 (any number to power 1 is itself)
console.log(Math.pow(4, -1)); // 0.25 (reciprocal: 1/4)
console.log(Math.pow(-3, 3)); // -27 (negative base with odd exponent)
console.log(Math.pow(-3, 2)); // 9 (negative base with even exponent)

// Type coercion examples
console.log(Math.pow("3", 3)); // 27 (string coerced to number)
console.log(Math.pow(null, 2)); // 0 (null coerced to 0)
console.log(Math.pow(undefined, 2)); // NaN (cannot coerce undefined)
console.log(Math.pow("abc", 2)); // NaN (invalid string)

// Real-world Use Cases

// 1. Calculating squares and cubes
const side = 5;
const area = Math.pow(side, 2); // square area
const volume = Math.pow(side, 3); // cube volume
console.log("Area:", area); // 25
console.log("Volume:", volume); // 125

// 2. Exponential growth calculation (compound interest simplified)
function compoundInterest(principal, rate, time) {
  return principal * Math.pow(1 + rate, time);
}
console.log(compoundInterest(1000, 0.05, 3).toFixed(2)); // 1157.63

// 3. Physics: calculate distance fallen in free fall (d = 1/2 * g * t^2)
const g = 9.8; // acceleration due to gravity (m/s^2)
const time = 3; // seconds
const distance = 0.5 * g * Math.pow(time, 2);
console.log("Distance fallen:", distance); // 44.1 meters

// 4. Bitwise trick for power of 2 (not recommended, but shows concept)
function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(18)); // false

// 5. More complex: calculate projectile height at time t (h = v0*t - 1/2*g*t^2)
function projectileHeight(v0, t) {
  return v0 * t - 0.5 * g * Math.pow(t, 2);
}
console.log(projectileHeight(20, 2)); // 20

// 6. Handling negative exponents for fractions
console.log(Math.pow(2, -3)); // 0.125 (1/8)

// 7. Edge cases with zero base and exponent
console.log(Math.pow(0, 0)); // 1 (by definition in JS)
console.log(Math.pow(0, 5)); // 0
console.log(Math.pow(5, 0)); // 1

// 8. Using Math.pow with floating points
console.log(Math.pow(9, 0.5)); // 3 (square root of 9)

// 9. Use with variables dynamically
const base = 4;
const exp = 4;
console.log(Math.pow(base, exp)); // 256

// 10. Combining with Math.sign to preserve sign in odd powers
function signedPow(base, exponent) {
  const absResult = Math.pow(Math.abs(base), exponent);
  return base < 0 && exponent % 2 !== 0 ? -absResult : absResult;
}
console.log(signedPow(-2, 3)); // -8
console.log(signedPow(-2, 2)); // 4
