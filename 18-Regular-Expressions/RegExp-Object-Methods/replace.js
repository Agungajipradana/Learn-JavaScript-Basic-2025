// ===================================================
// REGULAR EXPRESSIONS: .replace() METHOD IN JAVASCRIPT
// ===================================================

/*
|--------------------------------------------------------------------------
| WHAT IS .replace()?
|--------------------------------------------------------------------------
|
| The `.replace()` method is used with strings to search for a match using
| a RegExp or string, and replaces the match with a new substring.
|
| Syntax:
|   string.replace(pattern, replacement)
|
| Notes:
| - If using RegExp without `g` flag, only the first match is replaced.
| - If using RegExp with `g`, all matches will be replaced.
|
*/

/*
|--------------------------------------------------------------------------
| 1. BASIC USAGE WITH STRINGS
|--------------------------------------------------------------------------
*/

// Example 1: Replace the first occurrence
const sentence1 = "Hello world, hello again!";
const result1 = sentence1.replace("hello", "hi");
console.log(result1); // 'Hello world, hi again!' (only first lowercase 'hello' replaced)

// Example 2: Case-sensitive by default
const result2 = sentence1.replace(/hello/, "hi");
console.log(result2); // 'Hello world, hi again!'

/*
|--------------------------------------------------------------------------
| 2. USING REGEXP WITH GLOBAL AND CASE-INSENSITIVE FLAGS
|--------------------------------------------------------------------------
*/

const sentence2 = "Hello world, hello again!";
const result3 = sentence2.replace(/hello/gi, "hi");
console.log(result3); // 'hi world, hi again!'

/*
|--------------------------------------------------------------------------
| 3. REPLACEMENT WITH SPECIAL CHARACTERS
|--------------------------------------------------------------------------
|
| You can use `$&` to refer to the matched substring inside the replacement.
| Other options:
| - `$&` = entire match
| - `$1`, `$2`, ... = capture groups
| - `$`` = text before match
| - `$'` = text after match
|
*/

const sentence3 = "I love JavaScript!";
const result4 = sentence3.replace(/JavaScript/, "💖 $& 💖");
console.log(result4); // 'I love 💖 JavaScript 💖!'

/*
|--------------------------------------------------------------------------
| 4. USING CAPTURE GROUPS
|--------------------------------------------------------------------------
*/

const name = "Doe, John";
const swapped = name.replace(/(\w+), (\w+)/, "$2 $1");
console.log(swapped); // 'John Doe'

/*
|--------------------------------------------------------------------------
| 5. PRACTICAL CASE: CENSOR BAD WORDS
|--------------------------------------------------------------------------
*/

const comment = "This is stupid and dumb!";
const filtered = comment.replace(/stupid|dumb/gi, "****");
console.log(filtered); // 'This is **** and ****!'

/*
|--------------------------------------------------------------------------
| 6. PRACTICAL CASE: REMOVE HTML TAGS
|--------------------------------------------------------------------------
*/

const html = "<h1>Hello</h1><p>World</p>";
const textOnly = html.replace(/<[^>]*>/g, "");
console.log(textOnly); // 'HelloWorld'

/*
|--------------------------------------------------------------------------
| 7. PRACTICAL CASE: ADD LINKS TO MENTIONED USERS
|--------------------------------------------------------------------------
*/

const tweet = "Thanks @john and @jane for your support!";
const linkedTweet = tweet.replace(/@(\w+)/g, '<a href="/user/$1">@$1</a>');
console.log(linkedTweet);
// 'Thanks <a href="/user/john">@john</a> and <a href="/user/jane">@jane</a> for your support!'

/*
|--------------------------------------------------------------------------
| 8. USING FUNCTION AS SECOND ARGUMENT
|--------------------------------------------------------------------------
|
| Instead of a string, you can provide a function to dynamically generate 
| the replacement based on the match.
|
*/

const prices = "Product A: $10, Product B: $20";
const updatedPrices = prices.replace(/\$(\d+)/g, (match, price) => {
  const taxed = Number(price) * 1.1;
  return `$${taxed.toFixed(2)}`;
});
console.log(updatedPrices); // 'Product A: $11.00, Product B: $22.00'
