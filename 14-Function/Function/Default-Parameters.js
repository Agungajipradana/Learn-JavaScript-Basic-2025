// ===========================================
// DEFAULT PARAMETERS IN JAVASCRIPT
// ===========================================

// --------------------------------------------------
// 1. Basic Default Parameter
// --------------------------------------------------
// If no argument is passed, the default value is used.
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet("John");
greet();
// Output:
// Hello, John!
// Hello, Guest!

// --------------------------------------------------
// 2. Multiple Default Parameters
// --------------------------------------------------
// You can define multiple parameters with defaults.
function createUser(name = "Anonymous", age = 18, active = true) {
  console.log(`Name: ${name}, Age: ${age}, Active: ${active}`);
}

createUser("Alice", 25, false);
createUser("Bob", 30);
createUser();
// Output:
// Name: Alice, Age: 25, Active: false
// Name: Bob, Age: 30, Active: true
// Name: Anonymous, Age: 18, Active: true

// --------------------------------------------------
// 3. Default Value Depending on Another Parameter
// --------------------------------------------------
// You can use earlier parameters to define later defaults.
function calculatePrice(price, tax = price * 0.1) {
  console.log(`Price: ${price}, Tax: ${tax}, Total: ${price + tax}`);
}

calculatePrice(100, 20);
calculatePrice(100);
// Output:
// Price: 100, Tax: 20, Total: 120
// Price: 100, Tax: 10, Total: 110

// --------------------------------------------------
// 4. Using Default Parameters with Destructuring
// --------------------------------------------------
// Useful when working with objects and destructuring parameters.
function printConfig({ theme = "light", layout = "grid" } = {}) {
  console.log(`Theme: ${theme}, Layout: ${layout}`);
}

printConfig({ theme: "dark" });
printConfig();
// Output:
// Theme: dark, Layout: grid
// Theme: light, Layout: grid

// --------------------------------------------------
// 5. Combining with Rest Parameters
// --------------------------------------------------
// Default parameters can be combined with rest (...args).
function logMessages(level = "info", ...messages) {
  console.log(`[${level.toUpperCase()}]`, ...messages);
}

logMessages("warn", "Disk space low", "Check logs");
logMessages(undefined, "System running smoothly");
// Output:
// [WARN] Disk space low Check logs
// [INFO] System running smoothly

// --------------------------------------------------
// 6. Default Parameters in Arrow Functions
// --------------------------------------------------
// Arrow functions can also use default values.
const multiply = (a = 1, b = 1) => a * b;

console.log("5 * 3 =", multiply(5, 3));
console.log("5 * default =", multiply(5));
console.log("default * default =", multiply());
// Output:
// 5 * 3 = 15
// 5 * default = 5
// default * default = 1

// --------------------------------------------------
// 7. Real-World Case: Pagination Helper
// --------------------------------------------------
// Function that builds pagination query with defaults.
function paginate(page = 1, limit = 10) {
  const offset = (page - 1) * limit;
  console.log(`Page: ${page}, Limit: ${limit}, Offset: ${offset}`);
}

paginate(3, 20);
paginate();
// Output:
// Page: 3, Limit: 20, Offset: 40
// Page: 1, Limit: 10, Offset: 0

// --------------------------------------------------
// 8. Default Parameters with Validation
// --------------------------------------------------
// Fallback only applies if undefined, not if null or other falsy values.
function showMessage(message = "No message provided") {
  console.log("Message:", message);
}

showMessage("System ready");
showMessage(undefined);
showMessage(null);
showMessage("");
// Output:
// Message: System ready
// Message: No message provided
// Message: null
// Message:
// (Empty string remains empty unless explicitly handled)
