/**
 * BOOLEAN PRIMITIVE IN JAVASCRIPT
 * -------------------------------
 * A Boolean primitive is a data type that can hold only one of two values:
 * - true
 * - false
 * 
 * Used in conditions, flags, toggles, and control flow logic.
 */

// SIMPLE USAGE
// ------------

// Declare a Boolean primitive
const isAvailable = true;
const isSoldOut = false;

console.log("isAvailable:", isAvailable);   // true
console.log("isSoldOut:", isSoldOut);       // false

// Using in an if-statement
if (isAvailable) {
  console.log("The item is available for purchase.");
} else {
  console.log("The item is sold out.");
}

// BOOLEAN FROM EXPRESSION
// ------------------------

// Result of comparison expressions is Boolean
const age = 20;
const isAdult = age >= 18;

console.log("isAdult:", isAdult); // true

if (isAdult) {
  console.log("User is an adult.");
}

// BOOLEAN FROM FUNCTIONS
// ----------------------

function isEven(number) {
  return number % 2 === 0;
}

console.log("4 is even:", isEven(4)); // true
console.log("7 is even:", isEven(7)); // false

// MEDIUM COMPLEXITY CASE
// -----------------------
// Use Boolean to control program logic like login status, validation, etc.

const isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Redirecting to login page...");
} else {
  console.log("Welcome back!");
}

// Simulating a login function
function login(username, password) {
  return username === "admin" && password === "1234";
}

const loginSuccess = login("admin", "1234");

if (loginSuccess) {
  console.log("Login successful.");
} else {
  console.log("Login failed.");
}

// ADVANCED CASE
// -------------
// Complex decision using Boolean flags

const hasPermission = true;
const isOwner = false;
const isAdmin = true;

if ((hasPermission && isOwner) || isAdmin) {
  console.log("Access granted.");
} else {
  console.log("Access denied.");
}

// FORM VALIDATION EXAMPLE
// ------------------------
// Validate that all required fields are filled

function isFormValid(name, email) {
  return Boolean(name) && Boolean(email);
}

const formName = "John";
const formEmail = "";

if (isFormValid(formName, formEmail)) {
  console.log("Form is valid, submitting...");
} else {
  console.log("Please fill in all required fields.");
}

// BOOLEAN IN ARRAYS AND FILTERING
// -------------------------------
// Filtering truthy values from a list

const values = [0, 1, "", "hello", null, undefined, "JavaScript"];
const truthyValues = values.filter(Boolean);

console.log("Truthy values:", truthyValues); // [1, "hello", "JavaScript"]

/**
 * SUMMARY
 * -------
 * - Boolean primitives are either true or false.
 * - Used in comparisons, conditionals, flags, validation, and logic control.
 * - Use Boolean() function to coerce values explicitly if needed.
 * - Avoid using Boolean objects (new Boolean()), stick to primitives.
 */
