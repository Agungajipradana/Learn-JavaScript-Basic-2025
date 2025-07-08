// =====================================================
// PROMISE CONSTRUCTOR IN JAVASCRIPT
// =====================================================

// -----------------------------------------------------
// 1. Basic Promise Constructor
// -----------------------------------------------------

const basicPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Basic: Operation was successful!");
  } else {
    reject("Basic: Operation failed.");
  }
});

basicPromise
  .then((message) => console.log(message))
  .catch((error) => console.error(error));

// Output:
// Basic: Operation was successful!

// -----------------------------------------------------
// 2. Promise with setTimeout (Simulating Async Operation)
// -----------------------------------------------------

const delayedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Async: Data loaded after delay.");
    } else {
      reject("Async: Failed to load data.");
    }
  }, 1000);
});

delayedPromise
  .then((result) => console.log(result))
  .catch((err) => console.error(err));

// Output (after 1s):
// Async: Data loaded after delay.

// -----------------------------------------------------
// 3. Promise from a Reusable Function
// -----------------------------------------------------

function isEvenNumber(num) {
  return new Promise((resolve, reject) => {
    if (typeof num !== "number") {
      reject("Invalid input: Not a number.");
    } else if (num % 2 === 0) {
      resolve(`${num} is even.`);
    } else {
      reject(`${num} is odd.`);
    }
  });
}

isEvenNumber(8)
  .then((msg) => console.log("Result:", msg))
  .catch((err) => console.error("Error:", err));

// Output:
// Result: 8 is even.

isEvenNumber("text")
  .then((msg) => console.log("Result:", msg))
  .catch((err) => console.error("Error:", err));

// Output:
// Error: Invalid input: Not a number.

// -----------------------------------------------------
// 4. Chaining Promises
// -----------------------------------------------------

function doubleAfterDelay(x) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(x * 2), 500);
  });
}

doubleAfterDelay(10)
  .then((res) => {
    console.log("Step 1:", res); // 20
    return doubleAfterDelay(res);
  })
  .then((res2) => {
    console.log("Step 2:", res2); // 40
    return doubleAfterDelay(res2);
  })
  .then((res3) => {
    console.log("Step 3:", res3); // 80
  });

// Output:
// Step 1: 20
// Step 2: 40
// Step 3: 80

// -----------------------------------------------------
// 5. Realistic Example: Simulated User Login
// -----------------------------------------------------

function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    const mockUser = {
      username: "admin",
      password: "1234",
    };

    setTimeout(() => {
      if (username === mockUser.username && password === mockUser.password) {
        resolve("Login successful.");
      } else {
        reject("Login failed: Invalid credentials.");
      }
    }, 1000);
  });
}

loginUser("admin", "1234")
  .then((msg) => console.log("Login:", msg))
  .catch((err) => console.error("Login:", err));

// Output:
// Login: Login successful.

loginUser("admin", "wrong")
  .then((msg) => console.log("Login:", msg))
  .catch((err) => console.error("Login:", err));

// Output:
// Login: Login failed: Invalid credentials.

// -----------------------------------------------------
// 6. Multiple Promises: Promise.all
// -----------------------------------------------------

const p1 = new Promise((resolve) =>
  setTimeout(() => resolve("Task A complete"), 800)
);
const p2 = new Promise((resolve) =>
  setTimeout(() => resolve("Task B complete"), 1200)
);
const p3 = new Promise((resolve) =>
  setTimeout(() => resolve("Task C complete"), 1000)
);

Promise.all([p1, p2, p3]).then((results) => {
  console.log("All tasks:", results);
});

// Output (after ~1.2s):
// All tasks: ['Task A complete', 'Task B complete', 'Task C complete']

// -----------------------------------------------------
// 7. Competing Promises: Promise.race
// -----------------------------------------------------

const fastTask = new Promise((resolve) =>
  setTimeout(() => resolve("Fastest task wins"), 300)
);
const slowTask = new Promise((resolve) =>
  setTimeout(() => resolve("Slower task"), 1000)
);

Promise.race([fastTask, slowTask]).then((first) => {
  console.log("Winner:", first);
});

// Output (after 0.3s):
// Winner: Fastest task wins
