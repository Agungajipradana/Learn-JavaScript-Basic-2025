// ==============================================
// REGEXP SYNTAX: DOT (.) IN JAVASCRIPT
// ==============================================

/*
|--------------------------------------------------------------------------
| WHAT IS DOT (.) IN REGULAR EXPRESSIONS?
|--------------------------------------------------------------------------
|
| The dot `.` is a special character in RegExp.
| It matches **any single character**, except newline `\n`.
|
| Common uses:
| - To match any character in a specific position
| - Used in flexible matching when exact letters are unknown
|
| Syntax:
|   /a.c/ matches "abc", "a1c", "a c", etc., but NOT "ac", "abdc"
|
*/

/*
|--------------------------------------------------------------------------
| 1. BASIC USAGE
|--------------------------------------------------------------------------
*/

console.log(/h.llo/.test("hello")); // true (matches 'h' + any + 'llo')
console.log(/h.llo/.test("hallo")); // true
console.log(/h.llo/.test("hillo")); // true
console.log(/h.llo/.test("h\nllo")); // false (dot doesn't match newline)

/*
|--------------------------------------------------------------------------
| 2. MATCHING EXACT LENGTH WITH ANY CHARACTER IN BETWEEN
|--------------------------------------------------------------------------
*/

console.log(/c.t/.test("cat"));   // true
console.log(/c.t/.test("cut"));   // true
console.log(/c.t/.test("coat"));  // false (too long)
console.log(/c.t/.test("ct"));    // false (too short)

/*
|--------------------------------------------------------------------------
| 3. FIND WORDS THAT CONTAIN A MIDDLE CHARACTER
|--------------------------------------------------------------------------
*/

const words = ["cat", "cut", "coat", "cast", "cart"];
const threeLetter = words.filter(word => /^c.t$/.test(word));
console.log(threeLetter); // ['cat', 'cut']

/*
|--------------------------------------------------------------------------
| 4. PRACTICAL CASE: MATCH FILE NAMES WITH ANY EXTENSION
|--------------------------------------------------------------------------
*/

const files = ["index.html", "style.css", "app.js", "readme.md"];
const anyFile = files.filter(name => /.+\..+/.test(name));
console.log(anyFile); // all are matched

/*
|--------------------------------------------------------------------------
| 5. ESCAPE DOT TO MATCH A LITERAL DOT
|--------------------------------------------------------------------------
|
| If you want to match a real dot (e.g., in domain or filename),
| you must escape it with a backslash: `\.`.
|
*/

console.log(/\.com$/.test("google.com"));  // true
console.log(/\.com$/.test("example.org")); // false

/*
|--------------------------------------------------------------------------
| 6. PRACTICAL CASE: REPLACE ANY CHARACTER IN SPECIFIC POSITION
|--------------------------------------------------------------------------
|
| Replace the middle character of any 3-letter word with "*"
|
*/

const input = "cat bat rat";
const censored = input.replace(/\b\w.\w\b/g, match => {
  return match[0] + "*" + match[2];
});
console.log(censored); // "c*t b*t r*t"

/*
|--------------------------------------------------------------------------
| 7. DOT DOESN'T MATCH NEWLINE — MULTILINE STRING CASE
|--------------------------------------------------------------------------
*/

const paragraph = "Hello\nWorld";
console.log(/Hello.World/.test(paragraph));   // false (dot doesn't match \n)
console.log(/Hello\nWorld/.test(paragraph));  // true

/*
|--------------------------------------------------------------------------
| 8. TO MATCH DOT WITH NEWLINES USE `s` FLAG (ES2018+)
|--------------------------------------------------------------------------
*/

console.log(/Hello.World/s.test("Hello\nWorld")); // true with `s` flag
