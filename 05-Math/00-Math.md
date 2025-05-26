# 🧮 JavaScript `Math` Object

## 📌 Overview

The `Math` object in JavaScript is a built-in global object that provides mathematical constants and functions. It is **not a constructor**, so you can't instantiate it (`new Math()` is invalid).

---

## 📦 Commonly Used `Math` Methods

### 🔢 Rounding Methods

| Method              | Description                                | Example                   |
|---------------------|--------------------------------------------|---------------------------|
| `Math.round(x)`     | Rounds to the nearest integer              | `Math.round(4.5)` → 5     |
| `Math.floor(x)`     | Rounds down to the nearest integer         | `Math.floor(4.9)` → 4     |
| `Math.ceil(x)`      | Rounds up to the nearest integer           | `Math.ceil(4.1)` → 5      |
| `Math.trunc(x)`     | Removes decimal part (no rounding)         | `Math.trunc(4.9)` → 4     |

---

### 🧮 Arithmetic Methods

| Method              | Description                                | Example                        |
|---------------------|--------------------------------------------|--------------------------------|
| `Math.pow(x, y)`    | Returns x to the power of y                | `Math.pow(2, 3)` → 8           |
| `Math.sqrt(x)`      | Square root of x                           | `Math.sqrt(16)` → 4            |
| `Math.cbrt(x)`      | Cube root of x                             | `Math.cbrt(27)` → 3            |
| `Math.abs(x)`       | Absolute value                             | `Math.abs(-5)` → 5             |

---

### 📈 Min / Max

| Method              | Description                                | Example                           |
|---------------------|--------------------------------------------|-----------------------------------|
| `Math.max(a, b, ...)` | Returns the largest number                | `Math.max(1, 10, 3)` → 10         |
| `Math.min(a, b, ...)` | Returns the smallest number               | `Math.min(1, 10, 3)` → 1          |

---

### 🎲 Random & Constants

| Method / Property       | Description                                    | Example                          |
|--------------------------|------------------------------------------------|----------------------------------|
| `Math.random()`          | Returns a random number between 0 and 1        | `Math.random()` → 0.123...       |
| `Math.PI`                | The value of π (~3.14159)                      | `Math.PI`                        |
| `Math.E`                 | Euler's number (≈ 2.718)                       | `Math.E`                         |
| `Math.LN2`               | Natural log of 2                               | `Math.LN2`                       |
| `Math.LN10`              | Natural log of 10                              | `Math.LN10`                      |

---

### 📐 Trigonometric Methods

| Method              | Description                                | Example                        |
|---------------------|--------------------------------------------|--------------------------------|
| `Math.sin(x)`       | Sine of x (radians)                        | `Math.sin(Math.PI / 2)` → 1   |
| `Math.cos(x)`       | Cosine of x (radians)                     | `Math.cos(0)` → 1             |
| `Math.tan(x)`       | Tangent of x (radians)                    | `Math.tan(Math.PI / 4)` → 1   |

---

### 🔁 Logarithmic & Exponential

| Method              | Description                                | Example                          |
|---------------------|--------------------------------------------|----------------------------------|
| `Math.log(x)`       | Natural log (base e)                       | `Math.log(Math.E)` → 1          |
| `Math.log2(x)`      | Base 2 log                                 | `Math.log2(8)` → 3              |
| `Math.log10(x)`     | Base 10 log                                | `Math.log10(1000)` → 3          |
| `Math.exp(x)`       | e^x                                        | `Math.exp(1)` → ≈ 2.718         |

---

## 🔢 Constants in `Math`

| Property          | Description                            |
|-------------------|----------------------------------------|
| `Math.PI`         | Ratio of circumference to diameter (π) |
| `Math.E`          | Euler’s number                         |
| `Math.SQRT2`      | √2                                     |
| `Math.SQRT1_2`    | √1/2                                   |
| `Math.LN2`        | ln(2)                                  |
| `Math.LN10`       | ln(10)                                 |
| `Math.LOG2E`      | log2(e)                                |
| `Math.LOG10E`     | log10(e)                               |

---

## 🧪 Example Use Cases

```js
console.log(Math.round(4.6));      // 5
console.log(Math.max(10, 20, 30)); // 30
console.log(Math.random() * 100);  // Random number 0–100
console.log(Math.pow(2, 4));       // 16
console.log(Math.sqrt(25));        // 5
```