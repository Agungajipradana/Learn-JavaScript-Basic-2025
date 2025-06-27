// ===================================================
// REGEXP SYNTAX: CHARACTER SETS `[]` IN JAVASCRIPT
// ===================================================

/*
|--------------------------------------------------------------------------
| WHAT IS A CHARACTER SET?
|--------------------------------------------------------------------------
|
| Character sets allow you to match **one character** from a defined group.
| Syntax: /[abc]/ matches either 'a', 'b', or 'c'
|
| You can define ranges or individual characters:
| - [a-c]: match 'a', 'b', or 'c'
| - [0-9]: match any digit from 0 to 9
| - [A-Za-z0-9]: match any alphanumeric character
|
*/

/*
|--------------------------------------------------------------------------
| 1. [a-c]: MATCHES 'a', 'b', OR 'c'
|--------------------------------------------------------------------------
*/

const regex1 = /[a-c]/;
console.log(regex1.test("apple")); // true (has 'a')
console.log(regex1.test("dog")); // false

/*
|--------------------------------------------------------------------------
| 2. [a-z]: MATCH ANY LOWERCASE LETTER
|--------------------------------------------------------------------------
*/

const regex2 = /[a-z]/;
console.log(regex2.test("HELLO")); // false
console.log(regex2.test("Hello")); // true (has lowercase 'e')
console.log("abc123".match(/[a-z]/g)); // ['a', 'b', 'c']

/*
|--------------------------------------------------------------------------
| 3. [A-Z]: MATCH ANY UPPERCASE LETTER
|--------------------------------------------------------------------------
*/

const regex3 = /[A-Z]/;
console.log(regex3.test("hello")); // false
console.log(regex3.test("Hello")); // true
console.log("XyZ123".match(/[A-Z]/g)); // ['X', 'Z']

/*
|--------------------------------------------------------------------------
| 4. [0-3]: MATCH 0, 1, 2, OR 3
|--------------------------------------------------------------------------
*/

const regex4 = /[0-3]/;
console.log(regex4.test("123")); // true
console.log(regex4.test("789")); // false
console.log("1902".match(/[0-3]/g)); // ['1', '0', '2']

/*
|--------------------------------------------------------------------------
| 5. [0-9]: MATCH ANY DIGIT
|--------------------------------------------------------------------------
*/

const regex5 = /[0-9]/;
console.log(regex5.test("abc")); // false
console.log(regex5.test("abc123")); // true
console.log("Year 2025".match(/[0-9]/g)); // ['2', '0', '2', '5']

/*
|--------------------------------------------------------------------------
| 6. [A-Za-z0-9]: MATCH ANY ALPHANUMERIC CHARACTER
|--------------------------------------------------------------------------
*/

const regex6 = /[A-Za-z0-9]/;
console.log(regex6.test("!@#$")); // false
console.log(regex6.test("A1b2")); // true
console.log("Test123!".match(/[A-Za-z0-9]/g)); // ['T', 'e', 's', 't', '1', '2', '3']

/*
|--------------------------------------------------------------------------
| PRACTICAL EXAMPLES
|--------------------------------------------------------------------------
*/

// Example: Validate simple username (only alphanumerics allowed)
function isValidUsername(username) {
  return /^[A-Za-z0-9]+$/.test(username);
}

console.log(isValidUsername("User123")); // true
console.log(isValidUsername("User_123")); // false (underscore is not allowed)

// Example: Extract all digits from a sentence
const info = "Room 42, Floor 7, Building 3";
const digitsOnly = info.match(/[0-9]/g);
console.log(digitsOnly); // ['4', '2', '7', '3']

// Example: Find all capital letters in a string
const title = "The Quick Brown FOX";
const caps = title.match(/[A-Z]/g);
console.log(caps); // ['T', 'Q', 'B', 'F', 'O', 'X']
