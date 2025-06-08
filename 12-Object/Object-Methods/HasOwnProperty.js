// =======================================
// Object.prototype.hasOwnProperty()
// =======================================
// Description:
// hasOwnProperty() checks whether the object has the specified property as
// its own (not inherited) property. Returns true or false.

// Syntax:
// object.hasOwnProperty(property)

// =======================================
// Basic Example: Property Exists
// =======================================
const person = {
  name: "John",
  age: 30,
};

console.log(person.hasOwnProperty("name"));
// Output: true
// Explanation: "name" is a direct property of the object

// =======================================
// Basic Example: Property Does Not Exist
// =======================================
console.log(person.hasOwnProperty("email"));
// Output: false
// Explanation: "email" is not defined in the object

// =======================================
// Example: Inherited Property vs Own Property
// =======================================
const human = {
  species: "Homo sapiens",
};

const employee = Object.create(human);
employee.name = "Alice";
employee.role = "Developer";

console.log(employee.hasOwnProperty("name")); // true
console.log(employee.hasOwnProperty("species")); // false
// Explanation: "species" is inherited from prototype, not owned by the object

// =======================================
// Real-world Case: Safe Property Check
// =======================================
const data = {
  id: 101,
  status: "active",
};

const keyToCheck = "status";

if (data.hasOwnProperty(keyToCheck)) {
  console.log(`Property "${keyToCheck}" exists.`);
} else {
  console.log(`Property "${keyToCheck}" does not exist.`);
}
// Output: Property "status" exists.
// Explanation: Commonly used to avoid errors when accessing dynamic keys

// =======================================
// Real-world Case: Looping Without Inherited Properties
// =======================================
const config = Object.create({ inheritedProp: "doNotInclude" });
config.host = "localhost";
config.port = 3000;

for (const key in config) {
  if (config.hasOwnProperty(key)) {
    console.log(`${key}: ${config[key]}`);
  }
}
// Output:
// host: localhost
// port: 3000
// Explanation: Only own properties are processed, not inherited ones

// =======================================
// Real-world Case: Validate Required Fields
// =======================================
const input = {
  name: "Keyboard",
  price: 250,
};

const requiredFields = ["name", "price", "category"];

requiredFields.forEach((field) => {
  if (!input.hasOwnProperty(field)) {
    console.warn(`Missing required field: ${field}`);
  }
});
// Output: Missing required field: category
// Explanation: Useful for input validation before processing

// =======================================
// Advanced Case: Combine with typeof
// =======================================
const settings = {
  darkMode: true,
  fontSize: 14,
};

const isBooleanDarkMode =
  settings.hasOwnProperty("darkMode") && typeof settings.darkMode === "boolean";

console.log(isBooleanDarkMode);
// Output: true
// Explanation: Ensure that the property exists *and* is the expected type

// =======================================
// Edge Case: Overriding hasOwnProperty (not recommended)
// =======================================
const obj = {
  hasOwnProperty: function () {
    return false;
  },
  key: "value",
};

// This would break:
console.log(obj.hasOwnProperty("key"));
// Output: false (wrong!)

// Safer way using Object.prototype.hasOwnProperty.call
console.log(Object.prototype.hasOwnProperty.call(obj, "key"));
// Output: true
// Explanation: Always prefer the built-in method using .call() if unsure
