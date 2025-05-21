// Set is a non-primitive data type that stores unique values (no duplicates allowed).

const set = new Set();

// Adding values
set.add(1);
set.add(5);
set.add(5); // Duplicate, will be ignored
set.add('hello');

console.log(set.has(1));      // Output: true
console.log(set.has(3));      // Output: false

console.log(set.size);        // Output: 3 (duplicates are not counted)

// Iterating over the Set
for (const value of set) {
  console.log(value);
}
// Output:
// 1
// 5
// "hello"

console.log(typeof set);      // Output: "object"
