// =====================================================
// DESTRUCTURING OBJECT DURING ITERATION IN JAVASCRIPT
// =====================================================

// =========================================
// 1. Basic Object Destructuring in for...of Loop
// =========================================
const users = [
  { name: "john", age: 28 },
  { name: "mike", age: 35 },
  { name: "sara", age: 22 },
];

// Destructure name and age inside the loop
for (const { name, age } of users) {
  console.log(`${name} is ${age} years old.`);
}
// Output:
// john is 28 years old.
// mike is 35 years old.
// sara is 22 years old.

// =========================================
// 2. Renaming While Destructuring in Loop
// =========================================
for (const { name: fullName, age: userAge } of users) {
  console.log(`${fullName} (age ${userAge})`);
}
// Output:
// john (age 28)
// mike (age 35)
// sara (age 22)

// =========================================
// 3. Destructuring with Default Values
// =========================================
const people = [{ name: "john" }, { name: "mike", age: 40 }];

// Default age to 0 if not available
for (const { name, age = 0 } of people) {
  console.log(`${name} is ${age} years old.`);
}
// Output:
// john is 0 years old.
// mike is 40 years old.

// =========================================
// 4. Destructuring Nested Objects During Iteration
// =========================================
const employees = [
  {
    id: 1,
    profile: {
      name: "john",
      contact: {
        email: "john@example.com",
      },
    },
  },
  {
    id: 2,
    profile: {
      name: "sara",
      contact: {
        email: "sara@example.com",
      },
    },
  },
];

for (const {
  id,
  profile: {
    name,
    contact: { email },
  },
} of employees) {
  console.log(`Employee ${id}: ${name} - ${email}`);
}
// Output:
// Employee 1: john - john@example.com
// Employee 2: sara - sara@example.com

// =========================================
// 5. Real-World Case: Displaying Product Info
// =========================================
const products = [
  { id: 101, title: "Phone", price: 500 },
  { id: 102, title: "Laptop", price: 1500 },
];

for (const { id, title, price } of products) {
  console.log(`Product ID: ${id}, ${title} costs $${price}`);
}
// Output:
// Product ID: 101, Phone costs $500
// Product ID: 102, Laptop costs $1500

// =========================================
// 6. Destructuring with Rest Operator in Loop
// =========================================
const accounts = [
  { id: 1, name: "john", balance: 1000 },
  { id: 2, name: "mike", balance: 2000 },
];

for (const { id, ...userInfo } of accounts) {
  console.log(`ID: ${id}`, userInfo);
}
// Output:
// ID: 1 { name: 'john', balance: 1000 }
// ID: 2 { name: 'mike', balance: 2000 }
