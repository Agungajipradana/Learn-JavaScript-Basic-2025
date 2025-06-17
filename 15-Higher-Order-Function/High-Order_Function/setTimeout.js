// =====================================================
// HOF: setTimeout IN JAVASCRIPT
// =====================================================

// -----------------------------------------------------
// 1. What is setTimeout?
// -----------------------------------------------------
// setTimeout is a built-in High Order Function in JavaScript
// that allows you to execute a function once after a specified delay (in milliseconds).

// Syntax:
// setTimeout(callbackFunction, delayInMilliseconds);

// -----------------------------------------------------
// 2. Basic Example
// -----------------------------------------------------

console.log("Start");

setTimeout(function () {
  console.log("Executed after 1000ms (1 second)");
}, 1000);

console.log("End");

// Output:
// Start
// End
// (after 1 second)
// Executed after 1000ms (1 second)

// -----------------------------------------------------
// 3. Named Function as Callback
// -----------------------------------------------------

function sayHello() {
  console.log("Hello after delay!");
}

setTimeout(sayHello, 1500);
// Output (after 1.5 seconds):
// Hello after delay!

// -----------------------------------------------------
// 4. Passing Parameters to Callback
// -----------------------------------------------------

function greet(name) {
  console.log(`Hello, ${name}`);
}

setTimeout(greet, 2000, "Alice");
// Output (after 2 seconds):
// Hello, Alice

// -----------------------------------------------------
// 5. Cancel a setTimeout with clearTimeout
// -----------------------------------------------------

const timeoutId = setTimeout(() => {
  console.log("This will not be shown.");
}, 3000);

clearTimeout(timeoutId);

// Output:
// (nothing, because timeout is cancelled)

// -----------------------------------------------------
// 6. Repeated Delay Chain with setTimeout
// -----------------------------------------------------
// Useful for recursive delays without setInterval

function countDown(n) {
  if (n <= 0) {
    console.log("Liftoff!");
    return;
  }
  console.log("T-minus", n);
  setTimeout(() => countDown(n - 1), 1000);
}

countDown(3);
// Output:
// T-minus 3
// T-minus 2
// T-minus 1
// Liftoff!

// -----------------------------------------------------
// 7. Use Case: Simulate Delayed API Call
// -----------------------------------------------------

function fetchData() {
  console.log("Fetching data...");
  setTimeout(() => {
    console.log("Data received!");
  }, 2000);
}

fetchData();
// Output:
// Fetching data...
// (after 2 seconds)
// Data received!

// -----------------------------------------------------
// 8. Case: Queue Multiple Tasks with Delay
// -----------------------------------------------------

const tasks = ["Task 1", "Task 2", "Task 3"];

tasks.forEach((task, index) => {
  setTimeout(() => {
    console.log(`Executing: ${task}`);
  }, index * 1000);
});
// Output:
// Executing: Task 1 (after 0s)
// Executing: Task 2 (after 1s)
// Executing: Task 3 (after 2s)

// -----------------------------------------------------
// 9. Dynamic Delay Based on Input
// -----------------------------------------------------

function notify(message, delay) {
  setTimeout(() => {
    console.log(`Notification: ${message}`);
  }, delay);
}

notify("File uploaded", 3000); // Output after 3s: Notification: File uploaded
notify("Email sent", 1000); // Output after 1s: Notification: Email sent

// -----------------------------------------------------
// 10. setTimeout Inside Loop (with Closure Fix)
// -----------------------------------------------------

for (var i = 1; i <= 3; i++) {
  (function (index) {
    setTimeout(() => {
      console.log("Index:", index);
    }, index * 1000);
  })(i);
}
// Output:
// Index: 1 (after 1s)
// Index: 2 (after 2s)
// Index: 3 (after 3s)

// -----------------------------------------------------
// 11. Summary: When to Use setTimeout
// -----------------------------------------------------
/*
✔ Use setTimeout when:
  - You want to delay the execution of a function
  - You want to simulate async behavior
  - You need to schedule a one-time task
  - You need to chain tasks with delays

✖ Don't use setTimeout for repeated actions → Use setInterval instead
✔ Use clearTimeout if cancellation is needed
*/

// -----------------------------------------------------
// 12. Final Notes
// -----------------------------------------------------
/*
- setTimeout is a core asynchronous feature of JavaScript.
- It helps simulate real-world waiting behavior like loading, notifications, etc.
- It’s a classic example of callback-based async execution.
*/
