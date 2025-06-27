// ==========================================================================
// REGEXP SYNTAX: PREDEFINED CHARACTER CLASSES IN JAVASCRIPT
// ==========================================================================

/*
|--------------------------------------------------------------------------
| WHAT ARE PREDEFINED CHARACTER CLASSES?
|--------------------------------------------------------------------------
|
| Predefined character classes are shorthand notations to match common
| character types like digits, word characters, whitespace, etc.
|
| They simplify patterns by avoiding long character sets such as [0-9].
|
| Common Classes:
| - \d : any digit           (same as [0-9])
| - \D : any non-digit
| - \w : any word character  (same as [A-Za-z0-9_])
| - \W : any non-word character
| - \s : whitespace character (space, tab, newline)
| - \S : non-whitespace character
|
*/

/*
|--------------------------------------------------------------------------
| 1. \d : ANY DIGIT [0-9]
|--------------------------------------------------------------------------
*/

const regexDigit = /\d/;
console.log(regexDigit.test("123")); // true
console.log(regexDigit.test("abc")); // false
console.log("Room 404".match(/\d+/g)); // ['404']

/*
|--------------------------------------------------------------------------
| 2. \D : NON-DIGIT
|--------------------------------------------------------------------------
*/

const regexNonDigit = /\D/;
console.log(regexNonDigit.test("123")); // false (only digits)
console.log(regexNonDigit.test("abc123")); // true (has letters)
console.log("abc123".match(/\D+/g)); // ['abc']

/*
|--------------------------------------------------------------------------
| 3. \w : WORD CHARACTER [A-Za-z0-9_]
|--------------------------------------------------------------------------
*/

const regexWordChar = /\w/;
console.log(regexWordChar.test("_")); // true
console.log(regexWordChar.test("abc123")); // true
console.log("abc-123!".match(/\w+/g)); // ['abc', '123']

/*
|--------------------------------------------------------------------------
| 4. \W : NON-WORD CHARACTER
|--------------------------------------------------------------------------
*/

const regexNonWordChar = /\W/;
console.log(regexNonWordChar.test("@#$")); // true
console.log(regexNonWordChar.test("abc123")); // false
console.log("Hello World!".match(/\W+/g)); // [' ', '!']

/*
|--------------------------------------------------------------------------
| 5. \s : WHITESPACE CHARACTER
|--------------------------------------------------------------------------
|
| Includes: space, tab (\t), newline (\n), carriage return (\r), etc.
|
*/

const regexWhitespace = /\s/;
console.log(regexWhitespace.test("hello world")); // true
console.log(regexWhitespace.test("helloworld")); // false
console.log("Name:\tJohn\nAge: 30".match(/\s/g)); // ['\t', '\n', ' ']

/*
|--------------------------------------------------------------------------
| 6. \S : NON-WHITESPACE CHARACTER
|--------------------------------------------------------------------------
*/

const regexNonWhitespace = /\S/;
console.log(regexNonWhitespace.test("   ")); // false
console.log(regexNonWhitespace.test("  a ")); // true
console.log("  a  b".match(/\S+/g)); // ['a', 'b']

/*
|--------------------------------------------------------------------------
| PRACTICAL CASE: VALIDATE IF STRING CONTAINS ONLY DIGITS
|--------------------------------------------------------------------------
*/

function isOnlyDigits(str) {
  return /^\d+$/.test(str);
}

console.log(isOnlyDigits("123456")); // true
console.log(isOnlyDigits("123a")); // false

/*
|--------------------------------------------------------------------------
| PRACTICAL CASE: EXTRACT ALL WORDS FROM SENTENCE
|--------------------------------------------------------------------------
*/

const text = "This_is a test-123!";
const words = text.match(/\w+/g);
console.log(words); // ['This_is', 'a', 'test', '123']

/*
|--------------------------------------------------------------------------
| PRACTICAL CASE: REMOVE WHITESPACE FROM BEGINNING AND END
|--------------------------------------------------------------------------
*/

const messy = "   Hello world!   ";
const cleaned = messy.replace(/^\s+|\s+$/g, "");
console.log(cleaned); // 'Hello world!'
