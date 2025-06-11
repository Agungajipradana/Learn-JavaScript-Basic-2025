// =======================================
// DECLARING A FUNCTION IN JAVASCRIPT
// =======================================

// --------------------------------------------------
// 1. Basic Function Declaration
// --------------------------------------------------
// Simple function that prints a greeting message.
function sayHello() {
  console.log("Hello!");
}
sayHello();
// Output:
// Hello!

// --------------------------------------------------
// 2. Function with a Single Parameter
// --------------------------------------------------
// Function accepts a name and prints a personalized greeting.
function greetUser(name) {
  console.log("Hello, " + name + "!");
}
greetUser("John");
// Output:
// Hello, John!

// --------------------------------------------------
// 3. Function with Multiple Parameters
// --------------------------------------------------
// Accepts two numbers and prints their sum.
function add(a, b) {
  console.log("Result:", a + b);
}
add(5, 3);
// Output:
// Result: 8

// --------------------------------------------------
// 4. Function with Return Value
// --------------------------------------------------
// Multiplies two numbers and returns the result.
function multiply(x, y) {
  return x * y;
}
const result = multiply(4, 2);
console.log("Multiply:", result);
// Output:
// Multiply: 8

// --------------------------------------------------
// 5. Function That Processes an Array
// --------------------------------------------------
// Calculates the average of an array of numbers.
function calculateAverage(numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total / numbers.length;
}
const scores = [90, 80, 100];
console.log("Average Score:", calculateAverage(scores));
// Output:
// Average Score: 90

// --------------------------------------------------
// 6. Function with Conditional Logic
// --------------------------------------------------
// Checks age and returns a message based on the value.
function checkAge(age) {
  if (age >= 18) {
    return "You are an adult.";
  } else {
    return "You are underage.";
  }
}
console.log(checkAge(20));
// Output:
// You are an adult.
console.log(checkAge(16));
// Output:
// You are underage.

// --------------------------------------------------
// 7. Real-World Case: Formatting a User Profile
// --------------------------------------------------
// Builds a string representing a user’s profile.
function createUserProfile(name, age, city) {
  return `Name: ${name}\nAge: ${age}\nLocation: ${city}`;
}
const profile = createUserProfile("John Doe", 28, "New York");
console.log("User Profile:\n" + profile);
// Output:
// User Profile:
// Name: John Doe
// Age: 28
// Location: New York

// --------------------------------------------------
// 8. Practical Case: Validating an Email Address
// --------------------------------------------------
// Checks if an email string matches a basic format using RegEx.
function isEmailValid(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}
console.log("Valid Email:", isEmailValid("john@example.com"));
// Output:
// Valid Email: true

console.log("Invalid Email:", isEmailValid("john@"));
// Output:
// Invalid Email: false
