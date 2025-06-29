// =====================================================
// JSON IN JAVASCRIPT EXAMPLES
// =====================================================

// -----------------------------------------------------
// 1. Converting JSON to JavaScript Object
// -----------------------------------------------------
const jsonString = '{"name":"John", "age":30, "isStudent":false}';
const personObj = JSON.parse(jsonString);

console.log("[Parse] Name:", personObj.name); // John
console.log("[Parse] Age:", personObj.age); // 30
console.log("[Parse] Is Student:", personObj.isStudent); // false

// -----------------------------------------------------
// 2. Using a Reviver Function with JSON.parse()
// -----------------------------------------------------
const jsonWithYear = '{"name":"John", "birthYear":2000}';

const parsedWithReviver = JSON.parse(jsonWithYear, (key, value) => {
  if (key === "birthYear") {
    return new Date().getFullYear() - value; // Convert to age
  }
  return value;
});

console.log("[Reviver] Name:", parsedWithReviver.name); // John
console.log("[Reviver] Age (calculated):", parsedWithReviver.birthYear); // e.g. 25 if current year is 2025

// -----------------------------------------------------
// 3. Converting JavaScript Object to JSON
// -----------------------------------------------------
const student = {
  name: "Jane",
  age: 28,
  isStudent: true,
};

const jsonOutput = JSON.stringify(student);
console.log("[Stringify] JSON Output:", jsonOutput);
// Output: {"name":"Jane","age":28,"isStudent":true}

// -----------------------------------------------------
// 4. Using a Filter Array with JSON.stringify()
// -----------------------------------------------------
const user = {
  name: "Alice",
  age: 30,
  gender: "female",
  country: "USA",
};

const filteredJson = JSON.stringify(user, ["name", "country"]);
console.log("[Filter] Filtered JSON:", filteredJson);
// Output: {"name":"Alice","country":"USA"}
