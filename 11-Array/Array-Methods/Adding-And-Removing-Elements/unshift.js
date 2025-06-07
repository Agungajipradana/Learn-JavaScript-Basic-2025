// ============================================
// ARRAY METHOD: unshift()
// ============================================
// The unshift() method adds one or more elements to the beginning of an array
// and returns the new length of the array.
// It modifies the original array by prepending the given values.

// ============================================
// Example 1: Basic Usage
// ============================================
const colors = ["green", "blue"];
const newLength = colors.unshift("red");

console.log("Updated Colors:", colors);
// Output: Updated Colors: [ 'red', 'green', 'blue' ]
console.log("New Length:", newLength);
// Output: New Length: 3

// ============================================
// Example 2: Adding Multiple Elements
// ============================================
const fruits = ["banana", "orange"];
fruits.unshift("apple", "grape");

console.log("Fruits:", fruits);
// Output: Fruits: [ 'apple', 'grape', 'banana', 'orange' ]

// ============================================
// Example 3: Adding Elements in a Loop
// ============================================
const numbers = [];

for (let i = 1; i <= 3; i++) {
  numbers.unshift(i); // Inserts in reverse order
}
console.log("Numbers:", numbers);
// Output: Numbers: [ 3, 2, 1 ]

// ============================================
// Example 4: Using unshift() in a Function
// ============================================

function prependLog(logs, message) {
  logs.unshift(message);
  return logs;
}

let logs = ["System started", "User logged in"];
logs = prependLog(logs, "Error: Something went wrong");

console.log("Logs:", logs);
// Output: Logs: [ 'Error: Something went wrong', 'System started', 'User logged in' ]

// ============================================
// Example 5: Using unshift() to Simulate a Queue with Priority
// ============================================

const queue = ["Job2", "Job3"];

function addPriorityJob(jobName) {
  queue.unshift(jobName); // Add at the front of the queue
}

addPriorityJob("UrgentJob1");

console.log("Job Queue:", queue);
// Output: Job Queue: [ 'UrgentJob1', 'Job2', 'Job3' ]

// ============================================
// Example 6: Adding to Front of Notifications List
// ============================================

const notifications = ["Welcome!", "You have 1 message"];

function addNotification(message) {
  notifications.unshift(`[New] ${message}`);
}

addNotification("Your report is ready");
addNotification("System update available");

console.log("Notifications:", notifications);
/* Output:
Notifications: [
  '[New] System update available',
  '[New] Your report is ready',
  'Welcome!',
  'You have 1 message'
]
*/

// ============================================
// Example 7: Tracking User Activity from Most Recent
// ============================================

let activityLog = [];

function logActivity(action) {
  const timestamp = new Date().toISOString();
  activityLog.unshift({ action, timestamp });
}

logActivity("Logged In");
logActivity("Opened Dashboard");
logActivity("Downloaded Report");

console.log("Activity Log:", activityLog);
/* Output:
Activity Log: [
  { action: 'Downloaded Report', timestamp: '...' },
  { action: 'Opened Dashboard', timestamp: '...' },
  { action: 'Logged In', timestamp: '...' }
]
*/
