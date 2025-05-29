// Basic usage of if statement
let number = 10;

if (number > 0) {
  // This block will run if the condition is true
  console.log("The number is positive."); // Output: The number is positive.
}

// Example with a condition that evaluates to false
let score = 30;

if (score > 50) {
  console.log("Passed the test.");
}
// No output here because the condition is false

// Using a variable to control program flow
let isRaining = true;

if (isRaining) {
  console.log("Take an umbrella."); // Output: Take an umbrella.
}

// Checking multiple conditions using logical operators
let temperature = 35;

if (temperature > 30 && temperature < 40) {
  console.log("It's a hot day."); // Output: It's a hot day.
}

// Real-world case: User authentication
let isLoggedIn = true;
let userRole = "admin";

if (isLoggedIn) {
  console.log("User is logged in."); // Output: User is logged in.

  if (userRole === "admin") {
    console.log("Redirect to admin dashboard."); // Output: Redirect to admin dashboard.
  }
}

// Nested if statements to handle more complex logic
let age = 20;
let hasPermission = true;

if (age >= 18) {
  if (hasPermission) {
    console.log("Access granted."); // Output: Access granted.
  } else {
    console.log("Permission required.");
  }
} else {
  console.log("You must be at least 18.");
}

// Combining multiple conditions using OR (||)
let day = "Sunday";

if (day === "Saturday" || day === "Sunday") {
  console.log("It's the weekend!"); // Output: It's the weekend!
}

// Using if statement to check for truthy values
let username = "John";

if (username) {
  console.log("Username is provided."); // Output: Username is provided.
}

// Advanced: Form validation example
let formData = {
  email: "user@example.com",
  password: "",
};

if (!formData.email) {
  console.log("Email is required.");
}

if (!formData.password) {
  console.log("Password is required."); // Output: Password is required.
}
