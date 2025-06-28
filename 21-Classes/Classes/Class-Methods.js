// =====================================================
// CLASS METHODS IN JAVASCRIPT
// =====================================================

/*
  A class method is a function defined inside a class
  that performs an action using the object's data (properties).

  Syntax:
    class ClassName {
      methodName() {
        // logic
      }
    }
*/

// -----------------------------------------------------
// 1. Basic Example — Method That Returns a Message
// -----------------------------------------------------
class Greeter {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    return `Hello, ${this.name}!`;
  }
}

const greeter = new Greeter("Liam");
console.log("[Basic Method]", greeter.sayHello()); // Hello, Liam!

// -----------------------------------------------------
// 2. Method That Uses Internal Logic
// -----------------------------------------------------
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

const c = new Circle(5);
console.log("[Circle Area]", c.getArea()); // ~78.54
console.log("[Circle Circumference]", c.getCircumference()); // ~31.42

// -----------------------------------------------------
// 3. Methods for Updating Object State (Mutators)
// -----------------------------------------------------
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  getValue() {
    return this.count;
  }
}

const counter = new Counter();
counter.increment();
counter.increment();
counter.decrement();
console.log("[Counter Value]", counter.getValue()); // 1

// -----------------------------------------------------
// 4. Real-World Case — Shopping Cart Item
// -----------------------------------------------------
class CartItem {
  constructor(productName, price, quantity = 1) {
    this.productName = productName;
    this.price = price;
    this.quantity = quantity;
  }

  totalPrice() {
    return this.price * this.quantity;
  }

  increaseQty(amount = 1) {
    this.quantity += amount;
  }

  display() {
    return `${this.productName} x${this.quantity} = $${this.totalPrice()}`;
  }
}

const item = new CartItem("Keyboard", 50);
console.log("[Cart Item]", item.display()); // Keyboard x1 = $50
item.increaseQty(2);
console.log("[Cart Item After Increase]", item.display()); // Keyboard x3 = $150

// -----------------------------------------------------
// 5. More Advanced Case — Library Book Management
// -----------------------------------------------------
class Book {
  constructor(title, totalCopies) {
    this.title = title;
    this.totalCopies = totalCopies;
    this.borrowedCopies = 0;
  }

  borrow() {
    if (this.borrowedCopies < this.totalCopies) {
      this.borrowedCopies++;
      return `${
        this.title
      } has been borrowed. (${this.getAvailableCopies()} available)`;
    } else {
      return `${this.title} is currently out of stock.`;
    }
  }

  returnBook() {
    if (this.borrowedCopies > 0) {
      this.borrowedCopies--;
      return `${
        this.title
      } has been returned. (${this.getAvailableCopies()} available)`;
    } else {
      return `No borrowed copies of ${this.title} to return.`;
    }
  }

  getAvailableCopies() {
    return this.totalCopies - this.borrowedCopies;
  }
}

const book = new Book("JavaScript Fundamentals", 2);
console.log(book.borrow()); // 1 borrowed, 1 available
console.log(book.borrow()); // 2 borrowed, 0 available
console.log(book.borrow()); // out of stock
console.log(book.returnBook()); // 1 returned, 1 available
console.log(book.returnBook()); // 2 returned, 2 available
console.log(book.returnBook()); // nothing to return

/*
  Output:
  JavaScript Fundamentals has been borrowed. (1 available)
  JavaScript Fundamentals has been borrowed. (0 available)
  JavaScript Fundamentals is currently out of stock.
  JavaScript Fundamentals has been returned. (1 available)
  JavaScript Fundamentals has been returned. (2 available)
  No borrowed copies of JavaScript Fundamentals to return.
*/

// -----------------------------------------------------
// SUMMARY:
// - Methods are used to define behaviors for class instances.
// - Can read or update internal state (`this.property`).
// - Very useful for real-world logic like carts, inventory, etc.
// -----------------------------------------------------
