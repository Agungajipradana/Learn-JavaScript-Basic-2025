// Basic usage of if...else if...else
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B"); // Output: Grade: B
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// Example: Age group classification
let age = 30;

if (age < 13) {
  console.log("Child");
} else if (age >= 13 && age < 20) {
  console.log("Teenager");
} else if (age >= 20 && age < 60) {
  console.log("Adult"); // Output: Adult
} else {
  console.log("Senior");
}

// Example: Product discount logic
let totalPurchase = 550;

if (totalPurchase >= 1000) {
  console.log("You get 30% discount.");
} else if (totalPurchase >= 500) {
  console.log("You get 20% discount."); // Output: You get 20% discount.
} else if (totalPurchase >= 100) {
  console.log("You get 10% discount.");
} else {
  console.log("No discount available.");
}

// Example: Temperature response
let temperature = 5;

if (temperature >= 30) {
  console.log("It's hot.");
} else if (temperature >= 20) {
  console.log("It's warm.");
} else if (temperature >= 10) {
  console.log("It's cool.");
} else {
  console.log("It's cold."); // Output: It's cold.
}

// Real-world case: Checking multiple roles
let role = "editor";

if (role === "admin") {
  console.log("Redirect to admin dashboard.");
} else if (role === "editor") {
  console.log("Redirect to content management."); // Output: Redirect to content management.
} else if (role === "user") {
  console.log("Redirect to user homepage.");
} else {
  console.log("Unknown role.");
}

// Nested example: Bank transaction approval
let balance = 1000;
let withdrawAmount = 800;
let isAccountActive = true;

if (!isAccountActive) {
  console.log("Account is inactive.");
} else if (withdrawAmount > balance) {
  console.log("Insufficient balance.");
} else if (withdrawAmount > 0) {
  console.log("Withdrawal approved."); // Output: Withdrawal approved.
} else {
  console.log("Invalid amount.");
}

// Example: School grading with remarks
let finalScore = 72;

if (finalScore >= 90) {
  console.log("Grade: A - Excellent");
} else if (finalScore >= 80) {
  console.log("Grade: B - Good");
} else if (finalScore >= 70) {
  console.log("Grade: C - Satisfactory"); // Output: Grade: C - Satisfactory
} else if (finalScore >= 60) {
  console.log("Grade: D - Needs Improvement");
} else {
  console.log("Grade: F - Failed");
}
