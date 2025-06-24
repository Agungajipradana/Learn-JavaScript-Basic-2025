// =====================================================
// COMBINING DESTRUCTURING AND SPREAD IN JAVASCRIPT
// =====================================================

// =========================================
// 1. Array Destructuring with Spread (Rest Elements)
// =========================================
const fruits = ['apple', 'banana', 'cherry', 'orange'];
const [firstFruit, ...otherFruits] = fruits;
console.log(firstFruit);    // apple
console.log(otherFruits);   // ['banana', 'cherry', 'orange']

// =========================================
// 2. Object Destructuring with Spread (Rest Properties)
// =========================================
const user = {
  id: 1,
  name: 'john',
  role: 'admin',
  isActive: true
};

const { name, ...restInfo } = user;
console.log(name);       // john
console.log(restInfo);   // { id: 1, role: 'admin', isActive: true }

// =========================================
// 3. Destructure Specific Values and Spread the Rest (Function Parameter)
// =========================================
function displayUser({ name, ...rest }) {
  console.log(`Name: ${name}`);
  console.log('Other Info:', rest);
}

displayUser({ name: 'john', age: 30, email: 'john@example.com' });
// Output:
// Name: john
// Other Info: { age: 30, email: 'john@example.com' }

// =========================================
// 4. Updating Destructured and Spread Object
// =========================================
const settings = {
  theme: 'dark',
  layout: 'grid',
  fontSize: 14
};

const { theme, ...options } = settings;
const newSettings = { theme: 'light', ...options };
console.log(newSettings);
// Output: { theme: 'light', layout: 'grid', fontSize: 14 }

// =========================================
// 5. Real-World Case: API Response Filtering
// =========================================
const response = {
  status: 200,
  message: 'Success',
  data: {
    userId: 101,
    name: 'john',
    email: 'john@example.com'
  },
  token: 'abc123'
};

const { data, ...meta } = response;
console.log('User Data:', data);
console.log('Meta Info:', meta);
// Output:
// User Data: { userId: 101, name: 'john', email: 'john@example.com' }
// Meta Info: { status: 200, message: 'Success', token: 'abc123' }

// =========================================
// 6. Combining Nested Destructuring and Spread
// =========================================
const order = {
  orderId: 999,
  customer: {
    name: 'john',
    contact: '123-456-7890'
  },
  items: ['Phone', 'Charger']
};

const {
  customer: { name: customerName },
  ...orderDetails
} = order;

console.log('Customer:', customerName);
console.log('Order Details:', orderDetails);
// Output:
// Customer: john
// Order Details: { orderId: 999, items: ['Phone', 'Charger'] }
