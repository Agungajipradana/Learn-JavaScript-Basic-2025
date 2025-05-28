// JavaScript Date Object - Getting Date/Time Parts Examples

// Create a Date object for the current date and time
const now = new Date();

console.log("Current Date and Time:", now.toString());
console.log("-----------------------------");

// 1. getFullYear()
// Returns the full year (4 digits) of the specified date according to local time
const year = now.getFullYear();
console.log("Year:", year); // e.g. 2025

// 2. getMonth()
// Returns the month (0-11). Note: January is 0, December is 11
const month = now.getMonth();
console.log("Month (0-11):", month); // e.g. 4 (for May)
console.log("Month (1-12):", month + 1); // common human-readable month

// 3. getDate()
// Returns the day of the month (1-31)
const dayOfMonth = now.getDate();
console.log("Day of the Month:", dayOfMonth); // e.g. 28

// 4. getDay()
// Returns the day of the week (0-6). Sunday is 0, Saturday is 6
const dayOfWeek = now.getDay();
console.log("Day of the Week (0-6):", dayOfWeek); // e.g. 3 (Wednesday)

// Extra: human-readable day name (common use)
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log("Day of the Week (name):", days[dayOfWeek]);

// 5. getHours()
// Returns the hour (0-23)
const hours = now.getHours();
console.log("Hours (0-23):", hours); // e.g. 14 (2 PM)

// 6. getMinutes()
// Returns the minutes (0-59)
const minutes = now.getMinutes();
console.log("Minutes (0-59):", minutes); // e.g. 45

// 7. getSeconds()
// Returns the seconds (0-59)
const seconds = now.getSeconds();
console.log("Seconds (0-59):", seconds); // e.g. 30

// 8. getMilliseconds()
// Returns the milliseconds (0-999)
const milliseconds = now.getMilliseconds();
console.log("Milliseconds (0-999):", milliseconds); // e.g. 123

console.log("-----------------------------");

// Example: Formatting a date/time string manually
const formattedDate = `${year}-${
  month + 1
}-${dayOfMonth} ${hours}:${minutes}:${seconds}`;
console.log("Formatted Date/Time:", formattedDate);

// Example: Use getDay to check if today is weekend or weekday
if (dayOfWeek === 0 || dayOfWeek === 6) {
  console.log("Today is a weekend.");
} else {
  console.log("Today is a weekday.");
}

// More complex example: Calculate the number of days passed in the current month
const startOfMonth = new Date(year, month, 1);
const daysPassed = dayOfMonth - 1;
console.log(`Days passed since the start of the month: ${daysPassed}`);

// Example: Display current time in 12-hour format with AM/PM
let hour12 = hours % 12 || 12; // Convert 0 to 12 for midnight
let ampm = hours >= 12 ? "PM" : "AM";
console.log(
  `Current time (12-hour format): ${hour12}:${minutes
    .toString()
    .padStart(2, "0")} ${ampm}`
);
