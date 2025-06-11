// ===============================================
// FUNCTION PARAMETERS AND ARGUMENTS IN JAVASCRIPT
// ===============================================

// --------------------------------------------------
// 1. Basic Parameters and Arguments
// --------------------------------------------------
// A function can accept values (called parameters) when declared.
// When calling the function, we pass actual values (called arguments).
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("John");
// Output:
// Hello, John!

// --------------------------------------------------
// 2. Multiple Parameters
// --------------------------------------------------
// You can pass more than one argument by defining multiple parameters.
function introduce(name, age) {
  console.log("My name is " + name + " and I am " + age + " years old.");
}
introduce("Alice", 25);
// Output:
// My name is Alice and I am 25 years old.

// --------------------------------------------------
// 3. Default Parameters
// --------------------------------------------------
// If no argument is passed, the default value is used.
function welcome(name = "Guest") {
  console.log("Welcome, " + name + "!");
}
welcome("Emily");
// Output:
// Welcome, Emily!
welcome();
// Output:
// Welcome, Guest!

// --------------------------------------------------
// 4. Passing Expressions as Arguments
// --------------------------------------------------
// You can pass expressions (not just literals) as arguments.
function calculate(a, b) {
  console.log("Result:", a + b);
}
calculate(5 * 2, 3 + 4);
// Output:
// Result: 17

// --------------------------------------------------
// 5. Arguments Object (Old Style)
// --------------------------------------------------
// A special array-like object available in regular functions (not arrow functions).
function showArguments() {
  console.log("Number of arguments:", arguments.length);
  for (let i = 0; i < arguments.length; i++) {
    console.log("Argument " + i + ":", arguments[i]);
  }
}
showArguments("apple", 42, true);
// Output:
// Number of arguments: 3
// Argument 0: apple
// Argument 1: 42
// Argument 2: true

// --------------------------------------------------
// 6. Rest Parameters (Modern & Cleaner)
// --------------------------------------------------
// Collects all remaining arguments into a real array.
function sumAll(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}
console.log("Total:", sumAll(1, 2, 3, 4, 5));
// Output:
// Total: 15

// --------------------------------------------------
// 7. Destructured Parameters
// --------------------------------------------------
// You can destructure objects or arrays directly in parameters.
function printUser({ name, age }) {
  console.log(name + " is " + age + " years old.");
}
const user = { name: "Michael", age: 30 };
printUser(user);
// Output:
// Michael is 30 years old.

// --------------------------------------------------
// 8. Real-World Case: Create Full Name
// --------------------------------------------------
// A function that builds a user's full name from parts.
function getFullName(firstName, lastName, middleName = "") {
  return `${firstName} ${middleName} ${lastName}`.replace(/\s+/g, " ").trim();
}
console.log("Full Name:", getFullName("John", "Doe"));
// Output:
// Full Name: John Doe

console.log("Full Name with Middle:", getFullName("John", "Doe", "Michael"));
// Output:
// Full Name with Middle: John Michael Doe

// --------------------------------------------------
// 9. Validating Parameters with Conditionals
// --------------------------------------------------
// Check if all required arguments are provided.
function registerUser(username, email) {
  if (!username || !email) {
    console.log("Error: Missing username or email.");
    return;
  }
  console.log(`User ${username} registered with email ${email}.`);
}
registerUser("jane_doe", "jane@example.com");
// Output:
// User jane_doe registered with email jane@example.com.
registerUser("anonymous");
// Output:
// Error: Missing username or email.

// --------------------------------------------------
// 10. Function with Callback Argument
// --------------------------------------------------
// Passing a function as an argument (callback pattern).
function fetchData(onSuccess) {
  const data = { id: 1, name: "Product A" };
  onSuccess(data);
}
fetchData(function (item) {
  console.log("Fetched item:", item.name);
});
// Output:
// Fetched item: Product A
