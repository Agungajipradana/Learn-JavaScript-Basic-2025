// ===================================================
// REGEXP SYNTAX: QUANTIFIERS IN JAVASCRIPT
// ===================================================

/*
|--------------------------------------------------------------------------
| WHAT ARE QUANTIFIERS?
|--------------------------------------------------------------------------
|
| Quantifiers define how many times a character or group must occur.
|
| Common Quantifiers:
| - `*`  : 0 or more times
| - `+`  : 1 or more times
| - `?`  : 0 or 1 time (optional)
| - `{n}`    : exactly n times
| - `{n,}`   : at least n times
| - `{n,m}`  : between n and m times
|
| These are typically used after characters, groups, or character classes.
|
*/

/*
|--------------------------------------------------------------------------
| 1. * : ZERO OR MORE TIMES
|--------------------------------------------------------------------------
|
| Matches 0 or more of the preceding token.
|
*/

console.log(/a*/.test("")); // true (zero a's)
console.log(/a*/.test("aaa")); // true
console.log("baaad".match(/a*/g)); // ['', 'aaa', '', ''] → multiple matches

/*
|--------------------------------------------------------------------------
| 2. + : ONE OR MORE TIMES
|--------------------------------------------------------------------------
|
| Matches 1 or more of the preceding token.
|
*/

console.log(/a+/.test("")); // false (no a)
console.log(/a+/.test("aaa")); // true
console.log("baaad".match(/a+/g)); // ['aaa']

/*
|--------------------------------------------------------------------------
| 3. ? : ZERO OR ONE TIME (OPTIONAL)
|--------------------------------------------------------------------------
|
| Matches 0 or 1 of the preceding token.
|
*/

console.log(/a?/.test("")); // true (zero is allowed)
console.log(/a?/.test("a")); // true (exactly one)
console.log("baaa".match(/a?/g)); // ['', 'a', 'a', 'a', ''] → each 'a' and gaps

/*
|--------------------------------------------------------------------------
| 4. {n} : EXACTLY N TIMES
|--------------------------------------------------------------------------
|
| Matches the preceding token exactly n times.
|
*/

console.log(/\d{3}/.test("123")); // true (exactly 3 digits)
console.log(/\d{3}/.test("12")); // false
console.log("Code: 456".match(/\d{3}/)); // ['456']

/*
|--------------------------------------------------------------------------
| 5. {n,} : AT LEAST N TIMES
|--------------------------------------------------------------------------
|
| Matches the preceding token n or more times.
|
*/

console.log(/\d{2,}/.test("1")); // false (only 1 digit)
console.log(/\d{2,}/.test("123")); // true
console.log("Phone: 0812345678".match(/\d{2,}/g)); // ['0812345678']

/*
|--------------------------------------------------------------------------
| 6. {n,m} : BETWEEN N AND M TIMES
|--------------------------------------------------------------------------
|
| Matches the preceding token from n to m times (inclusive).
|
*/

console.log(/\d{2,4}/.test("1")); // false (less than 2)
console.log(/\d{2,4}/.test("123")); // true (between 2 and 4)
console.log("Pin: 4567".match(/\d{2,4}/)); // ['4567']

/*
|--------------------------------------------------------------------------
| 7. PRACTICAL CASE: VALIDATE POSTAL CODE (5 DIGITS EXACTLY)
|--------------------------------------------------------------------------
*/

function isPostalCode(str) {
  return /^\d{5}$/.test(str);
}

console.log(isPostalCode("12345")); // true
console.log(isPostalCode("123")); // false
console.log(isPostalCode("123456")); // false

/*
|--------------------------------------------------------------------------
| 8. PRACTICAL CASE: MATCH WORDS WITH REPEATED CHARACTERS
|--------------------------------------------------------------------------
*/

const words = ["soooon", "noooo", "good", "bad"];
const repeatedO = words.filter((word) => /o{2,}/.test(word));
console.log(repeatedO); // ['soooon', 'noooo', 'good']

/*
|--------------------------------------------------------------------------
| 9. PRACTICAL CASE: OPTIONAL COUNTRY CODE
|--------------------------------------------------------------------------
|
| Match phone numbers with or without +62 prefix
|
*/

const phones = ["+628123456789", "08123456789"];
const phoneRegex = /^(\+62)?\d{9,12}$/;
phones.forEach((phone) => {
  console.log(`${phone} → ${phoneRegex.test(phone)}`);
});
// Output:
// +628123456789 → true
// 08123456789   → true
