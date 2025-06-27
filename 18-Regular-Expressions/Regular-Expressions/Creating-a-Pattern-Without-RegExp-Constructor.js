// ==============================================================================
// REGULAR EXPRESSIONS: CREATING A PATTERN WITHOUT RegExp CONSTRUCTOR IN JS
// ==============================================================================

/*
|--------------------------------------------------------------------------
| 1. CREATING REGEX WITH LITERAL SYNTAX
|--------------------------------------------------------------------------
|
| You can create a regular expression directly using literal syntax: /pattern/flags
| This is the most common and concise way to write regular expressions in JavaScript.
|
| The flags can be added directly after the closing slash:
| - 'g' = global (find all matches)
| - 'i' = case-insensitive
|
| Example: /hello/gi will match all case-insensitive 'hello' in a string.
|
*/

// Example 1: Case-insensitive matching
const regex1 = /hello/i;
console.log(regex1.test("Hello")); // true
console.log(regex1.test("HELLO")); // true
console.log(regex1.test("Hi")); // false

// Example 2: Global and case-insensitive
const regex2 = /cat/gi;
const text2 = "Cat, cat, CAT, caT";
const matches2 = text2.match(regex2);
console.log(matches2); // ['Cat', 'cat', 'CAT', 'caT']

// Example 3: Extract all words starting with a capital letter
const sentence = "JavaScript is Created By Brendan Eich In 1995.";
const capitalWords = /\b[A-Z][a-z]+\b/g;
console.log(sentence.match(capitalWords)); // ['JavaScript', 'Created', 'By', 'Brendan', 'Eich', 'In']

// Example 4: Replace all email domains with 'example.com'
const emails = "user1@gmail.com, user2@yahoo.com";
const replacedEmails = emails.replace(/@\w+\.\w+/g, "@example.com");
console.log(replacedEmails); // 'user1@example.com, user2@example.com'

/*
|--------------------------------------------------------------------------
| 2. REGEX LITERAL EQUIVALENT TO RegExp CONSTRUCTOR
|--------------------------------------------------------------------------
|
| Writing regex using literal syntax is functionally the same as using the 
| RegExp constructor, but with simpler syntax.
|
| For example:
| new RegExp("hello", "gi") === /hello/gi
|
*/

const constructorVersion = new RegExp("hello", "gi");
const literalVersion = /hello/gi;

const testStr = "Hello hello HELLO";
console.log(testStr.match(constructorVersion)); // ['Hello', 'hello', 'HELLO']
console.log(testStr.match(literalVersion)); // ['Hello', 'hello', 'HELLO']

/*
|--------------------------------------------------------------------------
| 3. PRACTICAL USE: FILTERING BAD WORDS
|--------------------------------------------------------------------------
|
| You can use regex literals to scan or clean user input.
|
*/

const comment = "This is a bad and stupid example!";
const badWords = /bad|stupid/gi;
const censored = comment.replace(badWords, "****");
console.log(censored); // 'This is a **** and **** example!'

/*
|--------------------------------------------------------------------------
| 4. PRACTICAL USE: EXTRACTING HASHTAGS FROM A POST
|--------------------------------------------------------------------------
*/

const post = "Learning #JavaScript and #regex is so #fun!";
const hashtags = /#\w+/g;
console.log(post.match(hashtags)); // ['#JavaScript', '#regex', '#fun']
