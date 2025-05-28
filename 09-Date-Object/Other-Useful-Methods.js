// JavaScript Date Object - Other Useful Methods Examples

// Create a Date object for the current date and time
const now = new Date();

console.log("Original Date and Time:", now.toString());
console.log("-----------------------------");

// 1. toISOString()
// Returns the date as a string in ISO 8601 format (UTC time)
const isoString = now.toISOString();
console.log("ISO 8601 Format:", isoString);
// Example Output: "2025-05-28T07:45:30.123Z"

console.log("-----------------------------");

// 2. toDateString()
// Returns the date portion as a human-readable string (without time)
const dateString = now.toDateString();
console.log("Date String:", dateString);
// Example Output: "Wed May 28 2025"

console.log("-----------------------------");

// 3. toTimeString()
// Returns the time portion as a string (including timezone)
const timeString = now.toTimeString();
console.log("Time String:", timeString);
// Example Output: "14:45:30 GMT+0700 (Western Indonesia Time)"

console.log("-----------------------------");

// 4. getTime()
// Returns the numeric timestamp (milliseconds since January 1, 1970 UTC)
const timestamp = now.getTime();
console.log("Timestamp (milliseconds since Unix Epoch):", timestamp);
// Example Output: 1746059130123

console.log("-----------------------------");

// More Complex Example: Comparing two dates using getTime()
const date1 = new Date("2025-05-28T10:00:00");
const date2 = new Date("2025-05-29T15:30:00");

console.log("Date1:", date1.toString());
console.log("Date2:", date2.toString());

const diffMs = date2.getTime() - date1.getTime();
const diffHours = diffMs / (1000 * 60 * 60);

console.log(`Difference between Date2 and Date1 in milliseconds: ${diffMs}`);
console.log(`Difference between Date2 and Date1 in hours: ${diffHours}`);

console.log("-----------------------------");

// Use Case: Format current date to ISO string for API timestamp
function getApiTimestamp() {
  return new Date().toISOString();
}

console.log("API Timestamp:", getApiTimestamp());

console.log("-----------------------------");

// Use Case: Display readable date and time separately
function displayReadableDateTime(date) {
  console.log("Readable Date:", date.toDateString());
  console.log("Readable Time:", date.toTimeString());
}

displayReadableDateTime(new Date("2025-12-31T23:59:59"));
