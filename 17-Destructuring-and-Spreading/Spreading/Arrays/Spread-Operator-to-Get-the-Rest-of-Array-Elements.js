// =====================================================
// SPREAD OPERATOR TO GET THE REST OF ARRAY ELEMENTS
// =====================================================

// =========================================
// 1. Basic Array Destructuring with Rest
// =========================================
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

// =========================================
// 2. Skipping Elements While Getting the Rest
// =========================================
const data = ["a", "b", "c", "d", "e"];
const [, , ...remaining] = data;
console.log(remaining); // ['c', 'd', 'e']

// =========================================
// 3. Nested Array Destructuring with Rest
// =========================================
const matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const [firstRow, ...otherRows] = matrix;
console.log(firstRow); // [1, 2]
console.log(otherRows); // [[3, 4], [5, 6]]

// =========================================
// 4. Real-World Case: Extracting Primary and Other Tags
// =========================================
const tags = ["javascript", "html", "css", "react", "node"];
const [primaryTag, ...additionalTags] = tags;
console.log(`Primary Tag: ${primaryTag}`);
console.log(`Additional Tags: ${additionalTags.join(", ")}`);
// Output:
// Primary Tag: javascript
// Additional Tags: html, css, react, node

// =========================================
// 5. Function Using Rest to Collect Remaining Arguments
// =========================================
function logFirstAndOthers(first, ...others) {
  console.log(`First argument: ${first}`);
  console.log(`Other arguments: ${others.join(", ")}`);
}

logFirstAndOthers("apple", "banana", "cherry", "date");
// Output:
// First argument: apple
// Other arguments: banana, cherry, date

// =========================================
// 6. Real-World Case: Paginating Items (Skip First Few)
// =========================================
function paginate(items) {
  const [featured, ...remainingItems] = items;
  console.log(`Featured Item: ${featured}`);
  console.log(`Items on next page: ${remainingItems.join(", ")}`);
}

paginate(["Intro to JS", "Advanced JS", "Node.js", "React", "TypeScript"]);
// Output:
// Featured Item: Intro to JS
// Items on next page: Advanced JS, Node.js, React, TypeScript
