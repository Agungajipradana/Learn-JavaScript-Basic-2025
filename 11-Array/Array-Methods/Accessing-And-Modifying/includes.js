// ============================================
// ARRAY METHOD: includes()
// ============================================
// The includes() method determines whether an array contains a certain element,
// returning true if it is found, or false otherwise.
// It uses strict equality (===) for comparison.

// Syntax:
// array.includes(searchElement, fromIndex = 0)

// ============================================
// Example 1: Basic Usage
// ============================================
const colors = ["red", "green", "blue"];
const hasRed = colors.includes("red");

console.log("Includes 'red'?", hasRed);
// Output: Includes 'red'? true

// ============================================
// Example 2: Element Not Found
// ============================================
const fruits = ["apple", "banana", "orange"];
const hasMango = fruits.includes("mango");

console.log("Includes 'mango'?", hasMango);
// Output: Includes 'mango'? false

// ============================================
// Example 3: Case Sensitivity
// ============================================
const animals = ["Dog", "Cat", "Rabbit"];
console.log("Includes 'dog'?", animals.includes("dog"));
// Output: Includes 'dog'? false (case-sensitive)
console.log("Includes 'Dog'?", animals.includes("Dog"));
// Output: Includes 'Dog'? true

// ============================================
// Example 4: Start Searching from a Specific Index
// ============================================
const numbers = [1, 2, 3, 4, 2];
console.log("Includes 2 after index 2?", numbers.includes(2, 2));
// Output: Includes 2 after index 2? true

console.log("Includes 2 after index 4?", numbers.includes(2, 4));
// Output: Includes 2 after index 4? true

console.log("Includes 2 after index 5?", numbers.includes(2, 5));
// Output: Includes 2 after index 5? false

// ============================================
// Example 5: Checking if User Has a Role
// ============================================

const userRoles = ["admin", "editor", "viewer"];

function hasRole(roles, roleToCheck) {
  return roles.includes(roleToCheck);
}

console.log("User has 'editor' role?", hasRole(userRoles, "editor"));
// Output: User has 'editor' role? true

console.log("User has 'guest' role?", hasRole(userRoles, "guest"));
// Output: User has 'guest' role? false

// ============================================
// Example 6: Conditional Logic Using includes()
// ============================================

const blockedUsers = ["user1", "user2", "user3"];

const currentUser = "user2";

if (blockedUsers.includes(currentUser)) {
  console.log("Access Denied!");
} else {
  console.log("Access Granted.");
}
// Output: Access Denied!

// ============================================
// Example 7: Using includes() with Numbers
// ============================================

const validIds = [1001, 1002, 1003];

function isValidId(id) {
  return validIds.includes(id);
}

console.log("Is 1002 a valid ID?", isValidId(1002));
// Output: Is 1002 a valid ID? true

console.log("Is 9999 a valid ID?", isValidId(9999));
// Output: Is 9999 a valid ID? false

// ============================================
// Example 8: Using includes() for Filtering Invalid Items
// ============================================

const allowedExtensions = ["jpg", "png", "gif"];
const uploadedFiles = ["image.jpg", "document.pdf", "photo.png"];

const invalidFiles = uploadedFiles.filter((file) => {
  const ext = file.split(".").pop();
  return !allowedExtensions.includes(ext);
});

console.log("Invalid Files:", invalidFiles);
// Output: Invalid Files: [ 'document.pdf' ]

// ============================================
// Example 9: Using includes() with Boolean Values
// ============================================

const features = [true, false, true];
console.log("Includes true?", features.includes(true));
// Output: Includes true? true

console.log("Includes false?", features.includes(false));
// Output: Includes false? true

// ============================================
// Example 10: Edge Case – includes() with NaN
// ============================================

const values = [1, 2, NaN];
console.log("Includes NaN?", values.includes(NaN));
// Output: Includes NaN? true
