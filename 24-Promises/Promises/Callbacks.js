// =====================================================
// CALLBACKS IN JAVASCRIPT 
// =====================================================

// -----------------------------------------------------
// 1. Basic Callback Example
// -----------------------------------------------------

function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function afterGreet() {
  console.log("This is a callback function.");
}

greet("David", afterGreet);

// Output:
// Hello, David
// This is a callback function.

// -----------------------------------------------------
// 2. Callback with Parameters
// -----------------------------------------------------

function add(a, b, callback) {
  const result = a + b;
  callback(result);
}

add(5, 7, function (sum) {
  console.log("The sum is:", sum);
});

// Output:
// The sum is: 12

// -----------------------------------------------------
// 3. Simulating Asynchronous Task (setTimeout)
// -----------------------------------------------------

function fetchData(callback) {
  console.log("Fetching data...");

  setTimeout(() => {
    const data = { name: "Alice", age: 25 };
    callback(data);
  }, 1500);
}

fetchData((user) => {
  console.log("Data received:", user);
});

// Output:
// Fetching data...
// (after 1.5s) Data received: { name: 'Alice', age: 25 }

// -----------------------------------------------------
// 4. Nested Callbacks (Callback Hell)
// -----------------------------------------------------

function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 complete.");
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 complete.");
    callback();
  }, 1000);
}

function step3(callback) {
  setTimeout(() => {
    console.log("Step 3 complete.");
    callback();
  }, 1000);
}

// Executing steps in sequence using nested callbacks
step1(() => {
  step2(() => {
    step3(() => {
      console.log("All steps completed.");
    });
  });
});

// Output:
// (after 1s) Step 1 complete.
// (after 2s) Step 2 complete.
// (after 3s) Step 3 complete.
// All steps completed.

// -----------------------------------------------------
// 5. Error Handling in Callbacks
// -----------------------------------------------------

function divide(a, b, callback) {
  if (b === 0) {
    callback("Error: Division by zero.", null);
  } else {
    const result = a / b;
    callback(null, result);
  }
}

divide(10, 2, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Result:", result);
  }
});

// Output:
// Result: 5

divide(10, 0, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Result:", result);
  }
});

// Output:
// Error: Division by zero.

// -----------------------------------------------------
// 6. Realistic Use Case: Simulated Login System
// -----------------------------------------------------

function login(username, password, callback) {
  setTimeout(() => {
    const dbUser = { username: "admin", password: "1234" };

    if (username === dbUser.username && password === dbUser.password) {
      callback(null, "Login successful!");
    } else {
      callback("Login failed: Invalid credentials", null);
    }
  }, 1000);
}

login("admin", "1234", (err, message) => {
  if (err) {
    console.error(err);
  } else {
    console.log(message);
  }
});

// Output:
// (after 1s) Login successful!

login("user", "wrongpass", (err, message) => {
  if (err) {
    console.error(err);
  } else {
    console.log(message);
  }
});

// Output:
// (after 1s) Login failed: Invalid credentials
