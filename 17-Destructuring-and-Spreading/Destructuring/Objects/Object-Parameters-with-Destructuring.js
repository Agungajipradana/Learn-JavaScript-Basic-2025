// =====================================================
// OBJECT PARAMETERS WITH DESTRUCTURING IN JAVASCRIPT
// =====================================================

// =========================================
// 1. Basic Object Destructuring in Function Parameters
// =========================================
function greetUser({ name, age }) {
  console.log(`Hello, ${name}. You are ${age} years old.`);
}

greetUser({ name: "john", age: 30 });
// Output:
// Hello, john. You are 30 years old.

// =========================================
// 2. Destructuring with Default Values
// =========================================
function showProduct({ title, price = 100 }) {
  console.log(`Product: ${title}, Price: $${price}`);
}

showProduct({ title: "Laptop" });
// Output:
// Product: Laptop, Price: $100

// =========================================
// 3. Renaming Variables while Destructuring
// =========================================
function printUser({ name: fullName, age: userAge }) {
  console.log(`Name: ${fullName}, Age: ${userAge}`);
}

printUser({ name: "john", age: 28 });
// Output:
// Name: john, Age: 28

// =========================================
// 4. Nested Object Destructuring in Function Parameters
// =========================================
function displayContact({ info: { email, phone } }) {
  console.log(`Email: ${email}, Phone: ${phone}`);
}

displayContact({ info: { email: "john@example.com", phone: "123-456-7890" } });
// Output:
// Email: john@example.com, Phone: 123-456-7890

// =========================================
// 5. Destructuring with Rest Operator
// =========================================
function printUserInfo({ name, ...rest }) {
  console.log(`Name: ${name}`);
  console.log("Other Info:", rest);
}

printUserInfo({ name: "john", role: "admin", active: true });
// Output:
// Name: john
// Other Info: { role: 'admin', active: true }

// =========================================
// 6. Real-World Case: Handling API Response
// =========================================
function handleResponse({ status, data: { userId, userName } }) {
  console.log(`Status: ${status}, User: ${userName} (ID: ${userId})`);
}

handleResponse({
  status: 200,
  data: {
    userId: 9,
    userName: "johnny",
  },
});
// Output:
// Status: 200, User: johnny (ID: 9)

// =========================================
// 7. Real-World Case: Config Initialization
// =========================================
function initApp({ theme = "light", layout = "grid" }) {
  console.log(`Initializing app with ${theme} theme and ${layout} layout.`);
}

initApp({ theme: "dark" });
// Output:
// Initializing app with dark theme and grid layout.
