// =======================================
// Object.freeze(obj)
// =======================================
// Description:
// Object.freeze() freezes an object. A frozen object can no longer be modified:
// new properties can't be added, existing properties can't be removed or changed.
// It returns the same frozen object.

// Syntax:
// Object.freeze(object)

// =======================================
// Basic Example: Freezing an Object
// =======================================
const user = {
  name: "John",
  age: 30,
};

Object.freeze(user);

user.age = 40; // Will not work
user.city = "London"; // Will not be added
delete user.name; // Will not be deleted

console.log(user);
// Output: { name: 'John', age: 30 }
// Explanation: Changes are silently ignored in non-strict mode

// =======================================
// Example: Trying to Modify Frozen Object in Strict Mode
// =======================================
("use strict");

const config = {
  debug: true,
};

Object.freeze(config);

try {
  config.debug = false;
} catch (e) {
  console.error("Error:", e.message);
}
// Output: Error: Cannot assign to read only property 'debug'...
// Explanation: In strict mode, modifying a frozen object throws an error

// =======================================
// Example: Freezing Does NOT Deep Freeze
// =======================================
const settings = {
  theme: "dark",
  preferences: {
    fontSize: 14,
  },
};

Object.freeze(settings);

settings.preferences.fontSize = 18;

console.log(settings.preferences.fontSize);
// Output: 18
// Explanation: Nested objects are still mutable unless explicitly frozen

// =======================================
// Example: Deep Freeze Helper Function
// =======================================
function deepFreeze(obj) {
  Object.freeze(obj);
  Object.getOwnPropertyNames(obj).forEach((prop) => {
    if (
      obj[prop] !== null &&
      typeof obj[prop] === "object" &&
      !Object.isFrozen(obj[prop])
    ) {
      deepFreeze(obj[prop]);
    }
  });
}

const deepSettings = {
  mode: "light",
  options: {
    layout: "grid",
    zoom: true,
  },
};

deepFreeze(deepSettings);

deepSettings.options.layout = "list";
console.log(deepSettings.options.layout);
// Output: "grid"
// Explanation: deepFreeze ensures even nested objects are frozen

// =======================================
// Real-world Case: Prevent Configuration Mutations
// =======================================
const APP_CONFIG = Object.freeze({
  appName: "MyApp",
  version: "1.0.0",
  author: "John",
});

function runApp(config) {
  console.log(`Running ${config.appName} v${config.version}`);
}

runApp(APP_CONFIG);

// Any attempt to modify APP_CONFIG will fail
APP_CONFIG.version = "2.0.0";
console.log(APP_CONFIG.version);
// Output: 1.0.0
// Explanation: Freezing is useful for making configuration constants immutable

// =======================================
// Real-world Case: Enforcing Read-only State
// =======================================
const authState = {
  isAuthenticated: true,
  user: { name: "Alice" },
};

Object.freeze(authState);

// Attempting to change the state
authState.isAuthenticated = false;
authState.user.name = "Bob";

console.log(authState.isAuthenticated); // true
console.log(authState.user.name); // Bob
// Explanation: Top-level properties are frozen, but nested ones are still mutable
// Use deepFreeze if full immutability is needed

// =======================================
// Real-world Case: Avoid Mutations in Shared State (e.g. Redux or Vuex)
// =======================================
const state = {
  items: [1, 2, 3],
};

const frozenState = Object.freeze(state);

// Try to mutate array
frozenState.items.push(4); // This will still work!
console.log(frozenState.items); // Output: [1, 2, 3, 4]
// Explanation: Arrays inside frozen objects are still mutable unless deeply frozen
