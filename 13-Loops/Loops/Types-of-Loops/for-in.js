// =======================================
// FOR...IN LOOP IN JAVASCRIPT
// =======================================

// --------------------------------------------------
// 1. Basic for...in Loop with Object
// --------------------------------------------------
// for...in is used to iterate over enumerable properties of an object.
const person = {
  name: "Alice",
  age: 28,
  isAdmin: true,
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output:
// name: Alice
// age: 28
// isAdmin: true

// --------------------------------------------------
// 2. Iterating Over Object with Nested Properties
// --------------------------------------------------
// Handles nested object properties using a loop.
const user = {
  name: "John",
  details: {
    email: "john@example.com",
    city: "New York",
  },
};

for (const key in user) {
  if (typeof user[key] === "object") {
    for (const subKey in user[key]) {
      console.log(`${key}.${subKey}: ${user[key][subKey]}`);
    }
  } else {
    console.log(`${key}: ${user[key]}`);
  }
}
// Output:
// name: John
// details.email: john@example.com
// details.city: New York

// --------------------------------------------------
// 3. Using for...in with Arrays (Not Recommended)
// --------------------------------------------------
// Arrays are better with for, forEach, or for...of.
const colors = ["red", "green", "blue"];

for (const index in colors) {
  console.log(`Index ${index}: ${colors[index]}`);
}
// Output:
// Index 0: red
// Index 1: green
// Index 2: blue

// Note: for...in on arrays includes string keys, so it's not always safe with extended properties.

// --------------------------------------------------
// 4. Check Object Properties Conditionally
// --------------------------------------------------
// Only log properties that are strings.
const product = {
  id: 101,
  name: "Laptop",
  price: 1200,
  brand: "TechBrand",
};

for (const prop in product) {
  if (typeof product[prop] === "string") {
    console.log(`${prop}: ${product[prop]}`);
  }
}
// Output:
// name: Laptop
// brand: TechBrand

// --------------------------------------------------
// 5. Using hasOwnProperty() to Filter Inherited Properties
// --------------------------------------------------
// Avoid inherited properties from prototype chain.
const base = { shared: true };
const obj = Object.create(base);
obj.name = "Custom Object";
obj.type = "example";

for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(`${key}: ${obj[key]}`);
  }
}
// Output:
// name: Custom Object
// type: example

// --------------------------------------------------
// 6. Real-World Case: Count Property Types
// --------------------------------------------------
// Example: Count how many string, number, boolean types in an object.
const profile = {
  username: "admin",
  age: 30,
  isActive: true,
  email: "admin@example.com",
};

const typeCount = {
  string: 0,
  number: 0,
  boolean: 0,
};

for (const key in profile) {
  const type = typeof profile[key];
  if (typeCount.hasOwnProperty(type)) {
    typeCount[type]++;
  }
}

console.log("Property types count:", typeCount);
// Output:
// Property types count: { string: 2, number: 1, boolean: 1 }

// --------------------------------------------------
// 7. Real-World Case: Logging Object with Dynamic Properties
// --------------------------------------------------
// Suppose we receive a user data object from an API.
const apiData = {
  userId: 12,
  username: "guestUser",
  lastLogin: "2025-06-01",
  verified: false,
};

function logData(data) {
  for (const key in data) {
    console.log(`Field ${key}: ${data[key]}`);
  }
}

logData(apiData);
// Output:
// Field userId: 12
// Field username: guestUser
// Field lastLogin: 2025-06-01
// Field verified: false
