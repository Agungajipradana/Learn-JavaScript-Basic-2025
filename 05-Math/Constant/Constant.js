// ------------------------------------------
// Math.PI
// The ratio of a circle’s circumference to its diameter (~3.14159)
// Commonly used in geometry and trigonometry
// ------------------------------------------
console.log(Math.PI); // 3.141592653589793

const radius = 5;
const circumference = 2 * Math.PI * radius;
console.log(circumference); // 31.41592653589793

const area = Math.PI * Math.pow(radius, 2);
console.log(area); // 78.53981633974483

// ------------------------------------------
// Math.E
// Euler's number (~2.71828), base of the natural logarithm
// Commonly used in exponential growth calculations
// ------------------------------------------
console.log(Math.E); // 2.718281828459045

const compoundGrowth = 1000 * Math.pow(Math.E, 0.05 * 10);
console.log(compoundGrowth); // 1648.721270700128

// ------------------------------------------
// Math.LN2
// Natural logarithm of 2 (~0.693)
// Used in algorithms involving binary doubling or halving
// ------------------------------------------
console.log(Math.LN2); // 0.6931471805599453

// Example: Time to double with exponential growth
const doublingTime = Math.LN2 / 0.05;
console.log(doublingTime); // 13.862943611198906

// ------------------------------------------
// Math.LN10
// Natural logarithm of 10 (~2.30258)
// Used to convert natural log to base-10 log
// ------------------------------------------
console.log(Math.LN10); // 2.302585092994046

// Convert ln(x) to log10(x): log10(x) = ln(x) / Math.LN10
const x = 1000;
const log10x = Math.log(x) / Math.LN10;
console.log(log10x); // 3

// ------------------------------------------
// Math.LOG2E
// Base-2 logarithm of Math.E (~1.44269)
// Used to convert natural log to log base 2
// ------------------------------------------
console.log(Math.LOG2E); // 1.4426950408889634

// Convert ln(x) to log2(x): log2(x) = ln(x) * Math.LOG2E
const log2x = Math.log(x) * Math.LOG2E;
console.log(log2x); // ~9.96578

// ------------------------------------------
// Math.LOG10E
// Base-10 logarithm of Math.E (~0.43429)
// Used to convert natural log to log base 10
// ------------------------------------------
console.log(Math.LOG10E); // 0.4342944819032518

// Convert ln(x) to log10(x): log10(x) = ln(x) * Math.LOG10E
const log10e = Math.log(Math.E) * Math.LOG10E;
console.log(log10e); // 1

// ------------------------------------------
// Math.SQRT2
// Square root of 2 (~1.41421)
// Appears in geometry, especially in right triangles
// ------------------------------------------
console.log(Math.SQRT2); // 1.4142135623730951

// Diagonal of a square with side = 1
const side = 1;
const diagonal = side * Math.SQRT2;
console.log(diagonal); // 1.4142135623730951

// ------------------------------------------
// Math.SQRT1_2
// Square root of 1/2 (~0.7071) = 1 / sqrt(2)
// Also used in trigonometry and normalizing vectors
// ------------------------------------------
console.log(Math.SQRT1_2); // 0.7071067811865476

// Normalize a vector with length 1 in 2D space
const normalizedX = 1 * Math.SQRT1_2;
const normalizedY = 1 * Math.SQRT1_2;
console.log(normalizedX, normalizedY); // 0.7071067811865476 0.7071067811865476
