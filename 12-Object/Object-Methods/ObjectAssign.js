// ===============================================
// Object.assign(target, ...sources)
// ===============================================
// Description:
// Object.assign() copies all enumerable own properties from one or more
// source objects to a target object. It returns the modified target object.

// Syntax:
// Object.assign(target, ...sources)

// ===============================================
// Basic Example: Copy Properties
// ===============================================
const target = { a: 1 };
const source = { b: 2 };

const result = Object.assign(target, source);

console.log(result);
// Output: { a: 1, b: 2 }
// Explanation: Properties from source are added to the target object

// ===============================================
// Example: Multiple Sources
// ===============================================
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };

const combined = Object.assign({}, obj1, obj2, obj3);

console.log(combined);
// Output: { a: 1, b: 2, c: 3 }
// Explanation: Properties are copied from multiple sources into a new object

// ===============================================
// Example: Overwriting Properties
// ===============================================
const original = { a: 1, b: 2 };
const override = { b: 20, c: 3 };

const updated = Object.assign({}, original, override);

console.log(updated);
// Output: { a: 1, b: 20, c: 3 }
// Explanation: The 'b' value is overwritten by the source object

// ===============================================
// Example: Copy to Existing Object (Mutates Target)
// ===============================================
const config = { debug: false };
const newSettings = { debug: true, theme: "dark" };

Object.assign(config, newSettings);

console.log(config);
// Output: { debug: true, theme: 'dark' }
// Explanation: Target object is mutated (modified) in place

// ===============================================
// Example: Shallow Copy
// ===============================================
const user = {
  name: "Alice",
  preferences: {
    color: "blue",
  },
};

const shallowCopy = Object.assign({}, user);

shallowCopy.preferences.color = "red";

console.log(user.preferences.color);
// Output: "red"
// Explanation: Nested objects are shared, not deeply cloned

// ===============================================
// Real-world Case: Default Config Merging
// ===============================================
const defaultConfig = {
  host: "localhost",
  port: 3000,
  secure: false,
};

const envConfig = {
  port: 8080,
  secure: true,
};

const finalConfig = Object.assign({}, defaultConfig, envConfig);

console.log(finalConfig);
// Output: { host: 'localhost', port: 8080, secure: true }
// Explanation: Useful for merging default and environment-specific settings

// ===============================================
// Real-world Case: Cloning an Object
// ===============================================
const session = {
  userId: 42,
  token: "abc123",
};

// Create a shallow clone
const sessionCopy = Object.assign({}, session);

console.log(sessionCopy);
// Output: { userId: 42, token: 'abc123' }
// Explanation: A shallow clone is created without affecting the original

// ===============================================
// Real-world Case: Add Metadata to Object
// ===============================================
const product = {
  name: "Keyboard",
  price: 150,
};

const withMetadata = Object.assign({}, product, {
  createdAt: new Date().toISOString(),
  id: Math.random().toString(36).substring(2, 10),
});

console.log(withMetadata);
// Output example:
// {
//   name: 'Keyboard',
//   price: 150,
//   createdAt: '2025-06-08T12:00:00.000Z',
//   id: 'a1b2c3d4'
// }
// Explanation: Adds generated fields like timestamps and IDs to the object
