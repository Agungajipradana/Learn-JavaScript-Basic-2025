// =====================================================
// Using a Reviver Function with JSON.parse()
// =====================================================

// -----------------------------------------------------
// BASIC EXAMPLE: Convert date string to Date object
// -----------------------------------------------------

const jsonWithDate = `
{
  "name": "Alice",
  "joined": "2024-01-15T10:30:00Z"
}
`;

const userWithDate = JSON.parse(jsonWithDate, (key, value) => {
  if (key === "joined") {
    return new Date(value); // Convert ISO string to Date object
  }
  return value;
});

console.log("[Basic] Name:", userWithDate.name); // Output: Alice
console.log("[Basic] Joined Date:", userWithDate.joined.toISOString()); // Output: 2024-01-15T10:30:00.000Z
console.log("[Basic] Year Joined:", userWithDate.joined.getFullYear()); // Output: 2024

// -----------------------------------------------------
// INTERMEDIATE EXAMPLE: Convert numeric string to number
// -----------------------------------------------------

const jsonWithNumbers = `
{
  "price": "1500",
  "discount": "0.2",
  "inStock": "true"
}
`;

const product = JSON.parse(jsonWithNumbers, (key, value) => {
  if (key === "price" || key === "discount") {
    return parseFloat(value);
  }
  if (key === "inStock") {
    return value === "true";
  }
  return value;
});

console.log("\n[Intermediate] Price:", product.price); // Output: 1500
console.log("[Intermediate] Discount:", product.discount); // Output: 0.2
console.log("[Intermediate] In Stock:", product.inStock); // Output: true

// -----------------------------------------------------
// ADVANCED EXAMPLE: Modify or remove specific properties
// -----------------------------------------------------

const jsonWithSensitiveData = `
{
  "username": "charlie_dev",
  "password": "supersecret123",
  "email": "charlie@example.com"
}
`;

const secureUser = JSON.parse(jsonWithSensitiveData, (key, value) => {
  if (key === "password") {
    return undefined; // Remove password from the final object
  }
  return value;
});

console.log("\n[Advanced] Secure User:", secureUser);
// Output: { username: 'charlie_dev', email: 'charlie@example.com' }

// -----------------------------------------------------
// REAL-WORLD CASE: Handle nested structures (e.g., revive all dates)
// -----------------------------------------------------

const jsonWithMultipleDates = `
{
  "events": [
    { "title": "Launch Day", "date": "2025-07-01T08:00:00Z" },
    { "title": "Review Meeting", "date": "2025-07-10T14:30:00Z" }
  ],
  "lastUpdated": "2025-06-29T16:45:00Z"
}
`;

const dataWithDates = JSON.parse(jsonWithMultipleDates, (key, value) => {
  // Automatically convert any ISO date string into a Date object
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}T/.test(value)) {
    return new Date(value);
  }
  return value;
});

console.log("\n[Real-World] Events:");
dataWithDates.events.forEach((event) => {
  console.log(` - ${event.title} on ${event.date.toLocaleString()}`);
});
// Example Output:
// - Launch Day on 7/1/2025, 3:00:00 PM (based on local time)
// - Review Meeting on 7/10/2025, 9:30:00 PM

console.log(
  "[Real-World] Last Updated:",
  dataWithDates.lastUpdated.toISOString()
);
// Output: 2025-06-29T16:45:00.000Z

// -----------------------------------------------------
// NOTE:
// The reviver function in JSON.parse() allows for custom
// processing of values while parsing — great for converting
// date strings, filtering sensitive data, or type coercion.
// -----------------------------------------------------
