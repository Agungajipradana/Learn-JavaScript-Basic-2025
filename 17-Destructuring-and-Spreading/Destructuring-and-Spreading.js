// ============================
// Destructuring and Spreading in JavaScript
// ============================

// 1. Destructuring Arrays
const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(third); // 3

// 2. Destructuring During Iteration
const users = [
  ["john", 25],
  ["mike", 30],
];
for (const [name, age] of users) {
  console.log(`${name} is ${age} years old`);
}

// 3. Destructuring Objects
const person = {
  name: "john",
  age: 28,
  city: "New York",
};
const { name, age, city } = person;
console.log(name); // john
console.log(age); // 28
console.log(city); // New York

// 4. Renaming During Destructuring
const { name: fullName } = person;
console.log(fullName); // john

// 5. Object Parameter Without Destructuring
function greetUser(user) {
  return `Hello, ${user.name}`;
}
console.log(greetUser(person)); // Hello, john

// 6. Object Parameter With Destructuring
function greetUserDestructured({ name }) {
  return `Hi, ${name}`;
}
console.log(greetUserDestructured(person)); // Hi, john

// 7. Destructuring Object During Iteration
const people = [
  { name: "john", age: 28 },
  { name: "mike", age: 32 },
];
for (const { name, age } of people) {
  console.log(`${name} is ${age} years old`);
}

// 8. Spread or Rest Operator (Basics)
const nums = [1, 2, 3, 4, 5];
const [n1, n2, ...rest] = nums;
console.log(n1); // 1
console.log(n2); // 2
console.log(rest); // [3, 4, 5]

// 9. Spread Operator to Get the Rest of Array Elements
const [head, ...tail] = [10, 20, 30, 40];
console.log(head); // 10
console.log(tail); // [20, 30, 40]

// 10. Spread Operator to Copy Array
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log(original); // [1, 2, 3]
console.log(copy); // [1, 2, 3, 4]

// 11. Spread Operator to Copy Object
const user1 = { name: "john", age: 28 };
const user2 = { ...user1, city: "Chicago" };
console.log(user2); // { name: 'john', age: 28, city: 'Chicago' }

// 12. Spread Operator with Arrow Function
const sum = (...nums) => nums.reduce((acc, val) => acc + val, 0);
console.log(sum(1, 2, 3)); // 6

// BONUS: Nested Destructuring
const employee = {
  id: 101,
  personal: {
    name: "john",
    address: {
      city: "Boston",
      country: "USA",
    },
  },
};
const {
  personal: {
    name: employeeName,
    address: { city: empCity },
  },
} = employee;
console.log(employeeName); // john
console.log(empCity); // Boston
