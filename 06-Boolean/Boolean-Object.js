/**
 * BOOLEAN OBJECT IN JAVASCRIPT
 * ----------------------------
 * The Boolean object is a wrapper around a Boolean primitive value.
 * Created using: new Boolean(value)
 *
 * NOTE:
 * - A Boolean object is always truthy, even if it holds `false` internally.
 * - Avoid using Boolean objects in conditional checks.
 */

// SIMPLE USAGE
// ------------

// Create a Boolean object wrapping a true value
const boolTrue = new Boolean(true);
console.log("boolTrue:", boolTrue); // [Boolean: true]
console.log("typeof boolTrue:", typeof boolTrue); // "object"

// Create a Boolean object wrapping a false value
const boolFalse = new Boolean(false);
console.log("boolFalse:", boolFalse); // [Boolean: false]
console.log("typeof boolFalse:", typeof boolFalse); // "object"

// Check the primitive value inside
console.log("boolFalse.valueOf():", boolFalse.valueOf()); // false

// But watch out
if (boolFalse) {
  console.log("Even though it holds 'false', the object is truthy.");
}

/**
 * WHY BOOLEAN OBJECTS ARE DANGEROUS
 * ---------------------------------
 * Boolean objects behave differently from Boolean primitives in conditionals.
 */

// Boolean primitive false
const primitiveFalse = false;
if (primitiveFalse) {
  console.log("Will not run.");
} else {
  console.log("Primitive false is correctly treated as falsy.");
}

// Boolean object wrapping false
const objectFalse = new Boolean(false);
if (objectFalse) {
  console.log("Object wrapping false is still truthy.");
}

/**
 * BOOLEAN OBJECT METHODS
 * ----------------------
 * Only Boolean objects have access to these methods:
 * - .valueOf(): Returns the internal Boolean primitive value
 * - .toString(): Returns "true" or "false" as a string
 */

const boolExample = new Boolean(true);

console.log("boolExample.valueOf():", boolExample.valueOf()); // true
console.log("boolExample.toString():", boolExample.toString()); // "true"

// MEDIUM COMPLEXITY CASE
// ----------------------
// Simulating a feature toggle with explicit object wrapper (not recommended)

const darkMode = new Boolean(false);

if (darkMode) {
  console.log("Dark mode is enabled (even though it's not really).");
} else {
  console.log("Dark mode is disabled.");
}

// Use .valueOf() for actual logic check
if (darkMode.valueOf()) {
  console.log("Checked using valueOf: Dark mode is ON.");
} else {
  console.log("Checked using valueOf: Dark mode is OFF.");
}

// ADVANCED USE CASE
// -----------------
// Scenario: Storing Boolean flags as objects in configuration (not recommended but sometimes seen in older code)

const config = {
  maintenanceMode: new Boolean(false),
  featureXEnabled: new Boolean(true),
};

if (config.maintenanceMode) {
  console.log("System under maintenance (will run due to truthy object)");
}

if (!config.maintenanceMode.valueOf()) {
  console.log("Checked properly: System is NOT under maintenance.");
}

// Boolean object used in array filtering (unexpected behavior)

const arr = [new Boolean(false), new Boolean(true), false, true];
const filtered = arr.filter(Boolean); // All Boolean objects are truthy

console.log("Filtered array:", filtered);
// Output: [Boolean(false), Boolean(true), true]
// Note: `false` primitive is removed, but Boolean(false) object remains

/**
 * RECOMMENDED PRACTICE
 * --------------------
 * Use Boolean primitives (true, false)
 * Avoid using `new Boolean()` for conditionals or logic checks
 * If using Boolean objects for a reason (e.g., legacy code), always use `.valueOf()` for checking the actual value
 */
