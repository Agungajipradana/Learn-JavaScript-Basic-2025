// ============================================
// ARRAY METHOD: some()
// ============================================
// The some() method tests whether AT LEAST ONE element in the array
// passes the test implemented by the provided function.

// It returns true if the callback returns a truthy value for ANY element.
// Otherwise, it returns false.

// ============================================
// Syntax:
// array.some(callback(currentValue, index, array))
// ============================================

// --------------------------------------------
// Example 1: Check if array has at least one even number
// --------------------------------------------

const numbers = [1, 3, 5, 7, 8];

const hasEven = numbers.some((num) => num % 2 === 0);

console.log("Contains even number:", hasEven);
// Output: true

// --------------------------------------------
// Example 2: Check if array contains a specific value
// --------------------------------------------

const fruits = ["apple", "banana", "mango"];

const containsMango = fruits.some((fruit) => fruit === "mango");

console.log("Contains 'mango':", containsMango);
// Output: true

// --------------------------------------------
// Example 3: Check if any user is an admin
// --------------------------------------------

const users = [
  { name: "Alice", role: "user" },
  { name: "Bob", role: "moderator" },
  { name: "Charlie", role: "admin" },
];

const hasAdmin = users.some((user) => user.role === "admin");

console.log("Has admin user:", hasAdmin);
// Output: true

// --------------------------------------------
// Example 4: Validate if any field is empty
// --------------------------------------------

const formFields = ["John Doe", "", "john@example.com"];

const hasEmptyField = formFields.some((field) => field.trim() === "");

console.log("Form has empty fields:", hasEmptyField);
// Output: true

// --------------------------------------------
// Example 5: Check if any product is out of stock
// --------------------------------------------

const products = [
  { id: 1, name: "Laptop", inStock: true },
  { id: 2, name: "Keyboard", inStock: true },
  { id: 3, name: "Mouse", inStock: false },
];

const anyOutOfStock = products.some((product) => !product.inStock);

console.log("Any product out of stock:", anyOutOfStock);
// Output: true

// --------------------------------------------
// Example 6: Check if a string contains any vowel
// --------------------------------------------

const text = "bcdfghjkl";

const vowels = ["a", "e", "i", "o", "u"];

const containsVowel = vowels.some((vowel) => text.includes(vowel));

console.log("Text contains a vowel:", containsVowel);
// Output: false

// --------------------------------------------
// Example 7: Check if some numbers are negative
// --------------------------------------------

const data = [10, 15, -2, 20];

const hasNegative = data.some((num) => num < 0);

console.log("Array contains negative number:", hasNegative);
// Output: true

// --------------------------------------------
// Example 8: Case-insensitive check for email
// --------------------------------------------

const emailList = ["user@example.com", "admin@site.com"];

const searchEmail = "Admin@site.com";

const emailExists = emailList.some(
  (email) => email.toLowerCase() === searchEmail.toLowerCase()
);

console.log("Email exists (case-insensitive):", emailExists);
// Output: true

// --------------------------------------------
// Example 9: Real-world usage: Blocking restricted usernames
// --------------------------------------------

const restrictedNames = ["admin", "root", "superuser"];

const newUsername = "Admin";

const isRestricted = restrictedNames.some(
  (name) => name.toLowerCase() === newUsername.toLowerCase()
);

console.log("Username is restricted:", isRestricted);
// Output: true

// --------------------------------------------
// Example 10: Difference between some() and every()
// --------------------------------------------

const values = [1, 2, 3, 4, 5];

const someGreaterThanThree = values.some((v) => v > 3); // true
const allGreaterThanThree = values.every((v) => v > 3); // false

console.log("Some > 3:", someGreaterThanThree); // Output: true
console.log("All > 3:", allGreaterThanThree); // Output: false
