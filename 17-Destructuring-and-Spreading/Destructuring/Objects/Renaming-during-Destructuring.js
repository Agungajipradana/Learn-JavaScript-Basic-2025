// =====================================================
// RENAMING DURING DESTRUCTURING IN JAVASCRIPT
// =====================================================

// =========================================
// 1. Basic Renaming During Object Destructuring
// =========================================
const user = {
  name: "john",
  age: 30,
};

// Rename 'name' to 'userName' and 'age' to 'userAge'
const { name: userName, age: userAge } = user;
console.log(userName); // 'john'
console.log(userAge); // 30

// =========================================
// 2. Renaming with Default Values
// =========================================
const product = {
  title: "Smartphone",
};

// Rename 'title' to 'productName', 'price' to 'productPrice' with default
const { title: productName, price: productPrice = 1000 } = product;
console.log(productName); // 'Smartphone'
console.log(productPrice); // 1000 (default value)

// =========================================
// 3. Renaming Nested Object Properties
// =========================================
const employee = {
  id: 7,
  details: {
    firstName: "john",
    lastName: "doe",
  },
};

// Rename 'firstName' to 'fName' and 'lastName' to 'lName'
const {
  details: { firstName: fName, lastName: lName },
} = employee;

console.log(fName); // 'john'
console.log(lName); // 'doe'

// =========================================
// 4. Renaming in Function Parameters
// =========================================
const settings = {
  resolution: "4K",
  fullscreen: true,
};

function displaySettings({ resolution: res, fullscreen: isFullscreen }) {
  console.log(`Resolution: ${res}`);
  console.log(`Fullscreen: ${isFullscreen}`);
}

displaySettings(settings);
// Output:
// Resolution: 4K
// Fullscreen: true

// =========================================
// 5. Real-World Case: Handling API Data with Rename
// =========================================
const response = {
  status: 200,
  user: {
    uid: 12,
    uname: "johnny",
  },
};

const {
  user: { uid: userId, uname: username },
} = response;

console.log(userId); // 12
console.log(username); // 'johnny'

// =========================================
// 6. Combining Renaming with Rest Operator
// =========================================
const student = {
  id: 21,
  name: "john",
  grade: "A",
  enrolled: true,
};

const { id: studentId, ...otherDetails } = student;
console.log(studentId); // 21
console.log(otherDetails); // { name: 'john', grade: 'A', enrolled: true }
