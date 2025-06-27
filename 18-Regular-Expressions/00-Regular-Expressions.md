# JavaScript Regular Expressions (RegEx)

Regular Expressions are patterns used to match character combinations in strings. They are objects in JavaScript and are used with methods like `.test()`, `.match()`, `.search()`, and `.replace()`.

---

## RegExp Parameters

- **Pattern**: The text of the regular expression.
- **Flags**: Optional modifiers that affect how the pattern behaves.

### Common Flags:

| Flag | Description                            |
| ---- | -------------------------------------- |
| `g`  | Global search (find all matches)       |
| `i`  | Case-insensitive search                |
| `m`  | Multi-line search                      |
| `u`  | Unicode support                        |
| `s`  | Allows `.` to match newline            |
| `y`  | Sticky search (matches from lastIndex) |

---

## Creating a Pattern with `RegExp` Constructor

### Without Global and Case-insensitive Flags

```js
const regex = new RegExp("hello");
```

### With Global and Case-insensitive Flags

```js
const regex = new RegExp("hello", "gi");
```

### Writing Both Pattern and Flags

```js
const pattern = "hello";
const flags = "gi";
const regex = new RegExp(pattern, flags);
```

---

## Creating a Pattern Without `RegExp` Constructor

### With Global and Case-insensitive Flags

```js
const regex = /hello/gi;
```

> This is functionally equivalent to:

```js
const regex = new RegExp("hello", "gi");
```

---

## RegExp Object Methods

### `.test()`

Tests if a pattern exists in a string. Returns `true` or `false`.

```js
/hello/.test("hello world"); // true
```

### `.match()`

Returns an array of all matches.

```js
"hello hello".match(/hello/g); // ['hello', 'hello']
```

### `.search()`

Returns the index of the first match or `-1` if not found.

```js
"hello world".search(/world/); // 6
```

### `.replace()`

Replaces matched substring with another string.

```js
"hello world".replace(/world/, "there"); // 'hello there'
```

---

## RegExp Syntax Explained

### Character Set: `[]`

- `[a-c]`: matches a, b, or c
- `[a-z]`: any lowercase letter
- `[A-Z]`: any uppercase letter
- `[0-3]`: matches 0, 1, 2, or 3
- `[0-9]`: any digit
- `[A-Za-z0-9]`: alphanumeric character

### Escape Character: `\`

- `\.`: matches a literal dot
- `\\`: matches a backslash

### Predefined Character Classes:

- `\d`: any digit `[0-9]`
- `\D`: non-digit
- `\w`: word character `[A-Za-z0-9_]`
- `\W`: non-word character
- `\s`: whitespace
- `\S`: non-whitespace

---

### Anchors:

- `^`: string starts with

  ```js
  /^hello/.test("hello world"); // true
  ```

- `$`: string ends with

  ```js
  /world$/.test("hello world"); // true
  ```

### Dot: `.`

- Matches any character except newline (`\n`)

  ```js
  /h.llo/.test("hello"); // true
  ```

### Quantifiers:

- `*`: 0 or more

  ```js
  /a*/.test(""); // true
  ```

- `+`: 1 or more

  ```js
  /a+/.test("aaa"); // true
  ```

- `?`: 0 or 1

  ```js
  /a?/.test(""); // true
  ```

- `{n}`: exactly n times

  ```js
  /\d{3}/.test("123"); // true
  ```

- `{n,}`: at least n times

  ```js
  /\d{2,}/.test("123"); // true
  ```

- `{n,m}`: between n and m times

  ```js
  /\d{2,4}/.test("1234"); // true
  ```

---

## Other Special Tokens

- `|`: OR

  ```js
  /apple|banana/.test("banana"); // true
  ```

- `()`: Grouping and capturing

  ```js
  /(ab)+/.test("abab"); // true
  ```

- `\b`: Word boundary

  ```js
  /\bword\b/.test("a word here"); // true
  ```

- `[^abc]`: Negation inside character set — matches anything except a, b, or c

  ```js
  /[^abc]/.test("d"); // true
  ```

---

## Summary Table of Regex Elements

| Symbol | Description                                |                  |
| ------ | ------------------------------------------ | ---------------- |
| `[]`   | Character set                              |                  |
| `\`    | Escape special character                   |                  |
| `+`    | One or more                                |                  |
| `.`    | Any character (except newline)             |                  |
| `*`    | Zero or more                               |                  |
| `?`    | Zero or one                                |                  |
| `{}`   | Quantifier for exact, range, or min values |                  |
| `^`    | Start of string                            |                  |
| `$`    | End of string                              |                  |
| \`     | \`                                         | Alternation (OR) |
| `()`   | Grouping and capturing                     |                  |
| `\d`   | Digit                                      |                  |
| `\D`   | Non-digit                                  |                  |
| `\w`   | Word character                             |                  |
| `\W`   | Non-word character                         |                  |
| `\s`   | Whitespace                                 |                  |
| `\S`   | Non-whitespace                             |                  |
| `\b`   | Word boundary                              |                  |

---

## Exact Match Example

```js
/^hello$/.test("hello"); // true (exact match only)
```
