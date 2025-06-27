// ===================================================
// REGULAR EXPRESSIONS: .search() METHOD IN JAVASCRIPT
// ===================================================

/*
|--------------------------------------------------------------------------
| WHAT IS .search()?
|--------------------------------------------------------------------------
|
| The `.search()` method is used with strings to find the index of the 
| first match of a regular expression.
|
| It returns:
| - The index of the first match (if found)
| - -1 if no match is found
|
| Syntax:
|   string.search(regexp)
|
| Notes:
| - `.search()` ignores the global `g` flag
| - It only finds the first match, not all of them
|
*/

/*
|--------------------------------------------------------------------------
| 1. BASIC USAGE
|--------------------------------------------------------------------------
*/

// Example 1: Find the index of "world"
const str1 = "Hello world!";
const result1 = str1.search(/world/);
console.log(result1); // 6 (starts at index 6)

// Example 2: Pattern not found
console.log("Hello world!".search(/JavaScript/)); // -1

// Example 3: Case-sensitive by default
console.log("Hello World!".search(/world/)); // -1

// Example 4: Case-insensitive
console.log("Hello World!".search(/world/i)); // 6

/*
|--------------------------------------------------------------------------
| 2. USING SEARCH TO FIND DIGITS OR SYMBOLS
|--------------------------------------------------------------------------
*/

const log = "User ID: 007";
console.log(log.search(/\d+/)); // 9 (start index of first digit)

// Search for '@' in email string
const email = "user@example.com";
console.log(email.search(/@/)); // 4

/*
|--------------------------------------------------------------------------
| 3. GLOBAL FLAG BEHAVIOR
|--------------------------------------------------------------------------
|
| The `g` (global) flag has no effect on `.search()`.
| It always returns the index of the first match only.
|
*/

const text = "cat CAT cAt CaT";
const index = text.search(/cat/gi); // Global + case-insensitive
console.log(index); // 0 (matches 'cat' at index 0)

/*
|--------------------------------------------------------------------------
| 4. PRACTICAL CASE: VALIDATE IF TEXT CONTAINS A URL
|--------------------------------------------------------------------------
*/

function containsURL(text) {
  const urlPattern = /https?:\/\/[\w.-]+\.\w+/i;
  return text.search(urlPattern) !== -1;
}

console.log(containsURL("Visit our site at https://example.com")); // true
console.log(containsURL("Just some text without links")); // false

/*
|--------------------------------------------------------------------------
| 5. PRACTICAL CASE: FIND FIRST OCCURRENCE OF BAD WORD
|--------------------------------------------------------------------------
*/

const comment = "This is dumb and totally stupid.";
const badWords = /stupid|dumb|idiot/i;
const firstBadWordIndex = comment.search(badWords);
console.log(firstBadWordIndex); // 8 (first match starts at index 8)

/*
|--------------------------------------------------------------------------
| 6. PRACTICAL CASE: FIND FIRST CAPITALIZED WORD
|--------------------------------------------------------------------------
*/

const sentence = "today is a Sunny day";
const capitalWordIndex = sentence.search(/\b[A-Z][a-z]*/);
console.log(capitalWordIndex); // 12 (Sunny)
