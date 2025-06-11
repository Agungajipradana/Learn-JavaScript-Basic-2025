// ===========================================
// CALLBACK FUNCTIONS IN JAVASCRIPT
// ===========================================

// --------------------------------------------------
// 1. What is a Callback Function?
// --------------------------------------------------
// A callback is a function passed into another function as an argument.

function greet(name, callback) {
  const greeting = `Hello, ${name}!`;
  callback(greeting);
}

greet("Alice", function (message) {
  console.log("Greeting message:", message);
});
// Output:
// Greeting message: Hello, Alice!

// --------------------------------------------------
// 2. Using Named Function as Callback
// --------------------------------------------------
// You can pass a pre-defined function as a callback.

function printMessage(msg) {
  console.log("Received:", msg);
}

function notifyUser(name, callback) {
  const message = `Welcome, ${name}`;
  callback(message);
}

notifyUser("Bob", printMessage);
// Output:
// Received: Welcome, Bob

// --------------------------------------------------
// 3. Callback After Computation
// --------------------------------------------------
// Run a function after some processing is done.

function calculateSum(a, b, callback) {
  const result = a + b;
  callback(result);
}

calculateSum(10, 20, function (sum) {
  console.log("Sum is:", sum);
});
// Output:
// Sum is: 30

// --------------------------------------------------
// 4. Simulating Asynchronous Callback
// --------------------------------------------------
// Simulate delayed operation using setTimeout.

function fetchData(callback) {
  setTimeout(() => {
    const data = { user: "John", age: 30 };
    callback(data);
  }, 1000);
}

fetchData(function (result) {
  console.log("Fetched data:", result);
});
// Output (after 1 second):
// Fetched data: { user: "John", age: 30 }

// --------------------------------------------------
// 5. Array Iteration with Callback
// --------------------------------------------------
// Array methods like forEach accept callbacks.

const fruits = ["apple", "banana", "cherry"];

fruits.forEach(function (fruit, index) {
  console.log(`Fruit ${index + 1}:`, fruit);
});
// Output:
// Fruit 1: apple
// Fruit 2: banana
// Fruit 3: cherry

// --------------------------------------------------
// 6. Sorting with Custom Callback
// --------------------------------------------------
// sort() can use callback to define custom sorting logic.

const numbers = [10, 5, 8, 1, 7];

numbers.sort(function (a, b) {
  return a - b; // Ascending
});

console.log("Sorted numbers:", numbers);
// Output:
// Sorted numbers: [1, 5, 7, 8, 10]

// --------------------------------------------------
// 7. Reusable Callback Handler
// --------------------------------------------------
// Define a handler that works with multiple callbacks.

function handleResponse(status, callback) {
  if (status === "success") {
    callback("Operation succeeded");
  } else {
    callback("Operation failed");
  }
}

handleResponse("success", console.log);
handleResponse("error", console.log);
// Output:
// Operation succeeded
// Operation failed

// --------------------------------------------------
// 8. Real-World Case: Filtering Items
// --------------------------------------------------
// Use callbacks to build flexible filter logic.

function filterItems(items, test) {
  const results = [];
  for (const item of items) {
    if (test(item)) {
      results.push(item);
    }
  }
  return results;
}

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 25 },
  { name: "Monitor", price: 200 },
];

const cheapProducts = filterItems(products, function (item) {
  return item.price < 300;
});

console.log("Cheap products:", cheapProducts);
// Output:
// Cheap products: [
//   { name: 'Mouse', price: 25 },
//   { name: 'Monitor', price: 200 }
// ]

// --------------------------------------------------
// 9. Callback with Error Handling
// --------------------------------------------------
// A common pattern is passing error and result.

function simulateOperation(callback) {
  const isSuccess = Math.random() > 0.3;
  if (isSuccess) {
    callback(null, "Data loaded");
  } else {
    callback("Error: Unable to load data", null);
  }
}

simulateOperation(function (err, data) {
  if (err) {
    console.log("Failure:", err);
  } else {
    console.log("Success:", data);
  }
});
// Output (example):
// Success: Data loaded
// OR
// Failure: Error: Unable to load data

// --------------------------------------------------
// 10. Chaining Callbacks (Callback Hell)
// --------------------------------------------------
// When nesting callbacks becomes deep, it becomes harder to manage.

function step1(cb) {
  console.log("Step 1");
  cb();
}

function step2(cb) {
  console.log("Step 2");
  cb();
}

function step3(cb) {
  console.log("Step 3");
  cb();
}

// Deeply nested structure
step1(() => {
  step2(() => {
    step3(() => {
      console.log("All steps completed.");
    });
  });
});
// Output:
// Step 1
// Step 2
// Step 3
// All steps completed
