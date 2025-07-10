# JavaScript Event Listener Clean Code Challenges

These challenges help you improve how you work with event listeners in JavaScript. The goal is not just to handle events, but to do it cleanly, maintainably, and with performance in mind.

---

## Easy Level

1. **Meaningful event handler names**  
   Rename functions like `onClick()` or `doStuff()` to names like `handleSubmitClick()` or `toggleSidebar()`.

2. **Use `addEventListener` over inline events**  
   Refactor code using inline attributes like `onclick="..."` into `element.addEventListener()` format.

3. **Avoid anonymous functions**  
   Extract inline callback functions into named functions for clarity and reusability.

4. **Avoid unnecessary global variables**  
   Ensure all event logic is scoped properly and doesn't pollute the global namespace.

5. **Separate event logic from DOM selection**  
   Select DOM elements first, then attach event listeners in a clear and separate step.

6. **Use `const` when referencing elements**  
   Always use `const` to store DOM references unless reassignment is needed.

7. **Keep listeners short and focused**  
   Limit logic inside event callbacks—delegate to other functions if needed.

8. **Prevent default when required**  
   Use `e.preventDefault()` where necessary (e.g., form submission) but not blindly.

9. **Use `e.target` properly**  
   Use `event.target` inside callbacks to interact with the actual clicked/changed element.

10. **Group listeners logically**  
    Organize your event listener attachments together to improve readability and structure.

---

## Medium Level

1. **Debounce or throttle high-frequency events**  
   Apply debounce/throttle logic to events like `scroll`, `resize`, or `input` to avoid performance issues.

2. **Use event delegation**  
   Refactor repeated listeners on child elements into a single parent-level listener.

3. **Detach unused listeners**  
   Use `removeEventListener()` in modals or single-page apps to avoid memory leaks.

4. **Create reusable listener helpers**  
   Abstract repetitive event logic into helper functions like `attachClickLogger()`.

5. **Use named constants for event types**  
   Avoid typos and improve consistency by declaring `const EVENT_CLICK = 'click';`.

6. **Write accessible keyboard navigation**  
   Add keyboard event listeners (`keydown`, `Enter`, `Escape`) to support non-mouse interactions.

7. **Abstract listener binding**  
   Group multiple listeners in functions like `initFormEvents()` for better organization.

8. **Control propagation when needed**  
   Use `event.stopPropagation()` appropriately to manage bubbling.

9. **Dynamic element listeners**  
   Properly attach listeners to dynamically created elements.

10. **Use passive listeners where needed**  
    Improve scroll performance by using `{ passive: true }` on scroll/touch events.

---

## Hard Level

1. **Build a reusable event binder module**  
   Create a utility like `addEvent(el, type, handler)` to centralize all event bindings.

2. **Create a listener registry system**  
   Manage and clean up event listeners across your app using a registry for modular control.

3. **Implement a component lifecycle**  
   Attach/detach listeners within a component’s `mount()` and `destroy()` methods.

4. **Create a custom event dispatcher**  
   Build your own custom events using `CustomEvent` and `dispatchEvent()` for decoupled communication.

5. **Write unit tests for event behavior**  
   Simulate and test event listeners in isolation using testing frameworks (e.g., Jest, Vitest).

6. **Use event mapping configuration**  
   Define event bindings in a config object instead of scattered inline code.

7. **Build a keyboard shortcut system**  
   Implement logic for handling multiple key combos (e.g., Ctrl+S, Shift+Enter).

8. **Design cross-component event handling**  
   Use `CustomEvent` or pub-sub patterns to manage communication across unrelated components.

9. **Optimize listeners in loops/components**  
   Avoid attaching new listeners on every render or iteration—reuse or debounce instead.

10. **Implement a DOM-based plugin architecture**  
    Use attributes or dataset values to auto-initialize modules based on DOM structure and events.
