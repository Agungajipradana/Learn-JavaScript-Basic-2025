// -------------------------------------------
// Math.fround(x)
// Returns the nearest 32-bit single precision float representation of a number.
// Useful for low-level optimizations, graphics, or precision handling.
// -------------------------------------------

// Basic usage
console.log(Math.fround(1.5)); // Output: 1.5
console.log(Math.fround(1.337)); // Output: 1.3370000123977661
console.log(Math.fround(5.05)); // Output: 5.050000190734863
console.log(Math.fround(0)); // Output: 0
console.log(Math.fround(-0)); // Output: -0
console.log(Math.fround(NaN)); // Output: NaN
console.log(Math.fround(Infinity)); // Output: Infinity
console.log(Math.fround(-Infinity)); // Output: -Infinity

// -------------------------------------------
// Common Use Cases
// -------------------------------------------

// 1. Floating-point comparison: simulate hardware-level float behavior
const a = Math.fround(1.337);
const b = Math.fround(1.337);
console.log(a === b); // Output: true

// 2. Detect precision difference vs. double precision
const precise = 1.337;
const single = Math.fround(precise);
console.log(precise === single); // Output: false

// 3. Using with WebGL or typed arrays (e.g., Float32Array)
const f32 = new Float32Array(1);
f32[0] = Math.fround(2.789);
console.log(f32[0]); // Output: 2.7890000343322754

// 4. Round float for simulations or games (e.g., physics calculations)
const velocity = 5.67892341;
const stableVelocity = Math.fround(velocity);
console.log(stableVelocity); // Output: 5.6789231300354 (rounded to 32-bit)

// 5. Minimize floating point error in currency calculations (not recommended for actual currency logic)
const price = 49.995;
const safePrice = Math.fround(price);
console.log(safePrice); // Output: 49.99500274658203

// 6. Force 32-bit rounding for shader calculations (e.g., in WebGL)
function get32bitFloat(x) {
  return Math.fround(x);
}
console.log(get32bitFloat(9.81)); // Output: 9.8100004196167

// 7. Normalize data in machine learning preprocessing (example)
function normalize(value, min, max) {
  return Math.fround((value - min) / (max - min));
}
console.log(normalize(70, 50, 100)); // Output: 0.3999999761581421

// 8. Debugging float precision error
const val = 0.1 + 0.2;
console.log(val); // Output: 0.30000000000000004
console.log(Math.fround(val)); // Output: 0.30000001192092896

// 9. Use in games for consistent frame timing
const deltaTime = Math.fround(16.666666);
console.log(deltaTime); // Output: ~16.66666603088379

// 10. Hash or cache consistency (simulate consistent precision across systems)
const key = Math.fround(10.24).toString();
console.log(key); // Output: consistent 32-bit float as string
