// =====================================================
// PROMISES IN JAVASCRIPT EXAMPLES
// =====================================================

// -----------------------------------------------------
// 1. Callback Function Example (Old Way)
// -----------------------------------------------------
function simulateDataFetch(callback) {
  setTimeout(() => {
    callback("Callback: Data received successfully!");
  }, 1000);
}

simulateDataFetch((message) => {
  console.log(message); // Callback: Data received successfully!
});

// -----------------------------------------------------
// 2. Promise Constructor Example
// -----------------------------------------------------
function fetchData() {
  return new Promise((resolve, reject) => {
    const success = true;

    setTimeout(() => {
      if (success) {
        resolve("Promise: Data fetched successfully!");
      } else {
        reject("Promise: Failed to fetch data.");
      }
    }, 1000);
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// -----------------------------------------------------
// 3. Fetch API Example
// -----------------------------------------------------
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Fetch: Network response was not ok");
    }
    return response.json();
  })
  .then((post) => {
    console.log("Fetch: Post title:", post.title);
  })
  .catch((error) => {
    console.error("Fetch: Error occurred:", error);
  });

// -----------------------------------------------------
// 4. Async / Await Example
// -----------------------------------------------------
async function loadUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const user = await response.json();
    console.log("Async/Await: User name:", user.name);
  } catch (err) {
    console.error("Async/Await: Error fetching user:", err);
  }
}

loadUser();

// -----------------------------------------------------
// 5. Promise with Chaining Example
// -----------------------------------------------------
function doubleAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(x * 2), 2000);
  });
}

doubleAfter2Seconds(10)
  .then((result) => {
    console.log("Chained Promise: First result:", result); // 20
    return doubleAfter2Seconds(result);
  })
  .then((result2) => {
    console.log("Chained Promise: Second result:", result2); // 40
  });
