// ===================================================
// REGULAR EXPRESSIONS: .match() METHOD IN JAVASCRIPT
// ===================================================

/*
|--------------------------------------------------------------------------
| WHAT IS .match()?
|--------------------------------------------------------------------------
|
| The `.match()` method is used with strings (not RegExp directly) to retrieve 
| the result of matching a string against a RegExp.
|
| It returns:
| - An array of matches (if found)
| - `null` if no match
|
| Syntax:
|   string.match(regexp)
|
*/

/*
|--------------------------------------------------------------------------
| 1. BASIC USAGE
|--------------------------------------------------------------------------
*/

// Example 1: Match a word in a sentence
const sentence1 = "Hello world";
const result1 = sentence1.match(/world/);
console.log(result1); // ['world']

// Example 2: Match is case-sensitive by default
console.log("Hello".match(/hello/)); // null

// Example 3: Case-insensitive matching
console.log("Hello".match(/hello/i)); // ['Hello']

/*
|--------------------------------------------------------------------------
| 2. MATCHING MULTIPLE OCCURRENCES WITH GLOBAL FLAG
|--------------------------------------------------------------------------
|
| If you want to match all instances, use the `g` (global) flag.
| Without `g`, it only returns the first match.
|
*/

const text2 = "cat, Cat, CAT, caT";
const matches2 = text2.match(/cat/gi);
console.log(matches2); // ['cat', 'Cat', 'CAT', 'caT']

/*
|--------------------------------------------------------------------------
| 3. MATCHING WITH GROUPING
|--------------------------------------------------------------------------
|
| Groups can help you extract parts of matched strings.
| Groups are created using parentheses `()`.
|
*/

const log = "Error: Invalid input on line 42";
const matchGroup = log.match(/line (\d+)/);
console.log(matchGroup);
// ['line 42', '42']
// Index 0: full match, Index 1: captured group (line number)

/*
|--------------------------------------------------------------------------
| 4. USING REGEX WITH MULTIPLE GROUPS
|--------------------------------------------------------------------------
*/

const dateStr = "2025-06-25";
const dateMatch = dateStr.match(/(\d{4})-(\d{2})-(\d{2})/);
console.log(dateMatch);
// ['2025-06-25', '2025', '06', '25']

/*
|--------------------------------------------------------------------------
| 5. PRACTICAL CASE: EXTRACT HASHTAGS
|--------------------------------------------------------------------------
*/

const post = "Loving #JavaScript and #WebDev!";
const hashtags = post.match(/#\w+/g);
console.log(hashtags); // ['#JavaScript', '#WebDev']

/*
|--------------------------------------------------------------------------
| 6. PRACTICAL CASE: FIND ALL EMAILS IN TEXT
|--------------------------------------------------------------------------
*/

const emailText = "Contact us at info@example.com or support@domain.org.";
const emails = emailText.match(/\b\w+@\w+\.\w+\b/g);
console.log(emails); // ['info@example.com', 'support@domain.org']

/*
|--------------------------------------------------------------------------
| 7. PRACTICAL CASE: PARSE CSS COLOR VALUES
|--------------------------------------------------------------------------
*/

const css = "background: rgb(255, 0, 0); border: rgb(0, 255, 0);";
const rgbValues = css.match(/rgb\(\d{1,3},\s?\d{1,3},\s?\d{1,3}\)/g);
console.log(rgbValues); // ['rgb(255, 0, 0)', 'rgb(0, 255, 0)']

/*
|--------------------------------------------------------------------------
| 8. WHEN THERE IS NO MATCH
|--------------------------------------------------------------------------
*/

const result = "no digits here".match(/\d+/);
console.log(result); // null
