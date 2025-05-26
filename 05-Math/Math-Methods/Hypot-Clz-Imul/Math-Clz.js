// -------------------------------------------
// Math.clz32(x)
// Returns the number of leading zero bits in the 32-bit unsigned binary
// representation of the given number x.
// Counts how many zeros appear before the first 1 bit starting from the
// most significant bit (left side).
// If x is 0, returns 32 since all bits are zero.
// The input is converted to a 32-bit unsigned integer.
// -------------------------------------------

// Simple examples
console.log(Math.clz32(1)); // 31
// Binary of 1 (32-bit): 00000000000000000000000000000001
// Leading zeros: 31

console.log(Math.clz32(16)); // 27
// Binary: 00000000000000000000000000010000
// Leading zeros: 27

console.log(Math.clz32(0)); // 32
// Special case: all bits zero

console.log(Math.clz32(4294967295)); // 0
// Binary: all bits are 1
// No leading zeros

// Type coercion examples
console.log(Math.clz32("2")); // 30 (string coerced to number 2)
console.log(Math.clz32(null)); // 32 (null coerced to 0)
console.log(Math.clz32(undefined)); // 32 (undefined coerced to 0)
console.log(Math.clz32(-1)); // 0 (converted to 0xFFFFFFFF)

// Practical uses

// 1. Finding the position of the highest set bit (most significant 1 bit)
function highestSetBitPosition(x) {
  if (x === 0) return 0;
  return 32 - Math.clz32(x);
}
console.log(highestSetBitPosition(9)); // 4
// 9 in binary: 1001 (highest bit is 4th from right)

// 2. Check if a number fits in a specific number of bits
function fitsInBits(x, bits) {
  return highestSetBitPosition(x) <= bits;
}
console.log(fitsInBits(15, 4)); // true (15 = 1111 fits in 4 bits)
console.log(fitsInBits(16, 4)); // false (16 = 10000 requires 5 bits)

// 3. Calculate how many bits are needed to store a number
function bitsNeeded(x) {
  return x === 0 ? 1 : 32 - Math.clz32(x);
}
console.log(bitsNeeded(255)); // 8
console.log(bitsNeeded(1023)); // 10

// 4. Use in low-level optimization (bit packing, compression)
const number = 1024;
console.log(`Bits needed to store ${number}:`, bitsNeeded(number)); // 11

// 5. Handling negative values
console.log(Math.clz32(-5)); // 0 (as negative converted to unsigned 32-bit)

// Edge cases
console.log(Math.clz32(2147483648)); // 0 (highest bit set)

// 6. Using with bitwise operators
console.log(Math.clz32(1 << 5)); // 26 (bit 6 set)

// 7. Using in performance-critical code to determine integer sizes or alignment
function isPowerOfTwo(x) {
  return x !== 0 && (x & (x - 1)) === 0;
}
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(18)); // false

// 8. Computing floor of log base 2 using clz32
function log2Floor(x) {
  if (x === 0) return -Infinity;
  return 31 - Math.clz32(x);
}
console.log(log2Floor(16)); // 4
console.log(log2Floor(31)); // 4
console.log(log2Floor(32)); // 5

// 9. Dynamic input example
function leadingZeros(x) {
  return Math.clz32(x);
}
console.log(leadingZeros(128)); // 24

// 10. Using Math.clz32 in cryptography or hash functions (conceptual)
// Often used to analyze bit patterns or normalize values
