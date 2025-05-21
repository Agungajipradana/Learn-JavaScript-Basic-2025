// RegExp (Regular Expression) is a non-primitive data type used for pattern matching in strings.

const pattern = /\d+/; // Matches one or more digits

const testString1 = "Order number 12345";
const testString2 = "No digits here";

console.log(pattern.test(testString1)); // Output: true  (digits found)
console.log(pattern.test(testString2)); // Output: false (no digits found)

console.log(typeof pattern); // Output: "object"
