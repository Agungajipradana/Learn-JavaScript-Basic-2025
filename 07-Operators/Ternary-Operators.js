// ======================= 1. Basic Syntax =======================
// Ternary operator syntax: condition ? expressionIfTrue : expressionIfFalse

let age = 18;
let canVote = age >= 18 ? "Yes, can vote" : "No, too young";
console.log(canVote); // Output: Yes, can vote

// ======================= 2. Using Ternary as a Simple If-Else Replacement =======================

let score = 75;
let result = score >= 60 ? "Pass" : "Fail";
console.log(`Result: ${result}`); // Output: Result: Pass

// ======================= 3. Nested Ternary =======================
// Multiple conditions handled in one statement

let marks = 85;
let grade = marks >= 90 ? "A" : marks >= 75 ? "B" : marks >= 60 ? "C" : "F";

console.log(`Grade: ${grade}`); // Output: Grade: B

// ======================= 4. Using Ternary for Assignments =======================

let isMember = false;
let price = isMember ? 10 : 20;
console.log(`Price to pay: $${price}`); // Output: Price to pay: $20

// ======================= 5. Ternary inside Template Literals =======================

let temperature = 30;
console.log(`The weather is ${temperature > 25 ? "hot" : "cool"}.`);
// Output: The weather is hot.

// ======================= 6. Real-World Case: Login Status Message =======================

let user = {
  isLoggedIn: true,
  name: "Alice",
};

let greeting = user.isLoggedIn
  ? `Welcome back, ${user.name}!`
  : "Please log in.";
console.log(greeting); // Output: Welcome back, Alice!

// ======================= 7. Advanced Case: Rendering UI Text Based on Role =======================

let userRole = "admin";

let accessMessage =
  userRole === "admin"
    ? "Access granted."
    : userRole === "editor"
    ? "Limited access granted."
    : "No access.";

console.log(accessMessage); // Output: Access granted.

// ======================= 8. Use Ternary with Function Calls =======================

function notifyAdmin() {
  console.log("Admin notified!");
}

function notifyUser() {
  console.log("User notified!");
}

let isAdmin = true;
isAdmin ? notifyAdmin() : notifyUser();
// Output: Admin notified!
