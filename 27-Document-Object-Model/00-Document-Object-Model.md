# Document Object Model (DOM) in JavaScript

The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as a tree of nodes.

## 1. Getting Elements

You can access HTML elements using various DOM methods.

### Getting Elements by Tag Name

```javascript
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs[0].textContent);
```

### Getting Elements by Class Name

```javascript
const boxes = document.getElementsByClassName("box");
console.log(boxes[0]);
```

### Getting an Element by ID

```javascript
const header = document.getElementById("main-header");
console.log(header.innerText);
```

### Getting Elements Using querySelector / querySelectorAll

```javascript
const firstButton = document.querySelector("button");
const allButtons = document.querySelectorAll("button");
console.log(firstButton);
console.log(allButtons.length);
```

## 2. Adding Attributes

### Adding Attribute using `setAttribute()`

```javascript
const link = document.querySelector("a");
link.setAttribute("target", "_blank");
```

### Adding Attribute Without `setAttribute()`

```javascript
const image = document.querySelector("img");
image.alt = "An awesome picture";
```

### Adding Class using `classList.add()`

```javascript
const box = document.querySelector(".box");
box.classList.add("highlight");
```

### Removing Class using `classList.remove()`

```javascript
const box = document.querySelector(".box");
box.classList.remove("highlight");
```

## 3. Adding Text to HTML Element

### Adding Text using `textContent`

```javascript
const title = document.querySelector("#title");
title.textContent = "Welcome to My Website";
```

### Adding Text or HTML using `innerHTML`

```javascript
const content = document.querySelector(".content");

// As plain text
content.innerHTML = "This is <b>plain text</b>.";

// As HTML
content.innerHTML = "<p>This is <strong>formatted</strong> text.</p>";
```

## 4. Adding Style

### Adding Style Color

```javascript
const title = document.querySelector("#title");
title.style.color = "blue";
```

### Adding Style Background Color

```javascript
const box = document.querySelector(".box");
box.style.backgroundColor = "#f0f0f0";
```

### Adding Style Font Size

```javascript
const paragraph = document.querySelector("p");
paragraph.style.fontSize = "18px";
```

---

## Additional Tips

- The `querySelector` method returns the **first** matching element.
- `querySelectorAll` returns a **NodeList** of **all** matching elements.
- `textContent` is safer than `innerHTML` if you're only working with text (no HTML tags).

---

## Practice Example

```html
<!-- Sample HTML -->
<div id="main-header">Header</div>
<div class="box">Box 1</div>
<div class="box">Box 2</div>
<p>Hello world</p>
<button>Click Me</button>
<a href="https://example.com">Visit</a>
<img src="image.jpg" />
```

```javascript
// JavaScript Example
const header = document.getElementById("main-header");
header.style.color = "green";
header.textContent = "Updated Header";

const boxes = document.getElementsByClassName("box");
for (let box of boxes) {
  box.classList.add("active");
}
```
