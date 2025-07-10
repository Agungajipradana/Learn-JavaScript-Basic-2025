# JavaScript DOM Clean Code Challenges

## Easy Level

1. **Meaningful element references**  
   Rename variables like `x` or `el` to `headerTitle`, `submitButton`, etc., to reflect the element's role.

2. **Avoid inline styles**  
   Instead of directly setting many styles using `element.style`, extract and apply a CSS class.

3. **Use `querySelector` over older methods**  
   Replace `getElementById`, `getElementsByTagName`, etc., with `querySelector` or `querySelectorAll` when possible for consistency.

4. **Refactor deeply nested DOM access**  
   Simplify or cache deeply nested DOM queries to avoid repetition.

5. **Use `classList` methods instead of `className`**  
   Replace `element.className = 'some-class'` with `element.classList.add/remove/toggle`.

6. **Separate DOM selection and manipulation**  
   Avoid mixing selection and manipulation in the same line—select first, then modify.

7. **Consistent formatting for chained methods**  
   Format multi-method chains like `classList.add().remove()` across multiple lines for clarity.

8. **Use `textContent` over `innerHTML` for plain text**  
   Prevent potential XSS and improve clarity by using `textContent` when injecting only text.

9. **Use event delegation**  
   Refactor multiple similar event listeners into a single delegated listener on a parent element.

10. **Use `const` and `let` appropriately**  
    Ensure DOM elements that never reassign use `const`, and use `let` only when mutation is required.

---

## Medium Level

1. **Encapsulate DOM logic into functions**  
   Create reusable functions like `createCard(title, description)` instead of writing inline DOM creation code.

2. **Refactor repetitive DOM manipulation**  
   If the same styling or class logic is applied to multiple elements, extract it into a helper function.

3. **Implement a DOM updater function**  
   Create a clean function like `updateUserCard(userData)` to handle all element updates from data.

4. **Separate concerns: data vs. DOM**  
   Keep data transformation separate from DOM rendering logic.

5. **Use event handler naming conventions**  
   Name handlers like `handleButtonClick` instead of `onClick`.

6. **Extract style logic**  
   Move inline style logic into named classes and toggle via `classList`.

7. **Avoid excessive DOM queries**  
   Cache elements you reuse rather than querying them multiple times.

8. **Clean up after event listeners**  
   Remove event listeners when no longer needed to avoid memory leaks.

9. **Use dataset attributes over custom attributes**  
   Use `element.dataset.userId` instead of `element.getAttribute("data-user-id")`.

10. **Batch DOM updates**  
    Minimize layout thrashing by batching DOM reads and writes together.

---

## Hard Level

1. **Create a dynamic component module**  
   Build a self-contained DOM component (e.g., modal, card, toast) using clean DOM code principles.

2. **Design a reusable form renderer**  
   Render a form dynamically from a config object using clean and modular DOM code.

3. **Build a lightweight DOM framework**  
   Create a simple utility to abstract away repetitive DOM creation (`createElement`, `append`, etc.).

4. **Refactor legacy jQuery-style code**  
   Take jumbled, outdated DOM code and refactor it using modern JS and clean practices.

5. **Implement a toggle system**  
   Build a reusable `toggleElementVisibility()` function that cleanly manages showing/hiding logic with classes.

6. **Create a reusable dropdown menu**  
   Design a dropdown component that encapsulates DOM logic, events, and styling in one clean function/module.

7. **Create a live search component**  
   Build a live search bar using DOM, split logic into input handler, filter function, and result renderer.

8. **Build a carousel using clean architecture**  
   Break a basic carousel into separate logic layers: rendering, events, and data.

9. **Design DOM with accessibility in mind**  
   Refactor DOM code to ensure proper roles, labels, and keyboard navigation are handled cleanly.

10. **Write testable DOM functions**  
    Refactor interactive functions (e.g., show/hide, add/remove) to be testable and decoupled from global DOM access.
