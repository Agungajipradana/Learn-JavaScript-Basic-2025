// Date is a non-primitive data type in JavaScript.
// It represents a single point in time — a date and time value.

const now = new Date(); // Create a new Date object representing current date and time

console.log(now);              // Output: current date and time (e.g., 2025-05-21T10:23:45.678Z)
console.log(typeof now);       // Output: "object"

// Getting specific parts of the date
console.log(now.getFullYear());  // Output: current year (e.g., 2025)
console.log(now.getMonth());     // Output: current month (0-11, so May is 4)
console.log(now.getDate());      // Output: current day of the month (1-31)

// Creating a specific date
const birthday = new Date('1995-12-17T03:24:00');
console.log(birthday);           // Output: 1995-12-17T03:24:00.000Z
