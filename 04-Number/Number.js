// Primitive number examples
let intNum = 100;
let floatNum = 3.14;
let negativeNum = -42;
let scientificNum = 1.23e4; // 12300

console.log("Basic Numbers:");
console.log(intNum, floatNum, negativeNum, scientificNum);

// ===== Prototype Methods =====

let num = 255;

console.log("\n--- toString() ---");
console.log(num.toString()); // "255"
console.log(num.toString(16)); // "ff"
console.log(num.toString(2)); // "11111111"

console.log("\n--- toFixed() ---");
let pi = 3.14159;
console.log(pi.toFixed(2)); // "3.14"
console.log(pi.toFixed(0)); // "3"

console.log("\n--- toExponential() ---");
let bigNum = 123456;
console.log(bigNum.toExponential(2)); // "1.23e+5"

console.log("\n--- toPrecision() ---");
let val = 3.14159;
console.log(val.toPrecision(2)); // "3.1"
console.log(val.toPrecision(5)); // "3.1416"

console.log("\n--- valueOf() ---");
let numObj = new Number(10);
console.log(numObj.valueOf()); // 10

// ===== Static Methods =====

console.log("\n--- Number.isNaN() ---");
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("hello")); // false

console.log("\n--- Number.isFinite() ---");
console.log(Number.isFinite(100)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite("100")); // false

console.log("\n--- Number.isInteger() ---");
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.5)); // false

console.log("\n--- Number.parseInt() ---");
console.log(Number.parseInt("42")); // 42
console.log(Number.parseInt("101", 2)); // 5

console.log("\n--- Number.parseFloat() ---");
console.log(Number.parseFloat("3.14")); // 3.14
console.log(Number.parseFloat("123abc")); // 123

// ===== Constants/Properties =====

console.log("\n--- Number Properties ---");
console.log("MAX_VALUE:", Number.MAX_VALUE);
console.log("MIN_VALUE:", Number.MIN_VALUE);
console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);
console.log("POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
console.log("NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);
console.log("NaN:", Number.NaN);
