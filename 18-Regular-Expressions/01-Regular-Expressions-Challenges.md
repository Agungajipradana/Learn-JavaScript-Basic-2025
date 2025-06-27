# JavaScript RegExp Challenges

## Easy Level

1. **Match word "cat"**
   Use regex to test if the string contains the word "cat".

2. **Check if string starts with "Hello"**
   Use regex anchor to check if a sentence starts with "Hello".

3. **Find all digits**
   Extract all digits from "abc123def456" using `\d`.

4. **Test single character match**
   Match any single character between `h.llo`.

5. **Optional character match**
   Use `?` to match both "color" and "colour".

6. **Match lowercase letters**
   Match all lowercase letters from a string.

7. **Match one or more digits**
   Use `+` quantifier to match sequences of digits.

8. **Match only if ends with "end"**
   Use `$` anchor to check if a string ends with "end".

9. **Negate specific characters**
   Use `[^abc]` to match any character except `a`, `b`, or `c`.

10. **Escape special characters**
    Match a literal period `.` in "file.txt".

---

## Medium Level

1. **Validate postal code (5 digits)**
   Match exactly 5 digits using `\d{5}`.

2. **Check for "apple" or "banana"**
   Use `|` operator to check for either word.

3. **Extract all words from sentence**
   Use `\b\w+\b` to extract whole words.

4. **Check optional country code**
   Validate phone number with optional "+62" using `^\+?\d{9,}$`.

5. **Match repeating group**
   Match repeated "ha" in "hahaha" using `(ha)+`.

6. **Check 3 to 5 digit sequence**
   Match between 3 to 5 digits using `\d{3,5}`.

7. **Validate string with letters and numbers**
   Match alphanumeric using `[A-Za-z0-9]+`.

8. **Match word boundary**
   Ensure "cat" is a whole word using `\bcat\b`.

9. **Check sentence contains capital word**
   Use `\b[A-Z]+\b` to find all-uppercase words.

10. **Match file extension**
    Extract file extension using `/\.\w+$/`.

---

## Hard Level

1. **Validate complex password**
   Match string with at least 8 characters, 1 uppercase, 1 number.

2. **Extract domain from email**
   Use grouping and `@([^\s]+)` to capture domain.

3. **Match hex color code**
   Use `#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})` to match hex colors.

4. **Check palindromic format (like "abba")**
   Use `^(.)(.)\2\1$` to validate a 4-char palindrome.

5. **Find words not containing vowels**
   Use `\b[^aeiou\s]+\b` with `gi` flag.

6. **Match nested quotes**
   Match text within double quotes using `"([^"]+)"`.

7. **Extract all non-digits and group them**
   Match all non-digit sequences using `\D+`.

8. **Find duplicate consecutive words**
   Use `\b(\w+)\s+\1\b` to match repeated words.

9. **Replace all vowels with \* (case insensitive)**
   Use `/[aeiou]/gi` with `.replace()`.

10. **Match entire HTML tag**
    Match HTML tags like `<div>`, `</p>` using `<\/?\w+>`.
