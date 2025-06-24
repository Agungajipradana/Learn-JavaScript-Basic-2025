// =====================================================
// DESTRUCTURING OBJECTS IN JAVASCRIPT
// =====================================================

// =========================================
// 1. Basic Object Destructuring
// =========================================
const user = {
  name: "john",
  age: 30,
  city: "New York",
};

const { name, age, city } = user;
console.log(name); // 'john'
console.log(age); // 30
console.log(city); // 'New York'

// =========================================
// 2. Destructuring with Default Values
// =========================================
const product = {
  title: "Laptop",
  price: 1500,
};

const { title, price, stock = 10 } = product;
console.log(title); // 'Laptop'
console.log(price); // 1500
console.log(stock); // 10 (default value)

// =========================================
// 3. Renaming Variables while Destructuring
// =========================================
const settings = {
  resolution: "1080p",
  fullscreen: true,
};

const { resolution: res, fullscreen: isFullscreen } = settings;
console.log(res); // '1080p'
console.log(isFullscreen); // true

// =========================================
// 4. Nested Object Destructuring
// =========================================
const person = {
  id: 1,
  info: {
    firstName: "john",
    lastName: "doe",
    contact: {
      email: "john@example.com",
    },
  },
};

const {
  info: {
    firstName,
    lastName,
    contact: { email },
  },
} = person;

console.log(firstName); // 'john'
console.log(lastName); // 'doe'
console.log(email); // 'john@example.com'

// =========================================
// 5. Destructuring in Function Parameters
// =========================================
function greet({ name, age }) {
  console.log(`Hello, ${name}. You are ${age} years old.`);
}

greet({ name: "john", age: 30 });

// =========================================
// 6. Destructuring with Rest Operator
// =========================================
const userData = {
  id: 101,
  name: "john",
  role: "admin",
  active: true,
};

const { id, ...restInfo } = userData;
console.log(id); // 101
console.log(restInfo); // { name: 'john', role: 'admin', active: true }

// =========================================
// 7. Real-World Case: Extracting Config Options
// =========================================
const config = {
  theme: "dark",
  layout: "grid",
  showSidebar: true,
};

function setupUI({ theme, layout }) {
  console.log(`Applying theme: ${theme} with layout: ${layout}`);
}

setupUI(config); // Applying theme: dark with layout: grid

// =========================================
// 8. Real-World Case: API Response Handling
// =========================================
const apiResponse = {
  status: 200,
  data: {
    user: {
      id: 5,
      name: "john",
    },
  },
};

const {
  data: {
    user: { id: userId, name: userName },
  },
} = apiResponse;

console.log(userId); // 5
console.log(userName); // 'john'
