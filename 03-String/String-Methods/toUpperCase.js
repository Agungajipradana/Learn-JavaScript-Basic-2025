/**
 * JavaScript String Method: toUpperCase()
 * ---------------------------------------
 * The `toUpperCase()` method returns the calling string value converted to uppercase.
 * It does not modify the original string (strings are immutable in JavaScript).
 *
 * Syntax:
 *   str.toUpperCase()
 */

// Example 1: Simple usage
const message = "hello world";
const upperMessage = message.toUpperCase();
console.log(upperMessage); // Output: "HELLO WORLD"

// Example 2: String remains unchanged (immutability)
console.log(message); // Output: "hello world"

// Example 3: Using with user input to standardize
const userInput = "john";
const expected = "JOHN";
if (userInput.toUpperCase() === expected) {
  console.log("Matched (case-insensitive)"); // Output: "Matched (case-insensitive)"
}

// Example 4: Combining with toLowerCase() for transformations
const mixCase = "JaVaScRiPt";
const uniform = mixCase.toUpperCase();
console.log(uniform); // Output: "JAVASCRIPT"

// Example 5: Using in array map()
const names = ["alice", "bob", "carol"];
const upperNames = names.map((name) => name.toUpperCase());
console.log(upperNames); // Output: ["ALICE", "BOB", "CAROL"]

// Example 6: Uppercasing parts of a sentence
const sentence = "i love javascript!";
const firstLetter = sentence.charAt(0).toUpperCase();
const rest = sentence.slice(1);
console.log(firstLetter + rest); // Output: "I love javascript!"

// Example 7: Uppercasing domain names (not recommended for URLs but for demonstration)
const email = "user@example.com";
const domain = email.split("@")[1].toUpperCase();
console.log(domain); // Output: "EXAMPLE.COM"

// Example 8: Uppercase check in conditional logic
const country = "usa";
if (country.toUpperCase() === "USA") {
  console.log("Country is USA"); // Output: "Country is USA"
}

// Summary:
// - `toUpperCase()` is useful for case-insensitive comparisons, formatting, and standardization.
// - It returns a **new** string with all characters in uppercase.
// - Non-alphabetic characters remain unaffected.
