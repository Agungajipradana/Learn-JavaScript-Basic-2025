// =====================================================
// SPREAD AND REST OPERATORS IN JAVASCRIPT
// =====================================================

// =========================================
// 1. Using Spread in Arrays
// =========================================
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); 
// Output: [1, 2, 3, 4]

// =========================================
// 2. Adding Elements with Spread
// =========================================
const base = ['a', 'b'];
const extended = ['start', ...base, 'end'];
console.log(extended);
// Output: ['start', 'a', 'b', 'end']

// =========================================
// 3. Copying Arrays with Spread
// =========================================
const original = ['x', 'y', 'z'];
const copy = [...original];
console.log(copy);
// Output: ['x', 'y', 'z']

// =========================================
// 4. Using Spread in Objects
// =========================================
const obj1 = { name: 'john' };
const obj2 = { age: 30 };
const merged = { ...obj1, ...obj2 };
console.log(merged);
// Output: { name: 'john', age: 30 }

// =========================================
// 5. Overriding Object Properties
// =========================================
const user = { name: 'john', age: 25 };
const updatedUser = { ...user, age: 26 };
console.log(updatedUser);
// Output: { name: 'john', age: 26 }

// =========================================
// 6. Copying Objects with Spread
// =========================================
const settings = { theme: 'dark', layout: 'grid' };
const cloned = { ...settings };
console.log(cloned);
// Output: { theme: 'dark', layout: 'grid' }

// =========================================
// 7. Using Rest in Array Destructuring
// =========================================
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]

// =========================================
// 8. Using Rest in Object Destructuring
// =========================================
const account = { id: 101, name: 'john', balance: 1000 };
const { id, ...info } = account;
console.log(id);   // 101
console.log(info); // { name: 'john', balance: 1000 }

// =========================================
// 9. Rest Parameters in Functions
// =========================================
function logMessages(type, ...messages) {
  console.log(`Type: ${type}`);
  console.log('Messages:', messages);
}

logMessages('INFO', 'App started', 'User logged in');
// Output:
// Type: INFO
// Messages: ['App started', 'User logged in']

// =========================================
// 10. Real-World Case: Combining Config Options
// =========================================
const defaultConfig = { theme: 'light', sidebar: true };
const userConfig = { theme: 'dark', notifications: true };
const finalConfig = { ...defaultConfig, ...userConfig };
console.log(finalConfig);
// Output: { theme: 'dark', sidebar: true, notifications: true }

// =========================================
// 11. Real-World Case: Aggregating Function Arguments
// =========================================
function average(...nums) {
  const total = nums.reduce((sum, n) => sum + n, 0);
  return total / nums.length;
}

console.log(average(10, 20, 30));
// Output: 20
