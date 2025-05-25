/**
 * JavaScript String Method: toString()
 * -------------------------------------
 * The `toString()` method returns a string representing the specified object.
 * It can be used to convert numbers, booleans, arrays, and other types to a string.
 * For strings, it simply returns the same string.
 *
 * Syntax:
 *   value.toString()
 */

// Example 1: Using toString() on a number
const num = 123;
const numStr = num.toString();
console.log(numStr); // Output: "123"
console.log(typeof numStr); // Output: "string"

// Example 2: Using toString() on a boolean
const isActive = true;
console.log(isActive.toString()); // Output: "true"

// Example 3: Using toString() on a string (returns same string)
const greeting = "Hello";
console.log(greeting.toString()); // Output: "Hello"

// Example 4: Using toString() on an array
const fruits = ["apple", "banana", "mango"];
console.log(fruits.toString()); // Output: "apple,banana,mango"

// Example 5: Using toString() on a date object
const date = new Date("2024-05-25");
console.log(date.toString()); // Output: "Sat May 25 2024 ..." (varies based on timezone)

// Example 6: Converting number before concatenation
const price = 1000;
console.log("The price is " + price.toString()); // Output: "The price is 1000"

// Example 7: Automatic vs manual conversion
const autoConcat = "The number is " + 42; // JS converts automatically
const manualConcat = "The number is " + (42).toString();
console.log(autoConcat); // Output: "The number is 42"
console.log(manualConcat); // Output: "The number is 42"

// Example 8: Using toString() in a custom object
const user = {
  name: "John",
  toString() {
    return `User: ${this.name}`;
  },
};
console.log(user.toString()); // Output: "User: John"

// Example 9: Potential error - calling toString() on null or undefined throws error
try {
  const x = null;
  console.log(x.toString()); // ❌ Error: Cannot read properties of null
} catch (error) {
  console.log("Error:", error.message); // Output: Error: Cannot read properties of null
}

// Summary:
// - `toString()` is a versatile method for converting values to string format.
// - It is useful for logging, string concatenation, and formatting output.
// - Use with caution on null or undefined, as it will throw an error.
