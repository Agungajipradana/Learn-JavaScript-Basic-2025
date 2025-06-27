// =====================================================
// REGEXP EXAMPLES 
// =====================================================

// Creating RegExp using constructor
const regex1 = new RegExp("hello"); // No flags
const regex2 = new RegExp("hello", "gi"); // With global and case-insensitive
const pattern = "hello";
const flags = "gi";
const regex3 = new RegExp(pattern, flags); // Dynamic pattern and flag

console.log(regex1); // /hello/
console.log(regex2); // /hello/gi
console.log(regex3); // /hello/gi

// Creating RegExp using literal syntax
const regex4 = /hello/gi;
console.log(regex4); // /hello/gi

// .test() method
console.log(/hello/.test("hello world")); // true

// .match() method
console.log("hello hello".match(/hello/g)); // ['hello', 'hello']

// .search() method
console.log("hello world".search(/world/)); // 6

// .replace() method
console.log("hello world".replace(/world/, "there")); // 'hello there'

// Character Sets
console.log(/[a-c]/.test("b")); // true
console.log(/[a-z]/.test("m")); // true
console.log(/[A-Z]/.test("M")); // true
console.log(/[0-3]/.test("2")); // true
console.log(/[0-9]/.test("7")); // true
console.log(/[A-Za-z0-9]/.test("Z")); // true

// Escape Character
console.log(/\./.test(".")); // true
console.log(/\\/.test("\\")); // true

// Predefined Classes
console.log(/\d/.test("123")); // true
console.log(/\D/.test("abc")); // true
console.log(/\w/.test("word")); // true
console.log(/\W/.test("!")); // true
console.log(/\s/.test(" ")); // true
console.log(/\S/.test("a")); // true

// Anchors
console.log(/^hello/.test("hello world")); // true
console.log(/world$/.test("hello world")); // true

// Dot (.)
console.log(/h.llo/.test("hello")); // true

// Quantifiers
console.log(/a*/.test("")); // true
console.log(/a+/.test("aaa")); // true
console.log(/a?/.test("")); // true
console.log(/\d{3}/.test("123")); // true
console.log(/\d{2,}/.test("1234")); // true
console.log(/\d{2,4}/.test("123")); // true

// OR operator
console.log(/apple|banana/.test("banana")); // true

// Grouping
console.log(/(ab)+/.test("abab")); // true

// Word boundary
console.log(/\bword\b/.test("a word here")); // true

// Negation in set
console.log(/[^abc]/.test("d")); // true

// Exact match
console.log(/^hello$/.test("hello")); // true
