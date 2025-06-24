// =====================================================
// Array Destructuring IN JAVASCRIPT
// =====================================================

// ================================
// 1. Basic Array Destructuring
// ================================
const colors = ["red", "green", "blue"];
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor); // 'red'
console.log(secondColor); // 'green'
console.log(thirdColor); // 'blue'

// ================================
// 2. Skipping Elements
// ================================
const fruits = ["apple", "banana", "cherry"];
const [firstFruit, , thirdFruit] = fruits;
console.log(firstFruit); // 'apple'
console.log(thirdFruit); // 'cherry'

// ================================
// 3. Default Values
// ================================
const numbers = [10];
const [a = 1, b = 2] = numbers;
console.log(a); // 10 (taken from array)
console.log(b); // 2 (default value because no second item)

// ================================
// 4. Swapping Variables
// ================================
let x = 5;
let y = 10;
[x, y] = [y, x];
console.log(x); // 10
console.log(y); // 5

// ================================
// 5. Using Rest Operator
// ================================
const scores = [90, 85, 70, 60, 50];
const [topScore, secondTopScore, ...remainingScores] = scores;
console.log(topScore); // 90
console.log(secondTopScore); // 85
console.log(remainingScores); // [70, 60, 50]

// ================================
// 6. Nested Array Destructuring
// ================================
const nested = [1, [2, 3], 4];
const [one, [two, three], four] = nested;
console.log(one); // 1
console.log(two); // 2
console.log(three); // 3
console.log(four); // 4

// ================================
// 7. Destructuring in Function Return
// ================================
function getCoordinates() {
  return [40.7128, -74.006]; // latitude and longitude
}

const [latitude, longitude] = getCoordinates();
console.log(latitude); // 40.7128
console.log(longitude); // -74.0060

// ================================
// 8. Destructuring in Loop
// ================================
const people = [
  ["john", 28],
  ["mike", 35],
  ["sara", 22],
];

for (const [name, age] of people) {
  console.log(`${name} is ${age} years old`);
  // Output:
  // john is 28 years old
  // mike is 35 years old
  // sara is 22 years old
}

// ================================
// 9. Real-World Case: Handling API Data
// ================================
const response = [
  { id: 1, name: "john" },
  { id: 2, name: "mike" },
];

const [user1, user2] = response;
console.log(user1.name); // john
console.log(user2.name); // mike
