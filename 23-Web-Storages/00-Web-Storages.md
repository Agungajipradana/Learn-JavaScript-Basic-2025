# JavaScript Web Storage

## HTML5 Web Storage

HTML5 introduced **Web Storage**, a feature that allows web applications to store data in the browser. Unlike cookies, the data is stored locally and is not sent with every server request, making it more efficient for client-side data management.

There are two main types of Web Storage:

- `localStorage`
- `sessionStorage`

Both store data as key-value pairs in the browser.

---

## sessionStorage

- Stores data for **a single session**.
- Data is cleared when the **browser tab is closed**.
- Useful for storing temporary data like form inputs, filters, etc.

### Example:

```javascript
sessionStorage.setItem("username", "johnDoe");
const user = sessionStorage.getItem("username");
console.log(user); // Output: "johnDoe"
```

---

## localStorage

- Stores data with **no expiration time**.
- Data persists even after the browser is closed.
- Useful for storing data that needs to be available across sessions.

### Example:

```javascript
localStorage.setItem("theme", "dark");
const theme = localStorage.getItem("theme");
console.log(theme); // Output: "dark"
```

---

## Use Cases of Web Storage

- Remembering user preferences (e.g. theme, language).
- Caching data for offline use.
- Saving draft form inputs.
- Maintaining authentication tokens on the client side (with caution).
- Tracking session activity.

---

## HTML5 Web Storage Objects

### `window.localStorage`

Refers to the **localStorage** object. It is used for storing long-term data in the browser.

### `window.sessionStorage`

Refers to the **sessionStorage** object. It is used for storing temporary data in a single browser tab.

---

## Web Storage Methods

### `localStorage.setItem(key, value)`

Stores a value under a specified key.

```javascript
localStorage.setItem("language", "English");
```

---

### `localStorage.getItem(key)`

Retrieves the value stored under the specified key.

```javascript
const language = localStorage.getItem("language");
console.log(language); // Output: "English"
```

---

### `localStorage.removeItem(key)`

Removes the key and its value from localStorage.

```javascript
localStorage.removeItem("language");
```

---

### `localStorage.clear()`

Removes **all items** from localStorage.

```javascript
localStorage.clear();
```

---

### `localStorage.key(index)`

Returns the name of the key at the specified index.

```javascript
const firstKey = localStorage.key(0);
console.log(firstKey);
```

---

## Setting Item to the localStorage

```javascript
localStorage.setItem("mode", "light");
```

---

## Getting Item from localStorage

```javascript
const mode = localStorage.getItem("mode");
console.log(mode); // Output: "light"
```

---

## Clearing the localStorage

```javascript
localStorage.clear();
```

---
