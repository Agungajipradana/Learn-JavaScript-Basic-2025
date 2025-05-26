// -------------------------------------------
// Math.cbrt(x)
// Returns the cube root of a number.
// Equivalent to Math.pow(x, 1/3).
// -------------------------------------------

// Basic Examples
console.log(Math.cbrt(27)); // 3 (because 3 * 3 * 3 = 27)
console.log(Math.cbrt(8)); // 2
console.log(Math.cbrt(1)); // 1
console.log(Math.cbrt(0)); // 0
console.log(Math.cbrt(-8)); // -2
console.log(Math.cbrt(-125)); // -5

// Type coercion behavior
console.log(Math.cbrt("27")); // 3 (string is coerced to number)
console.log(Math.cbrt(null)); // 0 (null is coerced to 0)
console.log(Math.cbrt(undefined)); // NaN (cannot be converted to number)
console.log(Math.cbrt("abc")); // NaN (invalid string input)

// Real-World Use Cases

// 1. Calculate edge length of a cube from its volume
const cubeVolume = 125;
const cubeSide = Math.cbrt(cubeVolume);
console.log("Cube side length:", cubeSide); // 5

// 2. Normalize scale from cubic growth (e.g., animation, 3D models)
const scaledVolume = 1000;
const normalizedSize = Math.cbrt(scaledVolume);
console.log("Normalized size:", normalizedSize); // 10

// 3. Estimate size from density and mass (size ∝ ∛(mass / density))
const mass = 1000;
const density = 2.5;
const estimatedSize = Math.cbrt(mass / density);
console.log("Estimated size from mass and density:", estimatedSize);

// 4. Calculate difference in volume and convert to linear scale
function volumeDifferenceToEdgeLength(v1, v2) {
  const volumeDiff = Math.abs(v1 - v2);
  return Math.cbrt(volumeDiff);
}
console.log(
  "Edge length from volume difference:",
  volumeDifferenceToEdgeLength(343, 64)
); // ≈ 4.326

// 5. Use in mathematical modeling or physics formulas (e.g., force decay)
function inverseCubeLawForce(constant, distance) {
  return constant / Math.pow(distance, 3);
}
console.log("Force with inverse cube law:", inverseCubeLawForce(1000, 2)); // 125
