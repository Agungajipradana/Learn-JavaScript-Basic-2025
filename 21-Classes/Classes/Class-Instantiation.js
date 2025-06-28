// =====================================================
// CLASS INSTANTIATION IN JAVASCRIPT
// =====================================================

/*
  Instantiation is the process of creating a specific object (instance)
  from a class using the `new` keyword.

  Syntax:
    const object = new ClassName(arguments);
*/

// -----------------------------------------------------
// 1. Basic Example — Instantiating a Simple Class
// -----------------------------------------------------
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound.`;
  }
}

// Instantiating the class using `new`
const cat = new Animal("Whiskers");
console.log("[Basic] Animal Name:", cat.name); // Whiskers
console.log("[Basic] Animal Speak:", cat.speak()); // Whiskers makes a sound.

// -----------------------------------------------------
// 2. Instantiating Multiple Objects from Same Class
// -----------------------------------------------------
const dog = new Animal("Buddy");
const bird = new Animal("Tweety");

console.log("[Multiple Instances] Dog:", dog.name); // Buddy
console.log("[Multiple Instances] Bird:", bird.name); // Tweety

// -----------------------------------------------------
// 3. Instantiation with Multiple Parameters
// -----------------------------------------------------
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} by ${this.author}, published in ${this.year}`;
  }
}

const book1 = new Book("1984", "George Orwell", 1949);
const book2 = new Book("Clean Code", "Robert C. Martin", 2008);

console.log("[Book Summary 1]", book1.getSummary()); // 1984 by George Orwell, published in 1949
console.log("[Book Summary 2]", book2.getSummary()); // Clean Code by Robert C. Martin, published in 2008

// -----------------------------------------------------
// 4. Real-World Use Case — Product Model for Online Store
// -----------------------------------------------------
class Product {
  constructor(id, name, price, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  isAvailable() {
    return this.stock > 0;
  }

  displayInfo() {
    return `${this.name} ($${this.price}) - ${
      this.isAvailable() ? "In Stock" : "Out of Stock"
    }`;
  }
}

const laptop = new Product(101, "Laptop", 1200, 5);
const headphones = new Product(102, "Headphones", 150, 0);

console.log("[Product Info 1]", laptop.displayInfo()); // Laptop ($1200) - In Stock
console.log("[Product Info 2]", headphones.displayInfo()); // Headphones ($150) - Out of Stock

// -----------------------------------------------------
// 5. Advanced — Instantiating and Storing Objects in Arrays
// -----------------------------------------------------
const cartItems = [
  new Product(201, "Keyboard", 50, 10),
  new Product(202, "Mouse", 25, 0),
  new Product(203, "Monitor", 300, 3),
];

// Display all products in the cart
console.log("[Cart Items]");
cartItems.forEach((item) => {
  console.log(`- ${item.displayInfo()}`);
});

/*
  Output:
  - Keyboard ($50) - In Stock
  - Mouse ($25) - Out of Stock
  - Monitor ($300) - In Stock
*/

// -----------------------------------------------------
// SUMMARY:
// - Use `new ClassName()` to create a new instance.
// - Each instance is independent with its own data.
// - Ideal for managing data models (e.g. users, products, orders).
// -----------------------------------------------------
