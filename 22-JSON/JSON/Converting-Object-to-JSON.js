// =====================================================
// Converting Object to JSON
// =====================================================

// -----------------------------------------------------
// BASIC EXAMPLE: Simple object to JSON string
// -----------------------------------------------------

const user = {
  name: "Laura",
  age: 27,
  isActive: true,
};

const jsonUser = JSON.stringify(user);

console.log("[Basic] JSON String:", jsonUser);
// Output: {"name":"Laura","age":27,"isActive":true}

// -----------------------------------------------------
// INTERMEDIATE EXAMPLE: Nested object and array
// -----------------------------------------------------

const developer = {
  name: "Daniel",
  skills: ["JavaScript", "Node.js", "React"],
  contact: {
    email: "daniel@example.com",
    github: "danieldev",
  },
};

const jsonDeveloper = JSON.stringify(developer);

console.log("\n[Intermediate] JSON Developer:", jsonDeveloper);
// Output: {"name":"Daniel","skills":["JavaScript","Node.js","React"],"contact":{"email":"daniel@example.com","github":"danieldev"}}

// -----------------------------------------------------
// ADVANCED EXAMPLE: Custom formatting with replacer function
// -----------------------------------------------------

const employee = {
  id: 101,
  name: "Sophia",
  department: "HR",
  salary: 5000,
  password: "secret123",
};

// Replacer function to exclude sensitive data (like password)
const jsonEmployee = JSON.stringify(employee, (key, value) => {
  if (key === "password") return undefined;
  return value;
});

console.log("\n[Advanced] Filtered JSON:", jsonEmployee);
// Output: {"id":101,"name":"Sophia","department":"HR","salary":5000}

// -----------------------------------------------------
// REAL-WORLD CASE: API request body (prepare data before sending)
// -----------------------------------------------------

const newUser = {
  username: "johndoe99",
  email: "johndoe@example.com",
  preferences: {
    newsletter: true,
    theme: "dark",
  },
  createdAt: new Date(),
};

const jsonPayload = JSON.stringify(newUser);

console.log("\n[Real-World] API Payload JSON:", jsonPayload);
// Output includes ISO-formatted date like: {"username":"johndoe99","email":"...","createdAt":"2025-06-29T14:05:00.000Z"}

// -----------------------------------------------------
// FORMATTED OUTPUT: Pretty-print with indentation
// -----------------------------------------------------

const jsonPretty = JSON.stringify(newUser, null, 2); // 2-space indentation

console.log("\n[Formatted] Pretty JSON:\n", jsonPretty);
// Output:
// {
//   "username": "johndoe99",
//   "email": "johndoe@example.com",
//   ...
// }

// -----------------------------------------------------
// NOTE:
// - JSON.stringify(object) converts an object to a JSON string.
// - You can use a replacer function or an array of keys to filter output.
// - You can use spacing for pretty-printing.
// - JSON does NOT support functions, symbols, or undefined values.
// -----------------------------------------------------
