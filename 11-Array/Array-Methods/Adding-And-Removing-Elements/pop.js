// ============================================
// ARRAY METHOD: pop()
// ============================================
// The pop() method removes the last element from an array
// and returns that element.
// It modifies the original array and decreases its length by one.

// ============================================
// Example 1: Basic Usage
// ============================================
const fruits = ["apple", "banana", "cherry"];
const lastFruit = fruits.pop();

console.log("Removed:", lastFruit);
// Output: Removed: cherry

console.log("Remaining Fruits:", fruits);
// Output: Remaining Fruits: [ 'apple', 'banana' ]

// ============================================
// Example 2: Pop from an Empty Array
// ============================================
const emptyArray = [];
const removed = emptyArray.pop();

console.log("Removed from empty:", removed);
// Output: Removed from empty: undefined

console.log("Array after pop:", emptyArray);
// Output: Array after pop: []

// ============================================
// Example 3: Using pop() in a Function
// ============================================
function removeLastTask(tasks) {
  const removedTask = tasks.pop();
  console.log("Removed task:", removedTask);
  return tasks;
}

let todoList = ["Buy groceries", "Wash car", "Pay bills"];
todoList = removeLastTask(todoList);
// Output: Removed task: Pay bills

console.log("Updated To-Do List:", todoList);
// Output: Updated To-Do List: [ 'Buy groceries', 'Wash car' ]

// ============================================
// Example 4: Using pop() in Stack Implementation
// ============================================
// A stack uses LIFO (Last In, First Out) principle

const stack = [];

stack.push("Page 1");
stack.push("Page 2");
stack.push("Page 3");

console.log("Stack before pop:", stack);
// Output: Stack before pop: [ 'Page 1', 'Page 2', 'Page 3' ]

const lastPage = stack.pop();

console.log("Popped from stack:", lastPage);
// Output: Popped from stack: Page 3
console.log("Stack after pop:", stack);
// Output: Stack after pop: [ 'Page 1', 'Page 2' ]

// ============================================
// Example 5: Conditionally Removing Items
// ============================================

let notifications = ["Email 1", "Email 2", "Email 3"];

function clearLastNotification(list) {
  if (list.length > 0) {
    const cleared = list.pop();
    console.log(`Cleared notification: ${cleared}`);
  } else {
    console.log("No notifications to clear.");
  }
}

clearLastNotification(notifications);
// Output: Cleared notification: Email 3

clearLastNotification([]);
// Output: No notifications to clear.

// ============================================
// Example 6: Logging Removed Items for History
// ============================================

const actions = ["Add Item", "Update Item", "Delete Item"];
const actionHistory = [];

function undoAction() {
  const action = actions.pop();
  if (action) {
    actionHistory.push(action);
    console.log(`Undo: ${action}`);
  } else {
    console.log("No actions left to undo.");
  }
}

undoAction();
// Output: Undo: Delete Item
undoAction();
// Output: Undo: Update Item

console.log("Remaining Actions:", actions);
// Output: Remaining Actions: [ 'Add Item' ]
console.log("Action History:", actionHistory);
// Output: Action History: [ 'Delete Item', 'Update Item' ]
