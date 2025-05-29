// ================================
// What are Truthy and Falsy Values?
// ================================

// In JavaScript, every value is either "truthy" or "falsy" when evaluated in a boolean context.

// Falsy values include:
// - false
// - 0
// - -0
// - 0n (BigInt zero)
// - ""
// - null
// - undefined
// - NaN

// All other values are considered truthy.

// ========== Basic Examples ==========

// Example: Basic if check with a falsy value
let input = "";

if (input) {
  console.log("Input provided.");
} else {
  console.log("Input is empty."); // Output: Input is empty.
}

// Example: Basic if check with a truthy value
let username = "John";

if (username) {
  console.log("Welcome, " + username); // Output: Welcome, John
} else {
  console.log("Username is missing.");
}

// ========== Common Falsy Values ==========

console.log(Boolean(false)); // Output: false
console.log(Boolean(0)); // Output: false
console.log(Boolean("")); // Output: false
console.log(Boolean(null)); // Output: false
console.log(Boolean(undefined)); // Output: false
console.log(Boolean(NaN)); // Output: false

// ========== Common Truthy Values ==========

console.log(Boolean("Hello")); // Output: true
console.log(Boolean(123)); // Output: true
console.log(Boolean([])); // Output: true (empty array is truthy)
console.log(Boolean({})); // Output: true (empty object is truthy)
console.log(Boolean(" ")); // Output: true (space string is not empty)
console.log(Boolean(Infinity)); // Output: true

// ========== Real-World Cases ==========

// Case: Checking user token before accessing dashboard
let userToken = null;

if (!userToken) {
  console.log("Access denied. No token found."); // Output: Access denied. No token found.
} else {
  console.log("Access granted.");
}

// Case: Providing default value if input is falsy
let searchQuery = "";

let finalQuery = searchQuery || "all";
console.log("Searching for:", finalQuery); // Output: Searching for: all

// Case: Nested truthy check
let cart = [];

if (cart && cart.length > 0) {
  console.log("You have items in your cart.");
} else {
  console.log("Your cart is empty."); // Output: Your cart is empty.
}

// Case: Handle configuration values
let config = {
  darkMode: false,
};

if (config.darkMode) {
  console.log("Dark mode is on.");
} else {
  console.log("Dark mode is off."); // Output: Dark mode is off.
}

// ========== Using Truthy/Falsy in Ternary ==========

let apiResponse = "";

let displayMessage = apiResponse ? apiResponse : "No data returned from API";
console.log(displayMessage); // Output: No data returned from API

// Shorter version using ||
let displayMessage2 = apiResponse || "No data returned from API";
console.log(displayMessage2); // Output: No data returned from API

// ========== Combining Falsy Checks ==========

let userInput = 0;
if (userInput || userInput === 0) {
  console.log("Valid input received."); // Output: Valid input received.
} else {
  console.log("No valid input.");
}

// ========== Type Coercion Warning ==========

let value = "0";
if (value) {
  console.log("Truthy because it's a non-empty string."); // Output: Truthy because it's a non-empty string.
}

// But this can be confusing if expecting numeric falsy check
let numberValue = "0";
if (Number(numberValue)) {
  console.log("This will not run.");
} else {
  console.log("Value is treated as numeric 0 (falsy)."); // Output: Value is treated as numeric 0 (falsy).
}
