// ===================================================
// REGULAR EXPRESSIONS: .test() METHOD IN JAVASCRIPT
// ===================================================

/*
|--------------------------------------------------------------------------
| WHAT IS .test()?
|--------------------------------------------------------------------------
|
| The `.test()` method is a RegExp method that tests whether a pattern 
| exists in a string. It returns a Boolean: `true` if there is a match, 
| `false` otherwise.
|
| Syntax:
|   regex.test(string)
|
*/

/*
|--------------------------------------------------------------------------
| 1. BASIC USAGE
|--------------------------------------------------------------------------
*/

// Example 1: Test for exact word
const regex1 = /hello/;
console.log(regex1.test("hello world")); // true
console.log(regex1.test("hi world")); // false

// Example 2: Test is case-sensitive by default
const regex2 = /hello/;
console.log(regex2.test("Hello")); // false

// Example 3: Add case-insensitive flag
const regex3 = /hello/i;
console.log(regex3.test("Hello")); // true

/*
|--------------------------------------------------------------------------
| 2. MATCHING NUMBERS, CHARACTERS, AND SYMBOLS
|--------------------------------------------------------------------------
*/

// Example 1: Match any digit using \d
const digitRegex = /\d/;
console.log(digitRegex.test("abc")); // false
console.log(digitRegex.test("abc123")); // true

// Example 2: Match if input contains special character @
const specialChar = /@/;
console.log(specialChar.test("email@example.com")); // true

// Example 3: Match if a string starts with a capital letter
const startsWithCapital = /^[A-Z]/;
console.log(startsWithCapital.test("JavaScript")); // true
console.log(startsWithCapital.test("javaScript")); // false

/*
|--------------------------------------------------------------------------
| 3. COMBINING MULTIPLE PATTERNS
|--------------------------------------------------------------------------
*/

// Example 1: Check if a string contains "error" or "fail"
const errorRegex = /error|fail/i;
console.log(errorRegex.test("Critical ERROR occurred")); // true
console.log(errorRegex.test("Operation successful")); // false

/*
|--------------------------------------------------------------------------
| 4. PRACTICAL CASE: VALIDATE USERNAME FORMAT
|--------------------------------------------------------------------------
|
| Rules:
| - Only alphanumeric characters
| - Between 3 and 12 characters
|
*/

function isValidUsername(username) {
  const usernamePattern = /^[a-zA-Z0-9]{3,12}$/;
  return usernamePattern.test(username);
}

console.log(isValidUsername("user123")); // true
console.log(isValidUsername("u$er")); // false
console.log(isValidUsername("ab")); // false (too short)
console.log(isValidUsername("thisisaverylongusername")); // false

/*
|--------------------------------------------------------------------------
| 5. PRACTICAL CASE: CHECK IF PASSWORD CONTAINS AT LEAST ONE DIGIT
|--------------------------------------------------------------------------
*/

function hasDigit(password) {
  return /\d/.test(password);
}

console.log(hasDigit("abc")); // false
console.log(hasDigit("abc123")); // true

/*
|--------------------------------------------------------------------------
| 6. PRACTICAL CASE: CHECK IF STRING ENDS WITH ".js"
|--------------------------------------------------------------------------
*/

const isJavaScriptFile = /\.js$/;
console.log(isJavaScriptFile.test("app.js")); // true
console.log(isJavaScriptFile.test("style.css")); // false

/*
|--------------------------------------------------------------------------
| 7. PRACTICAL CASE: CHECK IF A SENTENCE CONTAINS PROFANITY
|--------------------------------------------------------------------------
*/

const bannedWords = /stupid|idiot|dumb/i;
console.log(bannedWords.test("This is a stupid idea")); // true
console.log(bannedWords.test("You're smart!")); // false
