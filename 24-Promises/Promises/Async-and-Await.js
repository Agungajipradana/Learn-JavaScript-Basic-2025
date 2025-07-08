// =====================================================
// ASYNC AND AWAIT IN JAVASCRIPT
// =====================================================

// -----------------------------------------------------
// 1. Basic Async Function
// -----------------------------------------------------

async function sayHello() {
  return "Hello, world!";
}

sayHello().then((msg) => console.log("Basic:", msg));

// Output:
// Basic: Hello, world!

// -----------------------------------------------------
// 2. Using Await to Wait for a Promise
// -----------------------------------------------------

function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Waited 1 second.");
    }, 1000);
  });
}

async function runWait() {
  const result = await waitOneSecond();
  console.log("Await Result:", result);
}

runWait();

// Output (after 1s):
// Await Result: Waited 1 second.

// -----------------------------------------------------
// 3. Fetching Data Using Async/Await
// -----------------------------------------------------

async function fetchPost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const post = await response.json();
    console.log("Fetch Post - Title:", post.title);
  } catch (error) {
    console.error("Fetch Post - Error:", error.message);
  }
}

fetchPost();

// Output:
// Fetch Post - Title: sunt aut facere repellat ...

// -----------------------------------------------------
// 4. Using Multiple Awaits Sequentially
// -----------------------------------------------------

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runSteps() {
  console.log("Step 1: Start");
  await delay(1000);
  console.log("Step 2: After 1 second");
  await delay(1000);
  console.log("Step 3: After another 1 second");
}

runSteps();

// Output:
// Step 1: Start
// (after 1s) Step 2: After 1 second
// (after another 1s) Step 3: After another 1 second

// -----------------------------------------------------
// 5. Error Handling with Try...Catch
// -----------------------------------------------------

async function fetchInvalid() {
  try {
    const response = await fetch("https://invalid-url-example.com/data");
    const data = await response.json();
    console.log("Invalid Data:", data);
  } catch (error) {
    console.error("Fetch Error:", error.message);
  }
}

fetchInvalid();

// Output:
// Fetch Error: Failed to fetch (or similar network error)

// -----------------------------------------------------
// 6. Real-World Example: Simulated Login with Async
// -----------------------------------------------------

function mockLogin(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        resolve({ status: "success", token: "abc123" });
      } else {
        reject("Login failed: Invalid credentials.");
      }
    }, 1000);
  });
}

async function loginUser(username, password) {
  try {
    const result = await mockLogin(username, password);
    console.log("Login Success:", result);
  } catch (err) {
    console.error("Login Error:", err);
  }
}

loginUser("admin", "1234"); // Success
loginUser("user", "wrong"); // Error

// Output:
// (after 1s) Login Success: { status: 'success', token: 'abc123' }
// (after 1s) Login Error: Login failed: Invalid credentials.

// -----------------------------------------------------
// 7. Using Async/Await with Loop
// -----------------------------------------------------

const users = [1, 2, 3];

async function fetchUsers() {
  for (const id of users) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();
    console.log(`User ${id}:`, user.name);
  }
}

fetchUsers();

// Output:
// User 1: Leanne Graham
// User 2: Ervin Howell
// User 3: Clementine Bauch

// -----------------------------------------------------
// 8. Parallel Execution Using Promise.all with Async/Await
// -----------------------------------------------------

async function fetchMultiplePosts() {
  const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3",
  ];

  try {
    const promises = urls.map((url) => fetch(url).then((res) => res.json()));
    const results = await Promise.all(promises);
    results.forEach((post, index) => {
      console.log(`Post ${index + 1} - Title:`, post.title);
    });
  } catch (err) {
    console.error("Parallel Fetch Error:", err.message);
  }
}

fetchMultiplePosts();

// Output:
// Post 1 - Title: ...
// Post 2 - Title: ...
// Post 3 - Title: ...
