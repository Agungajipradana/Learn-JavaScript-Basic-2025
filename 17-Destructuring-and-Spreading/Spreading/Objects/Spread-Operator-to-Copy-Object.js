// =====================================================
// SPREAD OPERATOR TO COPY OBJECT IN JAVASCRIPT
// =====================================================

// =========================================
// 1. Basic Object Copy Using Spread Operator
// =========================================
const original = { name: "john", age: 30 };
const copy = { ...original };
console.log(copy);
// Output: { name: 'john', age: 30 }

// =========================================
// 2. Verifying Independent Copy (Shallow Copy)
// =========================================
copy.age = 35;
console.log("Original:", original); // { name: 'john', age: 30 }
console.log("Copy:", copy); // { name: 'john', age: 35 }
// Changes in 'copy' do not affect 'original'

// =========================================
// 3. Copying Object with Nested Structures
// =========================================
const user = {
  name: "john",
  contact: {
    email: "john@example.com",
  },
};

const clonedUser = { ...user };
clonedUser.contact.email = "johnny@example.com";
console.log(user.contact.email); // 'johnny@example.com'
console.log(clonedUser.contact.email); // 'johnny@example.com'
// Note: Spread only creates a shallow copy (nested objects are still shared)

// =========================================
// 4. Real-World Case: Resetting Object to Defaults
// =========================================
const defaultSettings = {
  theme: "light",
  notifications: true,
};

let userSettings = { ...defaultSettings };
userSettings.theme = "dark";
console.log("User Settings:", userSettings); // { theme: 'dark', notifications: true }
console.log("Default Settings:", defaultSettings); // { theme: 'light', notifications: true }

// Reset to default
userSettings = { ...defaultSettings };
console.log("Reset Settings:", userSettings); // { theme: 'light', notifications: true }

// =========================================
// 5. Copy and Extend Object at the Same Time
// =========================================
const baseProfile = { name: "john" };
const fullProfile = { ...baseProfile, age: 32, country: "USA" };
console.log(fullProfile);
// Output: { name: 'john', age: 32, country: 'USA' }

// =========================================
// 6. Copying and Updating Object Properties
// =========================================
const student = {
  id: 1001,
  name: "john",
  grade: "B",
};

const updatedStudent = { ...student, grade: "A" };
console.log(updatedStudent);
// Output: { id: 1001, name: 'john', grade: 'A' }

// =========================================
// 7. Spread for Object Immutability in Functions
// =========================================
function updateUserInfo(user, changes) {
  return { ...user, ...changes };
}

const existingUser = { name: "john", age: 30 };
const modifiedUser = updateUserInfo(existingUser, { age: 31 });
console.log(modifiedUser);
// Output: { name: 'john', age: 31 }
console.log(existingUser);
// Output: { name: 'john', age: 30 } (original remains unchanged)
