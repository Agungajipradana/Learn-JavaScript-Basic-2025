// =====================================================
// DEFAULT VALUES WITH CONSTRUCTOR IN JAVASCRIPT
// =====================================================

/*
  In JavaScript, constructor parameters can have default values.
  This helps prevent undefined values when arguments are not provided
  during class instantiation.
*/

// -----------------------------------------------------
// 1. Basic Example — One Default Parameter
// -----------------------------------------------------
class User {
  constructor(name = "Guest") {
    this.name = name;
  }

  greet() {
    return `Hello, ${this.name}`;
  }
}

const user1 = new User("Olivia");
const user2 = new User(); // No argument, uses default

console.log("[Basic] User 1:", user1.greet()); // Hello, Olivia
console.log("[Basic] User 2:", user2.greet()); // Hello, Guest

// -----------------------------------------------------
// 2. Multiple Default Parameters
// -----------------------------------------------------
class Book {
  constructor(title = "Untitled", author = "Unknown", year = 2020) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} by ${this.author}, published in ${this.year}`;
  }
}

const book1 = new Book("Atomic Habits", "James Clear", 2018);
const book2 = new Book("Mystery Book"); // Only title provided

console.log("[Book 1]", book1.getSummary()); // Atomic Habits by James Clear, published in 2018
console.log("[Book 2]", book2.getSummary()); // Mystery Book by Unknown, published in 2020

// -----------------------------------------------------
// 3. Constructor with Default Object Parameter
// -----------------------------------------------------
class Settings {
  constructor({ theme = "light", notifications = true } = {}) {
    this.theme = theme;
    this.notifications = notifications;
  }

  display() {
    return `Theme: ${this.theme}, Notifications: ${
      this.notifications ? "On" : "Off"
    }`;
  }
}

const settings1 = new Settings({ theme: "dark" });
const settings2 = new Settings(); // No arguments

console.log("[Settings 1]", settings1.display()); // Theme: dark, Notifications: On
console.log("[Settings 2]", settings2.display()); // Theme: light, Notifications: On

// -----------------------------------------------------
// 4. Real-World Case — Product with Optional Details
// -----------------------------------------------------
class Product {
  constructor(
    name,
    price = 0,
    stock = 0,
    description = "No description available"
  ) {
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.description = description;
  }

  info() {
    return `${this.name} - $${this.price} (${this.stock} in stock)\nDescription: ${this.description}`;
  }
}

const phone = new Product(
  "Smartphone",
  699,
  10,
  "Latest model with OLED display"
);
const charger = new Product("Charger"); // Only name provided

console.log("[Product 1]\n" + phone.info());
console.log("[Product 2]\n" + charger.info());

/*
  Output:
  Product 1
  Smartphone - $699 (10 in stock)
  Description: Latest model with OLED display

  Product 2
  Charger - $0 (0 in stock)
  Description: No description available
*/

// -----------------------------------------------------
// SUMMARY:
// - Default values in constructor parameters prevent errors when missing arguments.
// - You can combine regular, default, and destructured parameters.
// - Useful for optional configuration, user input, and model creation.
// -----------------------------------------------------
