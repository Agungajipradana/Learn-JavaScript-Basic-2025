// ============================================================================
// REGULAR EXPRESSIONS: CREATING A PATTERN WITH RegExp CONSTRUCTOR IN JS
// ============================================================================

/*
|--------------------------------------------------------------------------
| 1. WITHOUT GLOBAL AND CASE-INSENSITIVE FLAGS
|--------------------------------------------------------------------------
|
| When you create a regular expression without any flags, the pattern will:
| - Only find the first match
| - Be case-sensitive
|
*/

// Example 1: Basic usage
const regex1 = new RegExp("hello");
console.log(regex1.test("hello world")); // true
console.log(regex1.test("Hello world")); // false (case-sensitive)

// Example 2: Searching the first match only
const text1 = "hello hello hello";
const match1 = text1.match(regex1);
console.log(match1); // ['hello']

/*
|--------------------------------------------------------------------------
| 2. WITH GLOBAL AND CASE-INSENSITIVE FLAGS
|--------------------------------------------------------------------------
|
| By adding the 'g' and 'i' flags:
| - 'g' enables global search (find all matches)
| - 'i' makes the match case-insensitive
|
*/

const regex2 = new RegExp("hello", "gi");

// Example 1: Match all occurrences, ignore case
const text2 = "Hello hello hEllo HEllO";
const matches2 = text2.match(regex2);
console.log(matches2); // ['Hello', 'hello', 'hEllo', 'HEllO']

// Example 2: Use with .test()
console.log(regex2.test("HELLO")); // true
console.log(regex2.test("no match")); // false

/*
|--------------------------------------------------------------------------
| 3. WRITING BOTH PATTERN AND FLAGS DYNAMICALLY
|--------------------------------------------------------------------------
|
| You can also define both pattern and flags as variables, which is useful 
| when building dynamic regular expressions (e.g., from user input).
|
*/

// Example 1: Dynamic pattern and flags
const keyword = "error";
const dynamicFlags = "gi";
const regex3 = new RegExp(keyword, dynamicFlags);

const log = "System ERROR: unexpected error occurred.";
console.log(log.match(regex3)); // ['ERROR', 'error']

// Example 2: From user search query (e.g., case-insensitive find)
function searchInText(query, text) {
  const pattern = new RegExp(query, "gi");
  return text.match(pattern);
}

const data = "Find me in the FIND ME area.";
console.log(searchInText("find me", data)); // ['Find me', 'FIND ME']

/*
|--------------------------------------------------------------------------
| Practical Case: Extract all tags (e.g., <tag>)
|--------------------------------------------------------------------------
*/

const html = "<div><p>Hello</p><span>World</span></div>";
const tagPattern = new RegExp("<\\w+>", "g"); // match opening tags
console.log(html.match(tagPattern)); // ['<div>', '<p>', '<span>']

/*
|--------------------------------------------------------------------------
| Practical Case: Censor all bad words from a sentence
|--------------------------------------------------------------------------
*/

const sentence = "This is a stupid and ugly example.";
const badWords = ["stupid", "ugly"];
const censorPattern = new RegExp(badWords.join("|"), "gi");
const cleanSentence = sentence.replace(censorPattern, "****");
console.log(cleanSentence); // 'This is a **** and **** example.'
