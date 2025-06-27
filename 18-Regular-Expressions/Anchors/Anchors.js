// ===================================================
// REGEXP SYNTAX: ANCHORS IN JAVASCRIPT
// ===================================================

/*
|--------------------------------------------------------------------------
| WHAT ARE ANCHORS IN REGULAR EXPRESSIONS?
|--------------------------------------------------------------------------
|
| Anchors are special characters that do not match actual characters in the string.
| Instead, they match positions in the string.
|
| Two primary anchors:
| - `^` (caret): asserts that the match must be at the **start** of the string.
| - `$` (dollar sign): asserts that the match must be at the **end** of the string.
|
*/

/*
|--------------------------------------------------------------------------
| 1. ^ : STRING STARTS WITH
|--------------------------------------------------------------------------
|
| Matches if the pattern appears at the **beginning** of the string.
|
*/

console.log(/^hello/.test("hello world")); // true (starts with 'hello')
console.log(/^world/.test("hello world")); // false (does not start with 'world')

const lines = ["JavaScript", "Node.js", "React"];
const startsWithJ = lines.filter((line) => /^J/.test(line));
console.log(startsWithJ); // ['JavaScript']

/*
|--------------------------------------------------------------------------
| 2. $ : STRING ENDS WITH
|--------------------------------------------------------------------------
|
| Matches if the pattern appears at the **end** of the string.
|
*/

console.log(/world$/.test("hello world")); // true (ends with 'world')
console.log(/hello$/.test("hello world")); // false (does not end with 'hello')

const filenames = ["app.js", "index.html", "style.css", "server.js"];
const jsFiles = filenames.filter((name) => /\.js$/.test(name));
console.log(jsFiles); // ['app.js', 'server.js']

/*
|--------------------------------------------------------------------------
| 3. USING BOTH ^ AND $ : EXACT MATCH
|--------------------------------------------------------------------------
|
| If you use both anchors together, it ensures the **entire string** must match.
|
*/

console.log(/^hello$/.test("hello")); // true (exact match)
console.log(/^hello$/.test("hello world")); // false
console.log(/^hello$/.test("say hello")); // false

/*
|--------------------------------------------------------------------------
| 4. PRACTICAL CASE: VALIDATE ONLY NUMBERS
|--------------------------------------------------------------------------
|
| Pattern ensures that the string contains only digits from start to end.
|
*/

function isOnlyDigits(input) {
  return /^\d+$/.test(input);
}

console.log(isOnlyDigits("123456")); // true
console.log(isOnlyDigits("12a45")); // false

/*
|--------------------------------------------------------------------------
| 5. PRACTICAL CASE: VALIDATE EMAIL ENDS WITH .com
|--------------------------------------------------------------------------
*/

function endsWithDotCom(email) {
  return /\.com$/.test(email);
}

console.log(endsWithDotCom("user@example.com")); // true
console.log(endsWithDotCom("admin@mail.org")); // false

/*
|--------------------------------------------------------------------------
| 6. PRACTICAL CASE: CHECK IF SENTENCE STARTS WITH A CAPITAL LETTER
|--------------------------------------------------------------------------
*/

function startsWithCapital(sentence) {
  return /^[A-Z]/.test(sentence);
}

console.log(startsWithCapital("Hello there")); // true
console.log(startsWithCapital("good morning")); // false

/*
|--------------------------------------------------------------------------
| 7. PRACTICAL CASE: MATCH STRINGS THAT START AND END WITH DIGITS
|--------------------------------------------------------------------------
*/

const items = ["1box1", "123", "a1b2", "2Go2", "box3"];
const filtered = items.filter((item) => /^\d.*\d$/.test(item));
console.log(filtered); // ['1box1', '123', '2Go2']
