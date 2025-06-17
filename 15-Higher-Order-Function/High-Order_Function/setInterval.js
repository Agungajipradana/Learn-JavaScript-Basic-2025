// =====================================================
// HOF: setInterval IN JAVASCRIPT
// =====================================================

// -----------------------------------------------------
// 1. What is setInterval?
// -----------------------------------------------------
// setInterval is a built-in High Order Function in JavaScript
// that repeatedly calls a function at a specified interval (in milliseconds).

// Syntax:
// setInterval(callbackFunction, intervalInMilliseconds);

// -----------------------------------------------------
// 2. Basic Example
// -----------------------------------------------------

let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log("Count:", count);

  if (count === 3) {
    clearInterval(intervalId);
    console.log("Stopped after 3 times");
  }
}, 1000);

// Output:
// Count: 1
// Count: 2
// Count: 3
// Stopped after 3 times

// -----------------------------------------------------
// 3. Named Function in setInterval
// -----------------------------------------------------

function showTime() {
  const now = new Date();
  console.log("Current time:", now.toLocaleTimeString());
}

const clock = setInterval(showTime, 2000);

// Stop the clock after 6 seconds
setTimeout(() => {
  clearInterval(clock);
  console.log("Clock stopped");
}, 6000);

// Output (example):
// Current time: 10:00:01
// Current time: 10:00:03
// Current time: 10:00:05
// Clock stopped

// -----------------------------------------------------
// 4. Dynamic Message Logger
// -----------------------------------------------------

function logMessages(messages, interval) {
  let index = 0;

  const id = setInterval(() => {
    if (index >= messages.length) {
      clearInterval(id);
      console.log("Finished logging all messages.");
      return;
    }

    console.log("Message:", messages[index]);
    index++;
  }, interval);
}

logMessages(["Connecting...", "Downloading...", "Completed!"], 1000);

// Output:
// Message: Connecting...
// Message: Downloading...
// Message: Completed!
// Finished logging all messages.

// -----------------------------------------------------
// 5. Progress Bar Simulation
// -----------------------------------------------------

function simulateProgressBar(duration) {
  let progress = 0;
  const increment = 10;

  const progressInterval = setInterval(() => {
    progress += increment;
    console.log(`Progress: ${progress}%`);

    if (progress >= 100) {
      clearInterval(progressInterval);
      console.log("Upload complete!");
    }
  }, duration / (100 / increment));
}

simulateProgressBar(2000); // 2 seconds total

// Output:
// Progress: 10%
// ...
// Progress: 100%
// Upload complete!

// -----------------------------------------------------
// 6. Live Counter with Stop Button Simulation
// -----------------------------------------------------

let liveCount = 0;
const liveInterval = setInterval(() => {
  liveCount++;
  console.log("Live count:", liveCount);
}, 1000);

// Simulate user clicking a "Stop" button after 5 seconds
setTimeout(() => {
  clearInterval(liveInterval);
  console.log("User stopped the live counter.");
}, 5000);

// Output:
// Live count: 1
// Live count: 2
// ...
// Live count: 5
// User stopped the live counter.

// -----------------------------------------------------
// 7. Use Case: Server Health Checker
// -----------------------------------------------------

function checkServerStatus() {
  const servers = ["API-1", "API-2", "DB"];

  servers.forEach((server) => {
    const status = Math.random() > 0.2 ? "✅ UP" : "❌ DOWN";
    console.log(`[${server}] status: ${status}`);
  });
  console.log("------");
}

const healthCheck = setInterval(checkServerStatus, 3000);

// Stop checking after 10 seconds
setTimeout(() => {
  clearInterval(healthCheck);
  console.log("Stopped server monitoring.");
}, 10000);

// Output every 3s:
// [API-1] status: ✅ UP
// [API-2] status: ❌ DOWN
// [DB] status: ✅ UP
// ------
// ...
// Stopped server monitoring.

// -----------------------------------------------------
// 8. Summary: When to Use setInterval
// -----------------------------------------------------
/*
✔ Use setInterval when:
  - You need to perform a task repeatedly at fixed intervals
  - You want to poll APIs or data periodically
  - You simulate real-time updates (counters, clocks, animations)

✖ Don't forget to clear it with clearInterval when stopping is needed
✖ Don't use setInterval if you need precise execution timing → use setTimeout loop
*/

// -----------------------------------------------------
// 9. Final Notes
// -----------------------------------------------------
/*
- setInterval is asynchronous; multiple intervals can run simultaneously
- Works well for periodic UI updates, real-time monitoring, and background polling
- Use clearInterval to manage memory and avoid unwanted behavior
*/
