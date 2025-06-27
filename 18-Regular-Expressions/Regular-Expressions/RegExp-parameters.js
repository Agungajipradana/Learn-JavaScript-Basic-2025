// =====================================================
// REGULAR EXPRESSIONS: REGEXP PARAMETERS IN JAVASCRIPT
// =====================================================

/*
|--------------------------------------------------------------------------
| 1. PATTERN
|--------------------------------------------------------------------------
|
| A pattern is the expression inside the regular expression that defines 
| the rules for matching strings. It can be written as a string inside 
| the RegExp constructor or directly between slashes (/pattern/).
|
*/

// Example 1: Simple pattern to match exact word "hello"
const pattern1 = /hello/;
console.log(pattern1.test("hello world")); // true
console.log(pattern1.test("hi world")); // false

// Example 2: Pattern to match digits using predefined \d
const pattern2 = /\d/; // Matches any digit from 0-9
console.log(pattern2.test("Age: 25")); // true
console.log(pattern2.test("Age: xx")); // false

// Example 3: Pattern to match email format (simplified)
const pattern3 = /\w+@\w+\.\w+/;
console.log(pattern3.test("test@example.com")); // true
console.log(pattern3.test("test.example.com")); // false

// Example 4: Pattern to extract year from string
const text = "The event is scheduled in 2025.";
const pattern4 = /\d{4}/;
console.log(text.match(pattern4)); // ['2025']

/*
|--------------------------------------------------------------------------
| 2. FLAGS
|--------------------------------------------------------------------------
|
| Flags are optional parameters that modify how the pattern is matched.
| Flags can be combined together.
|
| Common Flags:
|
| Flag | Description
| ---- | --------------------------------------
|  g   | Global search (find all matches)
|  i   | Case-insensitive search
|  m   | Multi-line search
|  u   | Unicode support
|  s   | Allows '.' to match newline
|  y   | Sticky search (matches from lastIndex)
|
*/

// Example 1: Case-sensitive vs case-insensitive
const caseSensitive = /hello/;
console.log(caseSensitive.test("Hello")); // false

const caseInsensitive = /hello/i;
console.log(caseInsensitive.test("Hello")); // true

// Example 2: Global flag (match all)
const text2 = "cat, Cat, caT";
const globalPattern = /cat/gi;
console.log(text2.match(globalPattern)); // ['cat', 'Cat', 'caT']

// Example 3: Using flags with RegExp constructor
const patternStr = "world";
const flags = "gi";
const regexFromConstructor = new RegExp(patternStr, flags);
console.log("WORLD world".match(regexFromConstructor)); // ['WORLD', 'world']

// Example 4: Multiline flag
const multilineText = `start
middle
end`;

const multiPattern = /^middle/m; // ^ matches start of line in multiline mode
console.log(multilineText.match(multiPattern)); // ['middle']

/*
|--------------------------------------------------------------------------
| Combining Pattern + Flags in Practical Use
|--------------------------------------------------------------------------
|
| Example: Find all hashtags in a tweet regardless of case
|
*/

const tweet = "Love #JavaScript, #coding and #opensource!";
const hashtagPattern = /#\w+/gi;
console.log(tweet.match(hashtagPattern)); // ['#JavaScript', '#coding', '#opensource']

/*
|--------------------------------------------------------------------------
| Example: Validate phone number (e.g., (123) 456-7890)
|--------------------------------------------------------------------------
*/

const phonePattern = /\(\d{3}\)\s\d{3}-\d{4}/;
console.log(phonePattern.test("(123) 456-7890")); // true
console.log(phonePattern.test("123-456-7890")); // false
