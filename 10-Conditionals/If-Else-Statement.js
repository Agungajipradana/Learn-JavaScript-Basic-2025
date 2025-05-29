// Basic usage of if...else
let age = 17;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor."); // Output: You are a minor.
}

// Using if...else with boolean flags
let isLoggedIn = false;

if (isLoggedIn) {
  console.log("Welcome back!");
} else {
  console.log("Please log in."); // Output: Please log in.
}

// Using if...else with comparison
let temperature = 25;

if (temperature < 20) {
  console.log("It's cold.");
} else {
  console.log("The weather is warm."); // Output: The weather is warm.
}

// Real-world case: Checking user access
let isAuthenticated = true;
let isEmailVerified = false;

if (isAuthenticated && isEmailVerified) {
  console.log("Access granted.");
} else {
  console.log("Access denied."); // Output: Access denied.
}

// if...else to handle input validation
let input = "";

if (input === "") {
  console.log("Input cannot be empty."); // Output: Input cannot be empty.
} else {
  console.log("Processing input...");
}

// Using if...else in a shopping cart logic
let stock = 0;

if (stock > 0) {
  console.log("Item added to cart.");
} else {
  console.log("Out of stock."); // Output: Out of stock.
}

// More complex example: User role-based redirection
let role = "user";

if (role === "admin") {
  console.log("Redirect to admin dashboard.");
} else {
  console.log("Redirect to user homepage."); // Output: Redirect to user homepage.
}

// Nested if...else logic
let userAge = 16;
let hasParentalConsent = true;

if (userAge >= 18) {
  console.log("Access granted.");
} else {
  if (hasParentalConsent) {
    console.log("Access granted with parental consent."); // Output: Access granted with parental consent.
  } else {
    console.log("Access denied. Parental consent required.");
  }
}

// Using if...else to determine grade category
let score = 65;

if (score >= 75) {
  console.log("You passed.");
} else {
  console.log("You failed."); // Output: You failed.
}

// Case: Check whether a number is even or odd
let number = 11;

if (number % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd."); // Output: The number is odd.
}
