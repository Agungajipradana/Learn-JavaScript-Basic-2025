// Map is a non-primitive data type that stores key-value pairs.
// Unlike objects, keys in Map can be of any type.

const map = new Map();

// Adding key-value pairs
map.set('name', 'Alice');
map.set(1, 'one');
map.set(true, 'boolean key');

console.log(map.get('name'));   // Output: "Alice"
console.log(map.get(1));        // Output: "one"
console.log(map.get(true));     // Output: "boolean key"

// Checking size of the Map
console.log(map.size);          // Output: 3

// Checking the type
console.log(typeof map);        // Output: "object"
