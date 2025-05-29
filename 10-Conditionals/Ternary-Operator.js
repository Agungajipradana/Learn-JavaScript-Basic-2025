// Basic usage of ternary operator
let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result); // Output: Adult

// Example: Login status check
let isLoggedIn = false;
let message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message); // Output: Please log in.

// Nested ternary: Score evaluation
let score = 85;
let grade =
  score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "F";
console.log(`Grade: ${grade}`); // Output: Grade: B

// Example: Shipping cost based on total
let totalAmount = 120;
let shipping = totalAmount >= 100 ? "Free shipping" : "$10 shipping fee";
console.log(shipping); // Output: Free shipping

// Example: Even or odd number check
let number = 7;
let evenOdd = number % 2 === 0 ? "Even" : "Odd";
console.log(`The number is ${evenOdd}.`); // Output: The number is Odd.

// Case: User role access using ternary
let role = "admin";
let access =
  role === "admin"
    ? "Full access"
    : role === "editor"
    ? "Edit access"
    : "Read-only access";
console.log(access); // Output: Full access

// Real-world case: Product stock
let stock = 0;
let availability = stock > 0 ? "In stock" : "Out of stock";
console.log(availability); // Output: Out of stock

// More complex case: Theme toggle
let isDarkMode = true;
let theme = isDarkMode ? "Dark Theme" : "Light Theme";
console.log(`Current theme: ${theme}`); // Output: Current theme: Dark Theme

// Conditional rendering: User status
let username = "John";
let displayName = username ? `Hello, ${username}` : "Guest";
console.log(displayName); // Output: Hello, John

// Example: Age restriction message
let userAge = 15;
let accessMessage =
  userAge >= 18 ? "Access granted." : "Access denied. Must be 18 or older.";
console.log(accessMessage); // Output: Access denied. Must be 18 or older.
