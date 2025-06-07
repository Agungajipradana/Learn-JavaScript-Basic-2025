// ============================================
// ARRAY METHOD: push()
// ============================================
// The push() method adds one or more elements to the end of an array
// and returns the new length of the array.

// ============================================
// Example 1: Basic Usage
// ============================================
const fruits = ["apple", "banana"];
const newLength = fruits.push("orange");

console.log("Fruits:", fruits);
// Output: Fruits: [ 'apple', 'banana', 'orange' ]

console.log("New Length:", newLength);
// Output: New Length: 3

// ============================================
// Example 2: Pushing Multiple Elements
// ============================================
const animals = ["cat", "dog"];
animals.push("rabbit", "lion");

console.log("Animals:", animals);
// Output: Animals: [ 'cat', 'dog', 'rabbit', 'lion' ]

// ============================================
// Example 3: Pushing Values from a Loop
// ============================================
const numbers = [];
for (let i = 1; i <= 5; i++) {
  numbers.push(i);
}
console.log("Numbers:", numbers);
// Output: Numbers: [ 1, 2, 3, 4, 5 ]

// ============================================
// Example 4: Using push() in a Function
// ============================================
function addTask(taskList, task) {
  taskList.push(task);
  return taskList;
}

let todoList = ["Buy milk", "Call Mom"];
todoList = addTask(todoList, "Walk the dog");

console.log("To-Do List:", todoList);
// Output: To-Do List: [ 'Buy milk', 'Call Mom', 'Walk the dog' ]

// ============================================
// Example 5: Pushing Objects into an Array
// ============================================
const users = [];

users.push({ id: 1, name: "Alice" });
users.push({ id: 2, name: "Bob" });

console.log("Users:", users);
// Output: Users: [ { id: 1, name: 'Alice' }, { id: 2, name: 'Bob' } ]

// ============================================
// Example 6: Conditionally Push to Array
// ============================================
const approvedUsers = [];
const user = { id: 3, name: "Charlie", isApproved: true };

if (user.isApproved) {
  approvedUsers.push(user);
}

console.log("Approved Users:", approvedUsers);
// Output: Approved Users: [ { id: 3, name: 'Charlie', isApproved: true } ]

// ============================================
// Example 7: Push and Return in Real Program Flow
// ============================================
// Example: Adding a message to a chat system and showing the total count

const messages = [];

function sendMessage(user, text) {
  const message = {
    user,
    text,
    timestamp: new Date().toISOString(),
  };
  const total = messages.push(message); // Adds to the end of messages array
  console.log(`[${user}] ${text} (Total messages: ${total})`);
}

sendMessage("John", "Hello, world!");
sendMessage("Doe", "Hi there!");

console.log("All Messages:", messages);
/* Output:
[John] Hello, world! (Total messages: 1)
[Doe] Hi there! (Total messages: 2)
All Messages: [
  { user: 'John', text: 'Hello, world!', timestamp: '...' },
  { user: 'Doe', text: 'Hi there!', timestamp: '...' }
]
*/
