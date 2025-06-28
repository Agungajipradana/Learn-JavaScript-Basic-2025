// =====================================================
// CLASS CONSTRUCTOR IN JAVASCRIPT
// =====================================================

/*
  The `constructor()` method is a special function inside a class
  that gets called automatically when a new object is created from the class.

  It is used to initialize object properties.
*/

// -----------------------------------------------------
// 1. Basic Example — Constructor with One Parameter
// -----------------------------------------------------
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

const person1 = new Person("Sophia");
console.log("[Basic] Person Name:", person1.name); // Sophia
console.log("[Basic] Greeting:", person1.greet()); // Hello, my name is Sophia

// -----------------------------------------------------
// 2. Constructor with Multiple Parameters
// -----------------------------------------------------
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const rect = new Rectangle(5, 10);
console.log("[Rectangle] Width:", rect.width); // 5
console.log("[Rectangle] Height:", rect.height); // 10
console.log("[Rectangle] Area:", rect.area()); // 50

// -----------------------------------------------------
// 3. Using Default Values in Constructor
// -----------------------------------------------------
class User {
  constructor(username = "guest", role = "user") {
    this.username = username;
    this.role = role;
  }

  getInfo() {
    return `${this.username} is a ${this.role}`;
  }
}

const defaultUser = new User();
console.log("[Default User]", defaultUser.getInfo()); // guest is a user

const adminUser = new User("admin01", "admin");
console.log("[Admin User]", adminUser.getInfo()); // admin01 is a admin

// -----------------------------------------------------
// 4. Constructor with Object Parameter (Flexible Design)
// -----------------------------------------------------
class Product {
  constructor({ id, name, price = 0, stock = 0 }) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  summary() {
    return `${this.name} - $${this.price} (${this.stock} in stock)`;
  }
}

const product1 = new Product({ id: 1, name: "Tablet", price: 499, stock: 12 });
const product2 = new Product({ id: 2, name: "USB Cable" });

console.log("[Product 1]", product1.summary()); // Tablet - $499 (12 in stock)
console.log("[Product 2]", product2.summary()); // USB Cable - $0 (0 in stock)

// -----------------------------------------------------
// 5. Real-World Use Case — Creating Blog Post Instances
// -----------------------------------------------------
class BlogPost {
  constructor(title, content, author = "Anonymous") {
    this.title = title;
    this.content = content;
    this.author = author;
    this.createdAt = new Date(); // Timestamp
  }

  preview() {
    return `${this.title} by ${
      this.author
    } on ${this.createdAt.toDateString()}`;
  }
}

const post = new BlogPost(
  "Understanding Constructors",
  "This article explains constructors..."
);
console.log("[BlogPost Preview]", post.preview());
/*
  Output example:
  Understanding Constructors by Anonymous on Sat Jun 29 2025
*/

// -----------------------------------------------------
// SUMMARY:
// - The `constructor` is the initialization method for class instances.
// - It sets initial values for object properties.
// - Supports default values and object destructuring.
// - Widely used in modeling real-world data (users, posts, products, etc).
// -----------------------------------------------------
