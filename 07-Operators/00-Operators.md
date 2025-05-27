# JavaScript Operators (Summary)

## 1. Assignment Operators

| Operator | Description         | Example   |
| -------- | ------------------- | --------- |
| =        | Assign              | `x = 5`   |
| +=       | Add and assign      | `x += 3`  |
| -=       | Subtract and assign | `x -= 2`  |
| \*=      | Multiply and assign | `x *= 4`  |
| /=       | Divide and assign   | `x /= 2`  |
| %=       | Modulus and assign  | `x %= 3`  |
| \*\*=    | Exponent and assign | `x **= 2` |

---

## 2. Arithmetic Operators

| Operator | Description    | Example  |
| -------- | -------------- | -------- |
| +        | Addition       | `a + b`  |
| -        | Subtraction    | `a - b`  |
| \*       | Multiplication | `a * b`  |
| /        | Division       | `a / b`  |
| %        | Modulus        | `a % b`  |
| \*\*     | Exponentiation | `a ** b` |

---

## 3. Comparison Operators

| Operator | Description               | Example              |
| -------- | ------------------------- | -------------------- |
| ==       | Equal (loose)             | `5 == '5' // true`   |
| ===      | Strict equal (type + val) | `5 === '5' // false` |
| !=       | Not equal (loose)         | `5 != '5' // false`  |
| !==      | Strict not equal          | `5 !== '5' // true`  |
| >        | Greater than              | `a > b`              |
| <        | Less than                 | `a < b`              |
| >=       | Greater than or equal     | `a >= b`             |
| <=       | Less than or equal        | `a <= b`             |

---

## 4. Logical Operators

| Operator | Description | Example          |
| -------- | ----------- | ---------------- | --- | ------ |
| &&       | AND         | `true && false`  |
| \|\|     | OR          | `true            |     | false` |
| !        | NOT         | `!true // false` |

---

## 5. Increment Operators

| Operator | Description                | Example                    |
| -------- | -------------------------- | -------------------------- |
| ++x      | Pre-increment (add first)  | `x = 1; y = ++x; // y = 2` |
| x++      | Post-increment (use first) | `x = 1; y = x++; // y = 1` |

---

## 6. Decrement Operators

| Operator | Description                    | Example                    |
| -------- | ------------------------------ | -------------------------- |
| --x      | Pre-decrement (subtract first) | `x = 2; y = --x; // y = 1` |
| x--      | Post-decrement (use first)     | `x = 2; y = x--; // y = 2` |

---

## 7. Ternary Operator

```js
condition ? valueIfTrue : valueIfFalse;
```

Example:

```js
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
```

## 8. Operator Precedence (High to Low)

1. `()` Grouping
2. `++`, `--`, `!` Unary
3. `**` Exponentiation
4. `*`, `/`, `%`
5. `+`, `-`
6. `<`, `1`, `<=`, `>=`
7. `==`, `!=`, `===`, `!==`
8. `&&`
9. `||`
10. `?:` Ternary
11. `=`, `+=`, etc.

Example:

```js
let result = 5 + 3 * 2; // result = 11 (multiplication first)
```
