// ==========================================================
// REGEXP SYNTAX: OTHER SPECIAL TOKENS IN JAVASCRIPT
// ==========================================================

/*
|--------------------------------------------------------------------------
| OVERVIEW
|--------------------------------------------------------------------------
|
| These special tokens provide more advanced and flexible pattern matching:
|
| - `|`     : Alternation (OR)
| - `()`    : Grouping and Capturing
| - `\b`    : Word Boundary
| - `[^abc]`: Negation inside character set
|
*/

/*
|--------------------------------------------------------------------------
| 1. `|` : OR OPERATOR (ALTERNATION)
|--------------------------------------------------------------------------
|
| Matches if the string contains **either** of the expressions.
| Useful when you want to match one of several options.
|
*/

console.log(/apple|banana/.test("banana")); // true
console.log(/apple|banana/.test("apple pie")); // true
console.log(/apple|banana/.test("orange")); // false

const fruits = ["apple", "banana", "mango", "pineapple"];
const selected = fruits.filter((f) => /apple|mango/.test(f));
console.log(selected); // ['apple', 'mango', 'pineapple']

/*
|--------------------------------------------------------------------------
| 2. `()` : GROUPING AND CAPTURING
|--------------------------------------------------------------------------
|
| Grouping lets you apply quantifiers to the entire group.
| It also enables capturing values for later use (e.g., replace).
|
*/

console.log(/(ab)+/.test("abab")); // true (group "ab" repeated)
console.log(/(cat|dog)s?/.test("cats")); // true (matches "cat" with optional "s")

// Capturing: Replace repeated groups
const repeatText = "ha ha ha!";
const result = repeatText.replace(/(ha )+/g, "[laugh]");
console.log(result); // '[laugh]!'

/*
|--------------------------------------------------------------------------
| 3. `\b` : WORD BOUNDARY
|--------------------------------------------------------------------------
|
| Asserts a position where a word character is next to a non-word character.
| Useful for finding whole words only (not part of a longer word).
|
*/

console.log(/\bword\b/.test("a word here")); // true
console.log(/\bword\b/.test("swordplay")); // false (not a whole word)
console.log("hello world!".match(/\b\w+\b/g)); // ['hello', 'world']

// Highlight specific word
const sentence = "The quick brown fox";
const highlighted = sentence.replace(/\bfox\b/, "[FOX]");
console.log(highlighted); // 'The quick brown [FOX]'

/*
|--------------------------------------------------------------------------
| 4. `[^abc]` : NEGATION INSIDE CHARACTER SET
|--------------------------------------------------------------------------
|
| Matches any single character **not** listed inside the brackets.
| Common for filtering unwanted characters.
|
*/

console.log(/[^abc]/.test("d")); // true
console.log(/[^abc]/.test("a")); // false

// Filter out only non-vowel characters
const letters = "abcdefghi".match(/[^aeiou]/g);
console.log(letters); // ['b', 'c', 'd', 'f', 'g', 'h']

/*
|--------------------------------------------------------------------------
| PRACTICAL CASE: EXTRACT SENTENCES WITH 'error' OR 'failed'
|--------------------------------------------------------------------------
*/

const logs = [
  "Task completed successfully",
  "Server error occurred",
  "Request failed due to timeout",
];

const problemLogs = logs.filter((log) => /error|failed/i.test(log));
console.log(problemLogs); // ['Server error occurred', 'Request failed due to timeout']

/*
|--------------------------------------------------------------------------
| PRACTICAL CASE: VALIDATE WORD THAT STARTS WITH UPPERCASE
|--------------------------------------------------------------------------
*/

const name = "John";
console.log(/^\b[A-Z][a-z]*\b$/.test(name)); // true

/*
|--------------------------------------------------------------------------
| PRACTICAL CASE: MATCH ALPHANUMERIC BUT EXCLUDE `a`, `b`, `c`
|--------------------------------------------------------------------------
*/

const input = "xyzabc123";
const safe = input.match(/[^abc]/g);
console.log(safe); // ['x', 'y', 'z', '1', '2', '3']
