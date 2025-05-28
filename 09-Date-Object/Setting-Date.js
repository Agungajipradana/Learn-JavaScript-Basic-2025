// JavaScript Date Object - Setting Date/Time Parts Examples

// Create a Date object with the current date and time
let date = new Date();

console.log("Original Date and Time:", date.toString());
console.log("-----------------------------");

// 1. setFullYear(year)
// Sets the full year (4 digits) of the Date object
date.setFullYear(2023);
console.log("After setFullYear(2023):", date.toString());

// You can also set month and day at the same time (year, month, day)
date.setFullYear(2024, 6, 15); // July 15, 2024 (month 6 = July)
console.log("After setFullYear(2024, 6, 15):", date.toString());

console.log("-----------------------------");

// 2. setMonth(month)
// Sets the month (0-11) of the Date object
date.setMonth(0); // January
console.log("After setMonth(0):", date.toString());

// If the day is out of range for the new month, it adjusts automatically
date.setDate(31); // January 31
console.log("Set day to 31:", date.toString());

date.setMonth(1); // February (month 1)
// Since February usually has less than 31 days, it will auto-adjust to March 3rd or so
console.log("After setMonth(1) with day 31:", date.toString());

console.log("-----------------------------");

// 3. setDate(day)
// Sets the day of the month (1-31)
date.setDate(10);
console.log("After setDate(10):", date.toString());

// Setting day to 0 means the last day of the previous month
date.setDate(0);
console.log("After setDate(0) (last day of previous month):", date.toString());

console.log("-----------------------------");

// 4. setHours(hours)
// Sets the hour (0-23)
date.setHours(9);
console.log("After setHours(9):", date.toString());

// You can also set minutes, seconds, and milliseconds at once
date.setHours(15, 30, 45, 500); // 15:30:45.500
console.log("After setHours(15, 30, 45, 500):", date.toString());

console.log("-----------------------------");

// 5. setMinutes(minutes)
// Sets the minutes (0-59)
date.setMinutes(5);
console.log("After setMinutes(5):", date.toString());

// You can also set seconds and milliseconds at once
date.setMinutes(45, 20, 250); // 45 minutes, 20 seconds, 250 milliseconds
console.log("After setMinutes(45, 20, 250):", date.toString());

console.log("-----------------------------");

// 6. setSeconds(seconds)
// Sets the seconds (0-59)
date.setSeconds(0);
console.log("After setSeconds(0):", date.toString());

// You can also set milliseconds at once
date.setSeconds(59, 999);
console.log("After setSeconds(59, 999):", date.toString());

console.log("-----------------------------");

// 7. setMilliseconds(milliseconds)
// Sets the milliseconds (0-999)
date.setMilliseconds(123);
console.log("After setMilliseconds(123):", date.toString());

console.log("-----------------------------");

// Example Case: Schedule a task to run 3 days later at 9:00 AM

const now = new Date();
console.log("Current Date/Time:", now.toString());

const scheduledDate = new Date(now);
scheduledDate.setDate(scheduledDate.getDate() + 3); // Add 3 days
scheduledDate.setHours(9, 0, 0, 0); // Set time to 09:00:00.000

console.log(
  "Scheduled Date/Time (3 days later at 9 AM):",
  scheduledDate.toString()
);

console.log("-----------------------------");

// Example Case: Adjust time by subtracting 90 minutes from a given time

const someDate = new Date("2025-05-28T15:30:00");
console.log("Original Date/Time:", someDate.toString());

someDate.setMinutes(someDate.getMinutes() - 90); // Subtract 90 minutes
console.log("After subtracting 90 minutes:", someDate.toString());
