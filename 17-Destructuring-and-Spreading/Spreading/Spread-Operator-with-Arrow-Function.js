// =====================================================
// SPREAD OPERATOR WITH ARROW FUNCTION IN JAVASCRIPT
// =====================================================

// =========================================
// 1. Using Rest Parameters in Arrow Function
// =========================================
const logNumbers = (...nums) => {
  console.log("Numbers:", nums);
};

logNumbers(1, 2, 3, 4);
// Output: Numbers: [1, 2, 3, 4]

// =========================================
// 2. Calculating Sum Using Arrow Function + Rest
// =========================================
const sum = (...numbers) => numbers.reduce((total, num) => total + num, 0);
console.log(sum(5, 10, 15));
// Output: 30

// =========================================
// 3. Merging Arrays in Arrow Function Using Spread
// =========================================
const mergeArrays = (a, b) => [...a, ...b];
console.log(mergeArrays([1, 2], [3, 4]));
// Output: [1, 2, 3, 4]

// =========================================
// 4. Passing Spread Array to Arrow Function
// =========================================
const greet = (g1, g2, g3) => {
  console.log(`Greetings: ${g1}, ${g2}, ${g3}`);
};

const greetings = ["Hello", "Hi", "Hey"];
greet(...greetings);
// Output: Greetings: Hello, Hi, Hey

// =========================================
// 5. Real-World Case: Combining Config Options
// =========================================
const combineConfigs = (...configs) => {
  return configs.reduce((acc, config) => ({ ...acc, ...config }), {});
};

const defaultConfig = { theme: "light", fontSize: 14 };
const userConfig = { fontSize: 16, showSidebar: true };
const runtimeConfig = { debug: false };

const finalConfig = combineConfigs(defaultConfig, userConfig, runtimeConfig);
console.log(finalConfig);
// Output: { theme: 'light', fontSize: 16, showSidebar: true, debug: false }

// =========================================
// 6. Real-World Case: Logging Multiple User Actions
// =========================================
const logActions = (user, ...actions) => {
  console.log(`${user} performed actions: ${actions.join(", ")}`);
};

logActions("john", "login", "viewDashboard", "logout");
// Output: john performed actions: login, viewDashboard, logout
