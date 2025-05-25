/**
 * JavaScript String Method: valueOf()
 * -----------------------------------
 * The `valueOf()` method returns the **primitive value** of a String object.
 * In most cases, JavaScript automatically calls this method internally,
 * so it's rarely needed explicitly unless dealing with objects.
 *
 * Syntax:
 *   str.valueOf()
 */

// Example 1: Using valueOf on a string primitive
const str1 = "Hello";
console.log(str1.valueOf()); // Output: "Hello"

// Example 2: Using valueOf on a String object
const strObj = new String("World");
console.log(strObj); // Output: [String: 'World']
console.log(strObj.valueOf()); // Output: "World" (primitive string)

// Example 3: Checking types
console.log(typeof str1); // Output: "string"
console.log(typeof strObj); // Output: "object"
console.log(typeof strObj.valueOf()); // Output: "string"

// Example 4: Comparison of primitive vs object
const a = "Test";
const b = new String("Test");

console.log(a == b); // true (value is the same)
console.log(a === b); // false (different types)
console.log(a === b.valueOf()); // true (both primitives now)

// Example 5: Using valueOf in custom function
function greet(nameObj) {
  // Ensure we are working with a primitive string
  const name = nameObj.valueOf();
  return `Hello, ${name}!`;
}

const userName = new String("John");
console.log(greet(userName)); // Output: "Hello, John!"

// Example 6: Avoid confusion with implicit conversion
const message = new String("Important");
const log = "Message: " + message;
console.log(log); // Output: "Message: Important" (valueOf is implicitly called)

// Example 7: Using valueOf with JSON.stringify (no difference)
console.log(JSON.stringify(strObj)); // Output: "\"World\""
console.log(JSON.stringify(strObj.valueOf())); // Output: "\"World\""

// Summary:
// - `valueOf()` returns the primitive string value from a String object.
// - Useful when ensuring compatibility between objects and primitive strings.
// - Most of the time, you don’t need to call it manually.
