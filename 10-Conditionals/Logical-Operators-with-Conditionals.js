// ===== Logical AND (&&) =====

// Basic AND: Check if age is in a valid voting range
let age = 25;

if (age >= 18 && age <= 65) {
  console.log("Eligible to vote."); // Output: Eligible to vote.
} else {
  console.log("Not eligible to vote.");
}

// Case: User must be logged in AND have verified email
let isLoggedIn = true;
let isEmailVerified = false;

if (isLoggedIn && isEmailVerified) {
  console.log("Access granted.");
} else {
  console.log("Access denied."); // Output: Access denied.
}

// ===== Logical OR (||) =====

// Basic OR: Access is allowed if admin OR moderator
let role = "moderator";

if (role === "admin" || role === "moderator") {
  console.log("You have access."); // Output: You have access.
} else {
  console.log("Access restricted.");
}

// Case: Free shipping if total > 100 or user is premium
let total = 80;
let isPremium = true;

if (total > 100 || isPremium) {
  console.log("Free shipping available."); // Output: Free shipping available.
} else {
  console.log("Shipping fee applied.");
}

// ===== Logical NOT (!) =====

// Basic NOT: Block access if user is not authenticated
let isAuthenticated = false;

if (!isAuthenticated) {
  console.log("Please log in."); // Output: Please log in.
} else {
  console.log("Welcome!");
}

// Case: Form submission only allowed if terms are accepted
let acceptedTerms = false;

if (!acceptedTerms) {
  console.log("You must accept the terms."); // Output: You must accept the terms.
} else {
  console.log("Form submitted.");
}

// ===== Combined Logical Operators =====

// Case: User access - Must be admin and active, OR editor and verified
let userRole = "editor";
let isActive = false;
let isVerified = true;

if (
  (userRole === "admin" && isActive) ||
  (userRole === "editor" && isVerified)
) {
  console.log("Access granted."); // Output: Access granted.
} else {
  console.log("Access denied.");
}

// More complex case: Discount eligibility
let isStudent = true;
let hasCoupon = false;
let purchaseAmount = 120;

if ((purchaseAmount >= 100 && isStudent) || hasCoupon) {
  console.log("Discount applied."); // Output: Discount applied.
} else {
  console.log("No discount.");
}

// ===== Using logical operators in ternary =====

// Case: Simplified check using ternary and logical AND
let subscribed = true;
let hasProfile = true;

let homepageMessage =
  subscribed && hasProfile
    ? "Welcome to your dashboard."
    : "Complete your profile or subscribe.";
console.log(homepageMessage); // Output: Welcome to your dashboard.

// Case: Using OR in ternary
let selectedPlan = "";
let planMessage = selectedPlan || "No plan selected.";
console.log(planMessage); // Output: No plan selected.

// ===== Logical short-circuiting =====

// AND short-circuit: Run function only if condition is true
let debugMode = true;
debugMode && console.log("Debugging is enabled."); // Output: Debugging is enabled.

// OR short-circuit: Fallback default value
let userInput = "";
let finalInput = userInput || "Default value";
console.log(finalInput); // Output: Default value
