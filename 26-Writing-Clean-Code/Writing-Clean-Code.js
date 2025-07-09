// =====================================================
// CLEAN CODE IN JAVASCRIPT EXAMPLES
// =====================================================

// -----------------------------------------------------
// 1. Meaningful Variable & Function Names
// -----------------------------------------------------
function isUserAuthenticated(user) {
  return user && user.token !== undefined;
}

const user = { name: "John", token: "abc123" };
console.log("[Clean Code] Authenticated:", isUserAuthenticated(user)); // true

// -----------------------------------------------------
// 2. Small & Focused Functions
// -----------------------------------------------------
function calculateArea(width, height) {
  return width * height;
}

function printArea(width, height) {
  const area = calculateArea(width, height);
  console.log("[Clean Code] Area:", area);
}

printArea(5, 10); // 50

// -----------------------------------------------------
// 3. Avoid Deep Nesting
// -----------------------------------------------------
function canEdit(user) {
  if (!user) return false;
  if (!user.role) return false;
  return user.role === "admin";
}

console.log("[Clean Code] Can Edit:", canEdit({ role: "admin" })); // true

// -----------------------------------------------------
// 4. Use Destructuring
// -----------------------------------------------------
const person = {
  name: "Alice",
  age: 28,
  city: "New York",
};

function displayPersonInfo({ name, age, city }) {
  console.log(`[Clean Code] ${name} is ${age} years old and lives in ${city}.`);
}

displayPersonInfo(person); // Alice is 28 years old and lives in New York.

// -----------------------------------------------------
// 5. Use Template Literals
// -----------------------------------------------------
function greet(name) {
  return `Hello, ${name}`;
}

console.log("[Clean Code] Greet:", greet("Daniel")); // Hello, Daniel

// -----------------------------------------------------
// 6. DRY Principle (Don't Repeat Yourself)
// -----------------------------------------------------
function getProperty(obj, prop) {
  return obj[prop];
}

const product = { name: "Laptop", price: 1000 };
console.log("[Clean Code] Product Name:", getProperty(product, "name")); // Laptop
console.log("[Clean Code] Product Price:", getProperty(product, "price")); // 1000

// -----------------------------------------------------
// 7. JSDoc for Documentation
// -----------------------------------------------------

/**
 * Converts Celsius to Fahrenheit.
 * @param {number} celsius
 * @returns {number}
 */
function convertToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log("[Clean Code] 0°C to F:", convertToFahrenheit(0)); // 32

// -----------------------------------------------------
// 8. Clean Asynchronous Loop (with let)
// -----------------------------------------------------
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("[Clean Code] Async i:", i);
  }, 500);
}
// Output: 0, 1, 2

// -----------------------------------------------------
// 9. Data Encapsulation using Closures
// -----------------------------------------------------
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: function (amount) {
      balance += amount;
      return balance;
    },
    withdraw: function (amount) {
      if (amount > balance) return "Insufficient funds";
      balance -= amount;
      return balance;
    },
    getBalance: function () {
      return balance;
    },
  };
}

const account = createBankAccount(100);
console.log("[Clean Code] Deposit 50:", account.deposit(50)); // 150
console.log("[Clean Code] Withdraw 30:", account.withdraw(30)); // 120
console.log("[Clean Code] Get Balance:", account.getBalance()); // 120
