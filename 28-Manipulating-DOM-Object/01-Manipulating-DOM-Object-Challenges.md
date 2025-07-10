# JavaScript DOM Clean Code Challenges

Mastering DOM manipulation is not only about making things work—it's also about writing **readable**, **maintainable**, and **scalable** code. These challenges guide you through improving code quality while working with the DOM.

---

## Easy Level

1. **Meaningful element references**  
   Rename ambiguous variables like `x` or `el` into more meaningful names like `headerTitle`, `submitButton`, or `userCard`.

2. **Avoid inline styles**  
   Instead of applying styles via `element.style`, define reusable CSS classes and toggle them via `classList`.

3. **Use `querySelector` over older methods**  
   Replace legacy methods (`getElementById`, `getElementsByTagName`) with `querySelector` and `querySelectorAll` for consistency and flexibility.

4. **Refactor deeply nested DOM access**  
   If you're accessing the same nested element multiple times, cache it in a variable instead of repeating the query.

5. **Use `classList` methods instead of `className`**  
   Replace direct assignments like `element.className = "..."` with cleaner methods like `classList.add/remove/toggle`.

6. **Separate DOM selection and manipulation**  
   First select the element, store it in a variable, then apply changes. Avoid chaining these actions in a single line.

7. **Consistent formatting for chained methods**  
   When chaining methods like `classList.add().remove()`, use consistent line breaks and indentation for readability.

8. **Use `textContent` over `innerHTML` for plain text**  
   When inserting plain text, prefer `textContent` to avoid unintended HTML injection and improve clarity.

9. **Use event delegation**  
   Instead of attaching many listeners to child elements, attach one to a parent and delegate based on `event.target`.

10. **Use `const` and `let` appropriately**  
    Use `const` for elements that won’t be reassigned, and `let` only when reassignment is needed.

---

## Medium Level

1. **Encapsulate DOM logic into functions**  
   Abstract repetitive DOM operations into functions like `createCard(title, content)`.

2. **Refactor repetitive DOM manipulation**  
   If multiple parts of your app apply the same DOM logic (e.g., hide/show), refactor it into a reusable helper.

3. **Implement a DOM updater function**  
   Instead of setting multiple properties manually, create a single `updateUserCard(userData)` function to update all UI fields.

4. **Separate concerns: data vs. DOM**  
   Don't mix data logic and DOM manipulation in the same function. Transform data first, then render.

5. **Use event handler naming conventions**  
   Name event handlers descriptively like `handleSubmitClick`, not just `submit` or `clickHandler`.

6. **Extract style logic**  
   Move repeated style logic into CSS classes and apply using `classList`.

7. **Avoid excessive DOM queries**  
   Query once, store the result in a variable, and reuse it to avoid performance overhead.

8. **Clean up after event listeners**  
   Use `removeEventListener` when needed, especially in single-page apps or modal components.

9. **Use dataset attributes over custom attributes**  
   Access custom data like `data-user-id` using `element.dataset.userId` instead of `getAttribute`.

10. **Batch DOM updates**  
    Group DOM reads/writes together to avoid layout thrashing (e.g., don’t alternate reads and writes inside a loop).

---

## Hard Level

1. **Create a dynamic component module**  
   Build a modular component (e.g., modal, toast, tooltip) that encapsulates its DOM creation, rendering, and event logic.

2. **Design a reusable form renderer**  
   Build a function that takes a config object and generates a dynamic HTML form with validation hooks.

3. **Build a lightweight DOM framework**  
   Create a utility with functions like `el(type, attrs, children)` that simplifies DOM creation and appending.

4. **Refactor legacy jQuery-style code**  
   Take imperative or outdated jQuery-like code and refactor it into modern, clean JavaScript with ES6+ syntax.

5. **Implement a toggle system**  
   Create a clean, reusable `toggleVisibility(element)` utility using class toggles and ARIA attributes.

6. **Create a reusable dropdown menu**  
   Design a component that encapsulates logic for opening, closing, and selecting items from a dropdown menu.

7. **Create a live search component**  
   Build a responsive input-based search UI that filters data and renders results without external frameworks.

8. **Build a carousel using clean architecture**  
   Divide the carousel into distinct concerns: data management, rendering, and controls.

9. **Design DOM with accessibility in mind**  
   Ensure your DOM structure uses semantic roles, labels, keyboard interaction, and screen reader support.

10. **Write testable DOM functions**  
    Refactor logic-heavy DOM functions to be pure or dependency-injected, so they can be tested in isolation.
