// ============================================
// ARRAY METHOD: shift()
// ============================================
// The shift() method removes the first element from an array
// and returns that removed element.
// This method modifies the original array by reducing its length by one.

// ============================================
// Example 1: Basic Usage
// ============================================
const colors = ["red", "green", "blue"];
const firstColor = colors.shift();

console.log("Removed:", firstColor);
// Output: Removed: red

console.log("Remaining Colors:", colors);
// Output: Remaining Colors: [ 'green', 'blue' ]

// ============================================
// Example 2: Shift from Empty Array
// ============================================
const emptyArray = [];
const removed = emptyArray.shift();

console.log("Removed from empty:", removed);
// Output: Removed from empty: undefined

console.log("Array after shift:", emptyArray);
// Output: Array after shift: []

// ============================================
// Example 3: Using shift() in a Function
// ============================================
function processNextTask(tasks) {
  const next = tasks.shift();
  console.log("Processing task:", next);
  return tasks;
}

let taskQueue = ["Send email", "Backup data", "Generate report"];
taskQueue = processNextTask(taskQueue);
// Output: Processing task: Send email

console.log("Remaining Tasks:", taskQueue);
// Output: Remaining Tasks: [ 'Backup data', 'Generate report' ]

// ============================================
// Example 4: Simulating a Simple Queue System (FIFO)
// ============================================

const messageQueue = [];

messageQueue.push("Message A");
messageQueue.push("Message B");
messageQueue.push("Message C");

console.log("Initial Queue:", messageQueue);
// Output: Initial Queue: [ 'Message A', 'Message B', 'Message C' ]

const firstMessage = messageQueue.shift();
console.log("Delivered:", firstMessage);
// Output: Delivered: Message A

console.log("Queue after delivery:", messageQueue);
// Output: Queue after delivery: [ 'Message B', 'Message C' ]

// ============================================
// Example 5: Processing User Requests
// ============================================

let requests = ["Request 1", "Request 2", "Request 3"];

function handleRequest(queue) {
  if (queue.length > 0) {
    const req = queue.shift();
    console.log(`Handling: ${req}`);
  } else {
    console.log("No more requests to handle.");
  }
}

handleRequest(requests);
// Output: Handling: Request 1
handleRequest([]);
// Output: No more requests to handle.

console.log("Remaining Requests:", requests);
// Output: Remaining Requests: [ 'Request 2', 'Request 3' ]

// ============================================
// Example 6: Realistic Scenario – Processing Notifications
// ============================================

const notifications = [
  "You have a meeting at 10am",
  "Your download is complete",
  "New message from John",
];

function processNotification() {
  const note = notifications.shift();
  if (note) {
    console.log(`🔔 Notification: ${note}`);
  } else {
    console.log("No notifications.");
  }
}

processNotification();
// Output: 🔔 Notification: You have a meeting at 10am
processNotification();
// Output: 🔔 Notification: Your download is complete

console.log("Pending Notifications:", notifications);
// Output: Pending Notifications: [ 'New message from John' ]

// ============================================
// Example 7: Logging Removed Values for Audit
// ============================================

let auditQueue = ["Login event", "Update profile", "Delete account"];
let auditLog = [];

function processAudit() {
  const event = auditQueue.shift();
  if (event) {
    auditLog.push(`Processed: ${event}`);
  }
}

processAudit();
processAudit();

console.log("Remaining Audit Queue:", auditQueue);
// Output: Remaining Audit Queue: [ 'Delete account' ]

console.log("Audit Log:", auditLog);
// Output: Audit Log: [ 'Processed: Login event', 'Processed: Update profile' ]
