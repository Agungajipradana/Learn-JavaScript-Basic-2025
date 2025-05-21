/*
1. How to Create a Symbol

Explanation:
- Symbol() creates a new symbol.

- The "description" is just a label for debugging, not used to identify the symbol.
*/

const sym1 = Symbol();
const sym2 = Symbol("description"); // optional description
console.log(sym1); // Output: Symbol()
console.log(sym2); // Output: Symbol(description)

/*
2. Symbols are Unique

Explanation:
Even though both symbols have the same description "id", they are not equal. Every Symbol() is unique.
*/

const symA = Symbol("id");
const symB = Symbol("id");

console.log(symA === symB); // Output: false

/*
3. Using Symbol as Object Property Key

Explanation:
- You can use Symbol as a property key in an object.

- Symbols are not accessible through normal for...in or Object.keys() loops.
*/

const id = Symbol("userId");

const user = {
  name: "John",
  [id]: 12345 // using symbol as a key
};

console.log(user.name);    // Output: John
console.log(user[id]);     // Output: 12345

/*
4. Symbols are Hidden from Enumerations

Explanation:
- The symbol-keyed property is not included in normal enumerations like Object.keys() or for...in.

- You can access it only using Object.getOwnPropertySymbols().
*/

const secret = Symbol("secretKey");

const data = {
  visible: "You can see me",
  [secret]: "Hidden value"
};

console.log(Object.keys(data));      // Output: ["visible"]
console.log(Object.getOwnPropertyNames(data)); // Output: ["visible"]
console.log(Object.getOwnPropertySymbols(data)); // Output: [Symbol(secretKey)]

/*
5. Symbols with Symbol.for() (Global Symbol Registry)

Explanation:
- Symbol.for("key") creates or retrieves a symbol from the global symbol registry.

- Unlike Symbol(), Symbol.for() reuses the same symbol if it already exists for that key.
*/

const globalSym1 = Symbol.for("shared");
const globalSym2 = Symbol.for("shared");

console.log(globalSym1 === globalSym2); // Output: true

/*
Example: Full Demo

Explanation:
- Symbol.for("key") creates or retrieves a symbol from the global symbol registry.

- Unlike Symbol(), Symbol.for() reuses the same symbol if it already exists for that key.
*/

// Create symbols
const token = Symbol("authToken");
const users = {
  name: "John",
  [token]: "abc123"
};

// Access values
console.log(users.name);       // Output: John
console.log(users[token]);     // Output: abc123

// Symbols are not visible in regular loops
console.log(Object.keys(users));               // Output: ["name"]
console.log(Object.getOwnPropertySymbols(users)); // Output: [Symbol(authToken)]
