// ======================= 1. Equal (==) =======================
// Compares values for equality, type is NOT considered
console.log('5 == "5" =>', 5 == "5"); // Output: true

// ======================= 2. Strict Equal (===) =======================
// Compares both value AND type
console.log('5 === "5" =>', 5 === "5"); // Output: false
console.log("5 === 5 =>", 5 === 5); // Output: true

// ======================= 3. Not Equal (!=) =======================
// Compares values for inequality, type is NOT considered
console.log('7 != "7" =>', 7 != "7"); // Output: false

// ======================= 4. Strict Not Equal (!==) =======================
// Compares both value AND type for inequality
console.log('7 !== "7" =>', 7 !== "7"); // Output: true

// ======================= 5. Greater Than (>) =======================
console.log("10 > 5 =>", 10 > 5); // Output: true
console.log("3 > 7 =>", 3 > 7); // Output: false

// ======================= 6. Less Than (<) =======================
console.log("2 < 5 =>", 2 < 5); // Output: true
console.log("8 < 4 =>", 8 < 4); // Output: false

// ======================= 7. Greater Than or Equal (>=) =======================
console.log("6 >= 6 =>", 6 >= 6); // Output: true
console.log("4 >= 9 =>", 4 >= 9); // Output: false

// ======================= 8. Less Than or Equal (<=) =======================
console.log("5 <= 5 =>", 5 <= 5); // Output: true
console.log("10 <= 3 =>", 10 <= 3); // Output: false

// ======================= Real-World Case 1: Age Verification =======================
let age = 20;
let isAdult = age >= 18;
console.log("Is 20 years old an adult?", isAdult); // Output: true

// ======================= Real-World Case 2: Password Confirmation =======================
let inputPassword = "abc123";
let actualPassword = "abc123";

let isMatch = inputPassword === actualPassword;
console.log("Passwords match:", isMatch); // Output: true

// ======================= Real-World Case 3: Discount Eligibility =======================
let totalPurchase = 120000;
let discountThreshold = 100000;

let hasDiscount = totalPurchase >= discountThreshold;
console.log("Eligible for discount:", hasDiscount); // Output: true

// ======================= Real-World Case 4: Exam Grading =======================
let score = 85;
let passed = score >= 75;
let gradeA = score >= 90;

console.log("Has passed:", passed); // Output: true
console.log("Is Grade A:", gradeA); // Output: false

// ======================= Advanced Case: Conditional Messaging =======================
let temperature = 30;

if (temperature > 35) {
  console.log("Weather: Too hot!");
} else if (temperature >= 25) {
  console.log("Weather: Warm");
} else {
  console.log("Weather: Cool");
}
// Output: Weather: Warm
