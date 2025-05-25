/**
 * JavaScript String Method: concat()
 * ----------------------------------
 * The `concat()` method is used to combine (concatenate) two or more strings into one.
 * 
 * Syntax:
 *   str1.concat(str2, str3, ..., strN)
 * 
 * - Does NOT modify the original strings.
 * - Works the same as using the `+` operator.
 * - Can accept multiple arguments.
 */

// Basic example
const greeting = "Hello";
const name = "World";

const result = greeting.concat(", ", name, "!");
console.log(result); // Output: "Hello, World!"


// Example 1: Compare concat() vs + operator
const a = "Good";
const b = "Morning";

console.log(a.concat(" ", b)); // Output: "Good Morning"
console.log(a + " " + b);      // Output: "Good Morning"


// Example 2: Concatenating multiple strings dynamically
const parts = ["JavaScript", "is", "fun"];
let sentence = "";

for (let i = 0; i < parts.length; i++) {
  sentence = sentence.concat(parts[i]);
  if (i !== parts.length - 1) {
    sentence = sentence.concat(" ");
  }
}

console.log(sentence); // Output: "JavaScript is fun"


// Example 3: Concatenating user inputs (e.g., from form values)
function buildFullName(firstName, middleName, lastName) {
  return firstName.concat(" ", middleName, " ", lastName);
}

console.log(buildFullName("Michael", "John", "Doe")); 
// Output: "Michael John Doe"


// Example 4: Edge case with non-string types
const str = "Version: ";
const number = 4.5;

console.log(str.concat(number)); // Output: "Version: 4.5"
// JavaScript automatically converts number to string


// Example 5: Use in function composition (less common)
function labelKeyValue(key, value) {
  return key.concat(": ", value);
}

console.log(labelKeyValue("Status", "Success")); 
// Output: "Status: Success"


// Summary:
// - concat() joins strings without modifying the originals.
// - Useful for clarity when combining many string values.
// - Works similarly to the + operator but can accept multiple parameters.
