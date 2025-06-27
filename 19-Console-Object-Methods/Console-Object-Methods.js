// =====================================================
// CONSOLE OBJECT METHODS EXAMPLES
// =====================================================

// -----------------------------------------------------
// console.log()
// -----------------------------------------------------
console.log("This is a log message"); // This is a log message
console.log("Multiple values:", 123, true, { name: "Alice" }); // Multiple values: 123 true { name: 'Alice' }

// -----------------------------------------------------
// console.info()
// -----------------------------------------------------
console.info("This is an informational message"); // This is an informational message

// -----------------------------------------------------
// console.warn()
// -----------------------------------------------------
console.warn("This is a warning message"); // Warning: This is a warning message

// -----------------------------------------------------
// console.error()
// -----------------------------------------------------
console.error("This is an error message"); // Error: This is an error message

// -----------------------------------------------------
// console.table()
// -----------------------------------------------------
const users = [
  { id: 1, name: "Alice", role: "Admin" },
  { id: 2, name: "Bob", role: "Editor" },
  { id: 3, name: "Charlie", role: "Viewer" },
];
console.table(users);
/*
┌─────────┬────┬─────────┬────────┐
│ (index) │ id │  name   │ role   │
├─────────┼────┼─────────┼────────┤
│    0    │ 1  │ 'Alice' │ 'Admin'│
│    1    │ 2  │ 'Bob'   │'Editor'│
│    2    │ 3  │'Charlie'│'Viewer'│
└─────────┴────┴─────────┴────────┘
*/

// -----------------------------------------------------
// console.time() & console.timeEnd()
// -----------------------------------------------------
console.time("loopTime");
for (let i = 0; i < 1_000_000; i++) {
  Math.sqrt(i);
}
console.timeEnd("loopTime"); // loopTime: X ms

// -----------------------------------------------------
// console.assert()
// -----------------------------------------------------
const age = 15;
console.assert(age >= 18, "User is not an adult!"); // Assertion failed: User is not an adult!

// -----------------------------------------------------
// console.group() & console.groupEnd()
// -----------------------------------------------------
console.group("User Info");
console.log("Name: Alice");
console.log("Role: Admin");
console.groupEnd(); // End of group "User Info"

// -----------------------------------------------------
// console.count()
// -----------------------------------------------------
function login(user) {
  console.count(`Login attempt by ${user}`);
}
login("Alice"); // Login attempt by Alice: 1
login("Alice"); // Login attempt by Alice: 2
login("Bob"); // Login attempt by Bob: 1

// -----------------------------------------------------
// console.clear()
// -----------------------------------------------------
console.log("Console will be cleared in 2 seconds...");
setTimeout(() => {
  console.clear();
  console.log("Console cleared");
}, 2000);
