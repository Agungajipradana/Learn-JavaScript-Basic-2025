// =====================================================
// OBJECT PARAMETERS WITHOUT DESTRUCTURING IN JAVASCRIPT
// =====================================================

// =========================================
// 1. Basic Function Receiving Object as Parameter
// =========================================
const user = {
  name: "john",
  age: 30,
};

function greetUser(user) {
  console.log(`Hello, ${user.name}. You are ${user.age} years old.`);
}

greetUser(user);
// Output:
// Hello, john. You are 30 years old.

// =========================================
// 2. Accessing Nested Object Properties
// =========================================
const employee = {
  id: 1,
  details: {
    name: "john",
    department: "engineering",
  },
};

function printEmployeeInfo(emp) {
  console.log(
    `Employee ${emp.id} works in ${emp.details.department} department.`
  );
}

printEmployeeInfo(employee);
// Output:
// Employee 1 works in engineering department.

// =========================================
// 3. Passing Object with Optional Properties
// =========================================
const product = {
  title: "Smartphone",
  price: 800,
};

function showProduct(product) {
  const discount = product.discount || 0;
  console.log(
    `Product: ${product.title}, Price: $${product.price}, Discount: ${discount}%`
  );
}

showProduct(product);
// Output:
// Product: Smartphone, Price: $800, Discount: 0%

// =========================================
// 4. Modifying Object Inside Function
// =========================================
const settings = {
  theme: "light",
  notifications: true,
};

function updateSettings(config) {
  config.theme = "dark";
  config.notifications = false;
}

updateSettings(settings);
console.log(settings);
// Output:
// { theme: 'dark', notifications: false }

// =========================================
// 5. Real-World Case: Logging User Activity
// =========================================
const activityLog = {
  userId: 101,
  action: "login",
  timestamp: "2025-06-24T20:30:00Z",
};

function logActivity(log) {
  console.log(`User ${log.userId} performed ${log.action} at ${log.timestamp}`);
}

logActivity(activityLog);
// Output:
// User 101 performed login at 2025-06-24T20:30:00Z

// =========================================
// 6. Real-World Case: Saving Form Data
// =========================================
const formData = {
  username: "john_doe",
  email: "john@example.com",
  password: "secret123",
};

function saveForm(data) {
  console.log(`Saving form for user: ${data.username}, Email: ${data.email}`);
  // Note: Password would typically not be logged in real apps
}

saveForm(formData);
// Output:
// Saving form for user: john_doe, Email: john@example.com
