// =====================================================
// GETTER IN JAVASCRIPT CLASSES
// =====================================================

/*
  A "getter" is a special method that allows you to access a computed
  or derived property as if it were a regular property.

  It is defined using the `get` keyword inside a class.

  Syntax:
    get propertyName() {
      return value;
    }
*/

// -----------------------------------------------------
// 1. Basic Example — Getter for Full Name
// -----------------------------------------------------
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person("Emma", "Stone");
console.log("[Full Name Getter]", person.fullName); // Emma Stone

// -----------------------------------------------------
// 2. Getter Based on Internal Logic
// -----------------------------------------------------
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }

  get fahrenheit() {
    return (this.celsius * 9) / 5 + 32;
  }
}

const temp = new Temperature(25);
console.log("[Celsius]", temp.celsius); // 25
console.log("[Fahrenheit Getter]", temp.fahrenheit); // 77

// -----------------------------------------------------
// 3. Getter for Formatted Display
// -----------------------------------------------------
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  get label() {
    return `${this.name} - $${this.price.toFixed(2)}`;
  }
}

const product = new Product("Laptop", 1299.99);
console.log("[Product Label Getter]", product.label); // Laptop - $1299.99

// -----------------------------------------------------
// 4. Real-World Case — Blog Post Summary
// -----------------------------------------------------
class BlogPost {
  constructor(title, content, author = "Anonymous") {
    this.title = title;
    this.content = content;
    this.author = author;
    this.createdAt = new Date();
  }

  get summary() {
    return `${this.title} by ${
      this.author
    } on ${this.createdAt.toDateString()}`;
  }
}

const post = new BlogPost(
  "Understanding Getters",
  "This article explains getters..."
);
console.log("[BlogPost Summary Getter]", post.summary);
// Understanding Getters by Anonymous on <current date>

// -----------------------------------------------------
// 5. Advanced Case — Inventory Item with Availability
// -----------------------------------------------------
class InventoryItem {
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
  }

  get isAvailable() {
    return this.quantity > 0;
  }

  get status() {
    return this.isAvailable ? "In Stock" : "Out of Stock";
  }
}

const item1 = new InventoryItem("Monitor", 3);
const item2 = new InventoryItem("USB Cable", 0);

console.log("[Inventory Item 1] Status:", item1.status); // In Stock
console.log("[Inventory Item 2] Status:", item2.status); // Out of Stock

// -----------------------------------------------------
// SUMMARY:
// - Getters allow you to define computed properties.
// - Useful for formatting, calculation, and clean access to logic.
// - Accessed like normal properties: `object.property`, not `object.property()`.
// -----------------------------------------------------
