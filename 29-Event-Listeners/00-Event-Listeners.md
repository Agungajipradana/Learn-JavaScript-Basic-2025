# Event Listeners in JavaScript

In JavaScript, **Event Listeners** are functions that wait for specific user interactions (like clicks, typing, or mouse movement) and respond when those events happen. This makes your web pages interactive and dynamic.

---

## 1. Event Listeners

To listen to events, use the `addEventListener()` method:

```javascript
element.addEventListener("eventType", callback);
```

Example:

```javascript
const button = document.querySelector("#submitBtn");

button.addEventListener("click", () => {
  console.log("Button clicked!");
});
```

You can also remove a listener using `removeEventListener()`.

---

## 2. Click Event

Triggered when the user clicks on an element (usually with the left mouse button):

```javascript
const card = document.querySelector(".card");

card.addEventListener("click", () => {
  card.classList.toggle("active");
});
```

---

## 3. Double Click (dblclick)

Triggered when the user double-clicks an element:

```javascript
const box = document.querySelector("#box");

box.addEventListener("dblclick", () => {
  box.style.backgroundColor = "skyblue";
});
```

---

## 4. Mouse Enter

Triggered when the mouse enters the boundaries of an element:

```javascript
const image = document.querySelector("img");

image.addEventListener("mouseenter", () => {
  image.style.border = "2px solid #00d8ff";
});
```

For exiting, you can use `mouseleave` or `mouseout`.

---

## 5. Getting Value from an Input Element

You can get the value from an input using `.value`:

```javascript
const input = document.querySelector("#username");
const display = document.querySelector("#displayName");

input.addEventListener("input", () => {
  display.textContent = input.value;
});
```

---

## 6. Input Event and Change Event

### `input`

Fires every time the value changes (useful for live feedback):

```javascript
input.addEventListener("input", (e) => {
  console.log("Typing...", e.target.value);
});
```

### `change`

Fires when the user finishes editing and moves away from the field (e.g., select, radio, checkbox):

```javascript
const dropdown = document.querySelector("#category");

dropdown.addEventListener("change", (e) => {
  console.log("Selected:", e.target.value);
});
```

---

## 7. Blur Event

`blur` is triggered when an input element loses focus:

```javascript
input.addEventListener("blur", () => {
  console.log("Input field lost focus");
});
```

Useful for validation after the user finishes typing.

---

## 8. Key Events: `keypress`, `keydown`, `keyup`

These events handle keyboard interaction.

### `keydown`

Fires when the key is pressed down:

```javascript
document.addEventListener("keydown", (e) => {
  console.log("Key down:", e.key);
});
```

### `keyup`

Fires when the key is released:

```javascript
document.addEventListener("keyup", (e) => {
  console.log("Key up:", e.key);
});
```

### `keypress` (Deprecated)

Fires while a character key is pressed (doesn’t detect non-character keys). It's now considered deprecated in favor of `keydown`.

---

## Summary Table

| Event      | Description                                       |
| ---------- | ------------------------------------------------- |
| click      | Triggered on a single mouse click                 |
| dblclick   | Triggered on a double mouse click                 |
| mouseenter | Triggered when the mouse enters an element        |
| input      | Fires whenever user types in an input             |
| change     | Fires when an input loses focus and value changes |
| blur       | Fires when an input loses focus                   |
| keydown    | Fires when a key is pressed down                  |
| keyup      | Fires when a key is released                      |
| keypress   | (Deprecated) Fires during key press               |

---

## Best Practices

- Always name your event handlers descriptively (e.g., `handleFormSubmit`, `onCardClick`)
- Detach event listeners if they are no longer needed (e.g., for memory optimization)
- Use `e.preventDefault()` to stop default behavior when needed
- Consider accessibility and keyboard support in interactive elements

---

With `addEventListener`, JavaScript allows you to build highly interactive web experiences by responding to user behavior in real-time.
