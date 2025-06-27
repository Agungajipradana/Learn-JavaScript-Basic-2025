// ===================================================
// REGEXP SYNTAX: ESCAPE CHARACTER `\` IN JAVASCRIPT
// ===================================================

/*
|--------------------------------------------------------------------------
| WHAT IS THE ESCAPE CHARACTER?
|--------------------------------------------------------------------------
|
| In regular expressions, some characters have special meanings (e.g. `.`, `*`, `+`).
| To match them literally, we must use a backslash `\` to "escape" them.
|
| NOTE:
| In JavaScript strings, the backslash itself must also be escaped,
| so in the actual string you often write `\\.` or `\\\\`.
|
*/

/*
|--------------------------------------------------------------------------
| 1. \. : MATCH A LITERAL DOT
|--------------------------------------------------------------------------
|
| The dot `.` normally matches any character (except newline).
| To match an actual period character (e.g., in a file name or domain),
| we escape it using `\.`.
|
*/

const filename = "report.pdf";
const regexDot = /\.pdf$/;
console.log(regexDot.test(filename)); // true

const sentence = "Use www.example.com as the domain.";
const domainRegex = /\.\w+/g;
console.log(sentence.match(domainRegex)); // ['.com']

/*
|--------------------------------------------------------------------------
| 2. \\ : MATCH A LITERAL BACKSLASH
|--------------------------------------------------------------------------
|
| A single backslash is an escape character in both strings and regex,
| so to match a real backslash, you need to double-escape: `\\\\`.
|
*/

const path = "C:\\Program Files\\Node";
const backslashRegex = /\\/g; // Match single backslash (escaped once in regex)
console.log(path.match(backslashRegex)); // ['\\', '\\']

// Example: Count number of backslashes
const countBackslashes = path.match(/\\/g)?.length ?? 0;
console.log(countBackslashes); // 2

/*
|--------------------------------------------------------------------------
| 3. PRACTICAL CASE: VALIDATE WINDOWS FILE PATH
|--------------------------------------------------------------------------
|
| Check if a string looks like a valid Windows path starting with a drive letter.
|
*/

const filePath = "D:\\Projects\\MyApp\\index.js";
const pathRegex = /^[A-Z]:\\(?:[\w\s]+\\)*[\w\s]+\.\w+$/;
console.log(pathRegex.test(filePath)); // true

/*
|--------------------------------------------------------------------------
| 4. PRACTICAL CASE: REPLACE DOTS IN DOMAIN WITH [DOT]
|--------------------------------------------------------------------------
*/

const domain = "mail.example.com";
const replaced = domain.replace(/\./g, "[DOT]");
console.log(replaced); // 'mail[DOT]example[DOT]com'

/*
|--------------------------------------------------------------------------
| 5. PRACTICAL CASE: SPLIT TEXT BY DOTS (E.G. SENTENCES)
|--------------------------------------------------------------------------
*/

const paragraph = "Hello. How are you? I'm fine.";
const sentences = paragraph.split(/\./);
console.log(sentences); // ['Hello', ' How are you? I\'m fine', '']

/*
|--------------------------------------------------------------------------
| 6. PRACTICAL CASE: MATCH ESCAPED JSON PATHS
|--------------------------------------------------------------------------
*/

const jsonPath = "user\\.name"; // dot is escaped in JSON path
const jsonPathRegex = /user\\\.name/;
console.log(jsonPathRegex.test(jsonPath)); // true
