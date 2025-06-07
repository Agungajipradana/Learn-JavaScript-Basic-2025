// ============================================
// ARRAY METHOD: flat()
// ============================================
// The `flat()` method creates a new array with all sub-array elements
// concatenated into it recursively up to the specified depth.
// It does NOT mutate the original array.

// ============================================
// Example 1: Flattening a one-level nested array
// ============================================
const array1 = [1, 2, [3, 4]];
const flat1 = array1.flat();

console.log("Flattened one level:", flat1);
// Output: [1, 2, 3, 4]

// ============================================
// Example 2: Flattening two levels deep
// ============================================
const array2 = [1, 2, [3, [4, 5]]];
const flat2 = array2.flat(2);

console.log("Flattened two levels:", flat2);
// Output: [1, 2, 3, 4, 5]

// ============================================
// Example 3: Flattening infinitely deep nested arrays
// ============================================
const deeplyNested = [1, [2, [3, [4, [5]]]]];
const flatDeep = deeplyNested.flat(Infinity);

console.log("Fully flattened:", flatDeep);
// Output: [1, 2, 3, 4, 5]

// ============================================
// Example 4: Removing empty slots (sparse array)
// ============================================
const sparse = [1, , 2, , 3];
const flatSparse = sparse.flat();

console.log("Flattened sparse array:", flatSparse);
// Output: [1, 2, 3]

// ============================================
// Example 5: Flatten and then transform
// ============================================
const mixed = [1, [2, 3], [4, 5]];
const doubled = mixed.flat().map((num) => num * 2);

console.log("Doubled after flattening:", doubled);
// Output: [2, 4, 6, 8, 10]

// ============================================
// Example 6: Flattening result from map (like flatMap)
// ============================================
const words = ["hello", "world"];
const chars = words.map((word) => word.split("")).flat();

console.log("Flattened characters:", chars);
// Output: ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

// ============================================
// Example 7: Flattening array of arrays from form inputs
// ============================================
const formData = [
  ["name", "John"],
  ["email", "john@example.com"],
];
const keys = formData.flat();

console.log("Flattened form data keys and values:", keys);
// Output: ['name', 'John', 'email', 'john@example.com']

// ============================================
// Example 8: Custom flattening function (polyfill style)
// ============================================
function flattenCustom(arr, depth = 1) {
  return depth > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flattenCustom(val, depth - 1) : val),
        []
      )
    : arr.slice();
}

const data = [1, [2, [3, [4]]]];
console.log("Custom flat depth 2:", flattenCustom(data, 2));
// Output: [1, 2, 3, [4]]
