// ===========================================
// REST PARAMETERS IN JAVASCRIPT
// ===========================================

// --------------------------------------------------
// 1. Basic Usage of Rest Parameters
// --------------------------------------------------
// Rest parameter (...) collects all remaining arguments into an array.
function logArguments(...args) {
  console.log("Arguments received:", args);
}

logArguments(1, 2, 3);
logArguments("apple", "banana", "cherry");
// Output:
// Arguments received: [1, 2, 3]
// Arguments received: ['apple', 'banana', 'cherry']

// --------------------------------------------------
// 2. Using Rest Parameters with Named Parameters
// --------------------------------------------------
// Rest parameter must be the last in the parameter list.
function introduce(greeting, ...names) {
  names.forEach((name) => {
    console.log(`${greeting}, ${name}`);
  });
}

introduce("Hello", "Alice", "Bob", "Charlie");
// Output:
// Hello, Alice
// Hello, Bob
// Hello, Charlie

// --------------------------------------------------
// 3. Summing Numbers with Rest Parameters
// --------------------------------------------------
// A common use case: summing any number of values.
function sumAll(...numbers) {
  const total = numbers.reduce((acc, num) => acc + num, 0);
  console.log("Total sum:", total);
}

sumAll(5, 10, 15);
sumAll(100, 200);
// Output:
// Total sum: 30
// Total sum: 300

// --------------------------------------------------
// 4. Logging Multiple Messages
// --------------------------------------------------
// Useful when a function needs to handle flexible arguments.
function log(level, ...messages) {
  messages.forEach((msg) => {
    console.log(`[${level.toUpperCase()}] ${msg}`);
  });
}

log("info", "System started", "Database connected");
log("error", "Failed to connect", "Retrying...");
// Output:
// [INFO] System started
// [INFO] Database connected
// [ERROR] Failed to connect
// [ERROR] Retrying...

// --------------------------------------------------
// 5. Arrow Function with Rest Parameters
// --------------------------------------------------
// Arrow functions can also use rest parameters.
const multiplyAll = (...nums) => nums.reduce((acc, val) => acc * val, 1);

console.log("Product of 2, 3, 4:", multiplyAll(2, 3, 4));
// Output:
// Product of 2, 3, 4: 24

// --------------------------------------------------
// 6. Filtering Valid Emails from Arguments
// --------------------------------------------------
// Real-world case: extract only valid emails from many inputs.
function filterEmails(...inputs) {
  const emails = inputs.filter((str) => str.includes("@"));
  console.log("Valid emails:", emails);
}

filterEmails("john@example.com", "hello", "admin@site.com", "123");
// Output:
// Valid emails: ['john@example.com', 'admin@site.com']

// --------------------------------------------------
// 7. Combining with Other Parameters
// --------------------------------------------------
// Can be used after fixed parameters to allow flexible input.
function createList(title, ...items) {
  console.log("Title:", title);
  console.log("Items:", items);
}

createList("Shopping", "Milk", "Eggs", "Bread");
// Output:
// Title: Shopping
// Items: ['Milk', 'Eggs', 'Bread']

// --------------------------------------------------
// 8. Real-World Use: Command Parser
// --------------------------------------------------
// Simulate parsing a command with arguments.
function runCommand(command, ...args) {
  console.log(`Running command: ${command}`);
  console.log("With arguments:", args);
}

runCommand("deploy", "--env", "production", "--force");
// Output:
// Running command: deploy
// With arguments: ['--env', 'production', '--force']

// --------------------------------------------------
// 9. Handling Undefined or Empty Arguments
// --------------------------------------------------
// The rest parameter will default to an empty array if no values provided.
function showTags(...tags) {
  if (tags.length === 0) {
    console.log("No tags provided.");
  } else {
    console.log("Tags:", tags.join(", "));
  }
}

showTags("javascript", "nodejs");
showTags();
// Output:
// Tags: javascript, nodejs
// No tags provided.

// --------------------------------------------------
// 10. Real-World Case: Dynamic Math Operation
// --------------------------------------------------
// Perform operations dynamically based on input.
function calculate(operation, ...values) {
  switch (operation) {
    case "sum":
      return console.log(
        "Sum:",
        values.reduce((a, b) => a + b, 0)
      );
    case "product":
      return console.log(
        "Product:",
        values.reduce((a, b) => a * b, 1)
      );
    default:
      return console.log("Unknown operation");
  }
}

calculate("sum", 10, 20, 30);
calculate("product", 2, 3, 4);
calculate("divide", 100, 5);
// Output:
// Sum: 60
// Product: 24
// Unknown operation
