// =====================================================
// HOF: RETURNING FUNCTION IN JAVASCRIPT
// =====================================================

// -----------------------------------------------------
// 1. What is a Returning Function?
// -----------------------------------------------------
// A function that returns another function is a High Order Function.
// This allows you to generate customized or dynamic behavior.

// Syntax:
// function outer() {
//   return function inner() {
//     // ...
//   }
// }

// -----------------------------------------------------
// 2. Basic Example: Function Returning Function
// -----------------------------------------------------

function greet() {
  return function () {
    console.log("Hello from inner function!");
  };
}

const greeter = greet();
greeter(); // Output: Hello from inner function!

// -----------------------------------------------------
// 3. Returning Function with Closure
// -----------------------------------------------------
// Returned function retains access to the outer function's scope.

function greetUser(name) {
  return function () {
    console.log("Hello,", name);
  };
}

const greetJohn = greetUser("John");
greetJohn(); // Output: Hello, John

// -----------------------------------------------------
// 4. Case: Math Operation Factory
// -----------------------------------------------------

function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log("Double of 5:", double(5)); // Output: 10
console.log("Triple of 5:", triple(5)); // Output: 15

// -----------------------------------------------------
// 5. Case: Custom Logger Generator
// -----------------------------------------------------

function createLogger(prefix) {
  return function (message) {
    console.log(`[${prefix}] ${message}`);
  };
}

const infoLogger = createLogger("INFO");
const errorLogger = createLogger("ERROR");

infoLogger("App started"); // Output: [INFO] App started
errorLogger("Something went wrong"); // Output: [ERROR] Something went wrong

// -----------------------------------------------------
// 6. Case: Access Control Wrapper
// -----------------------------------------------------

function withRole(role) {
  return function (action) {
    if (role === "admin") {
      console.log("Access granted for", role);
      action();
    } else {
      console.log("Access denied for", role);
    }
  };
}

function deleteData() {
  console.log("Data deleted.");
}

const adminAccess = withRole("admin");
const userAccess = withRole("user");

adminAccess(deleteData); // Output: Access granted for admin, Data deleted.
userAccess(deleteData); // Output: Access denied for user

// -----------------------------------------------------
// 7. Case: Configuration Generator
// -----------------------------------------------------

function createConfig(environment) {
  return function () {
    if (environment === "development") {
      return { debug: true, logging: true };
    } else if (environment === "production") {
      return { debug: false, logging: false };
    } else {
      return { debug: false, logging: true };
    }
  };
}

const devConfig = createConfig("development");
const prodConfig = createConfig("production");

console.log("Dev Config:", devConfig());
// Output: { debug: true, logging: true }

console.log("Prod Config:", prodConfig());
// Output: { debug: false, logging: false }

// -----------------------------------------------------
// 8. Chaining Returned Functions
// -----------------------------------------------------

function step1(a) {
  return function step2(b) {
    return function step3(c) {
      return a + b + c;
    };
  };
}

const result = step1(1)(2)(3);
console.log("Chained Result:", result); // Output: 6

// -----------------------------------------------------
// 9. Summary: When to Use Returning Functions
// -----------------------------------------------------
/*
✔ Use when:
  - You want to create factories for behavior
  - You need closures (access to outer function's state)
  - You need currying (multi-step argument passing)
  - You want to build reusable or composable logic

✖ Avoid if it adds unnecessary complexity.
*/

// -----------------------------------------------------
// 10. Final Notes
// -----------------------------------------------------
/*
- Functions that return other functions are core to functional programming.
- They are useful for code reuse, customization, and dynamic behavior.
- Common in frameworks, libraries, middleware patterns, etc.
*/
