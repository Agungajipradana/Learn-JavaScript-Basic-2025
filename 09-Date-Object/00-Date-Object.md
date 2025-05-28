# JavaScript Date Object

The **Date** object in JavaScript is a built-in object that allows you to work with dates and times. It provides methods to create, manipulate, and format dates and times in various ways.

## Creating a Date Object

You can create a new Date object in several ways:

```js
// Current date and time
const now = new Date();

// Specific date and time by passing a date string
const specificDate = new Date("2025-05-28T10:30:00");

// Specific date by passing year, month, day, hours, minutes, seconds, milliseconds
const detailedDate = new Date(2025, 4, 28, 10, 30, 0); // Note: month is 0-based (0 = January, 4 = May)
```

## Key Features

- Getting Date and Time Components: You can retrieve the year, month, day, hours, minutes, seconds, and milliseconds from a Date object.

- Setting Date and Time Components: You can modify parts of the date or time.

- Date Calculations: You can perform date arithmetic by adding or subtracting milliseconds.

- Formatting: You can convert a Date object to a string in various formats.

## Commonly Used Methods

### Getting Date/Time Parts

- getFullYear() — returns the year (4 digits)

- getMonth() — returns the month (0-11)

- getDate() — returns the day of the month (1-31)

- getHours() — returns the hour (0-23)

- getMinutes() — returns the minutes (0-59)

- getSeconds() — returns the seconds (0-59)

- getMilliseconds() — returns milliseconds (0-999)

- getDay() — returns the day of the week (0-6, Sunday to Saturday)

---

### Setting Date/Time Parts

- setFullYear(year)

- setMonth(month)

- setDate(day)

- setHours(hour)

- setMinutes(minutes)

- setSeconds(seconds)

- setMilliseconds(milliseconds)

---

### Other Useful Methods

- toISOString() — returns date as an ISO 8601 string

- toDateString() — returns a human-readable date string

- toTimeString() — returns the time portion as a string

- getTime() — returns the timestamp (milliseconds since Jan 1, 1970 UTC)

---

## Example Usage

```js
const today = new Date();

console.log(today.toDateString()); // e.g. "Wed May 28 2025"
console.log(today.getFullYear()); // e.g. 2025
console.log(today.getMonth()); // e.g. 4 (May, since months are zero-indexed)
console.log(today.getDate()); // e.g. 28
console.log(today.getDay()); // e.g. 3 (Wednesday)
```

## Notes

- Months in JavaScript Date objects are zero-indexed, meaning January is 0 and December is 11.

- The Date object internally stores time in milliseconds elapsed since the Unix Epoch (January 1, 1970, 00:00:00 UTC).

- The Date object respects the local time zone of the environment by default but can also work with UTC times.
