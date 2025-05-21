/*
 1. Single Quotes '...'

Explanation:
This is a basic string defined using single quotes.
*/

let singleQuote = "Hello World";
console.log(singleQuote); // Output: Hello World

/*
2. Double Quotes "..."

Explanation:
Double quotes can also be used interchangeably with single quotes.
*/

let doubleQuote = "JavaScript is fun!";
console.log(doubleQuote); // Output: JavaScript is fun!

/*
 3. Backticks `...` (Template Literals)

Explanation:
Backticks allow string interpolation using ${...} to insert variables or expressions.
*/

let name = "John";
let greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, John!

/*
 4. Escape Characters

Explanation:
Use backslash \ to escape special characters like apostrophes or quotes.
*/

let sentence = "It's a beautiful day!";
console.log(sentence); // Output: It's a beautiful day!

/*
 5. Multi-line Strings (Using Backticks)

Explanation:
Backticks support multi-line strings without using escape characters.
*/

let multiLine = `Line one
Line two
Line three`;
console.log(multiLine);
/* Output:
Line one
Line two
Line three
*/

/*
6. String with Special Characters

Explanation:
\n creates a new line; \t adds a tab space.
*/

let specialChars = "Line1\nLine2\tTabbed";
console.log(specialChars);
/* Output:
Line1
Line2	Tabbed
*/

/*
7. String as an Object (Not Recommended)

Explanation:
Using new String() creates a String object, not a primitive. It’s better to use string literals.
*/

let strObj = new String("Hello");
console.log(strObj); // Output: [String: 'Hello']
console.log(typeof strObj); // Output: object
