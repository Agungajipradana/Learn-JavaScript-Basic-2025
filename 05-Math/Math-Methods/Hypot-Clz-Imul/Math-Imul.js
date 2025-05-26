// -------------------------------------------
// Math.imul(a, b)
// Returns the result of the C-like 32-bit multiplication of the two parameters.
// It performs multiplication of two 32-bit integers and returns a 32-bit integer result,
// emulating multiplication in lower-level languages like C.
// -------------------------------------------

// Basic Examples
console.log(Math.imul(2, 4)); // 8
// Explanation: 2 * 4 = 8 (within 32-bit integer range)

console.log(Math.imul(-1, 8)); // -8
// Explanation: -1 * 8 = -8

console.log(Math.imul(0xffffffff, 5)); // -5
// Explanation: 0xffffffff is -1 as 32-bit signed integer, so result is -1*5 = -5

// Edge cases with large numbers beyond 32-bit range
console.log(Math.imul(0x7fffffff, 2)); // -2
// Explanation: 0x7fffffff is the max positive 32-bit signed int (2147483647),
// multiplying by 2 overflows and wraps around as 32-bit signed int

// Type coercion examples
console.log(Math.imul("3", "4")); // 12 (strings coerced to numbers)
console.log(Math.imul(null, 4)); // 0 (null coerced to 0)
console.log(Math.imul(undefined, 4)); // NaN (undefined coerced to NaN)

// -------------------------------------------
// Practical use cases and more complex examples
// -------------------------------------------

// 1. High-performance integer multiplication when working with 32-bit values
function multiply32BitInts(a, b) {
  return Math.imul(a, b);
}
console.log(multiply32BitInts(100000, 300)); // 30000000

// 2. Emulate 32-bit overflow multiplication
const a = 0x80000000; // 2147483648 (signed int min value)
const b = 2;
console.log(Math.imul(a, b)); // 0
// Explanation: multiplication overflows 32-bit signed int and wraps around

// 3. Use in cryptographic or hashing algorithms needing precise 32-bit multiplication
function hashStep(val, mul) {
  return Math.imul(val, mul);
}
console.log(hashStep(123456789, 2654435761)); // Output is a 32-bit int hash step

// 4. Combining with bitwise operators for low-level arithmetic
const x = 0x7fffffff;
const y = 3;
const result = Math.imul(x, y);
console.log(result); // -3 (overflow behavior)

// 5. Performance test: normal * vs Math.imul
console.log(2 * 3); // 6 (normal JS multiplication)
console.log(Math.imul(2, 3)); // 6 (imul multiplication)

// 6. Handling negative numbers
console.log(Math.imul(-100, 50)); // -5000

// 7. Multiplying large values that exceed Number.MAX_SAFE_INTEGER
const large1 = 0xfffffff;
const large2 = 0x10;
console.log(Math.imul(large1, large2)); // Result truncated to 32-bit

// 8. Multiplying with zero
console.log(Math.imul(0, 123456)); // 0

// 9. Multiplying with one
console.log(Math.imul(1, 123456)); // 123456

// 10. Using Math.imul in loops or algorithmic computations
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += Math.imul(i, 10);
}
console.log(sum); // 150 (10+20+30+40+50)
