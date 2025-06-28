// =====================================================
// DEFINING A CLASS IN JAVASCRIPT
// =====================================================

/*
  In JavaScript, a class is a blueprint for creating objects.
  It can contain properties (data) and methods (functions).
  A class is defined using the `class` keyword.
*/

// -----------------------------------------------------
// 1. Basic Example — Defining and Instantiating a Class
// -----------------------------------------------------
class Animal {
  constructor(name) {
    this.name = name; // property
  }
}

const lion = new Animal("Lion");
console.log("[Basic Class] Name:", lion.name); // Output: Lion

// -----------------------------------------------------
// 2. Class with Multiple Properties and a Method
// -----------------------------------------------------
class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  info() {
    return `${this.brand} was made in ${this.year}`;
  }
}

const car1 = new Car("Toyota", 2020);
console.log("[Car Info]", car1.info()); // Output: Toyota was made in 2020

// -----------------------------------------------------
// 3. Adding Behavior — Method to Update State
// -----------------------------------------------------
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`${this.owner} deposited $${amount}`);
  }

  getBalance() {
    return `${this.owner}'s balance is $${this.balance}`;
  }
}

const account = new BankAccount("Alice", 1000);
account.deposit(500); // Alice deposited $500
console.log(account.getBalance()); // Alice's balance is $1500

// -----------------------------------------------------
// 4. Using Class for Common Real-World Case — Todo Item
// -----------------------------------------------------
class Todo {
  constructor(title) {
    this.title = title;
    this.completed = false;
  }

  markDone() {
    this.completed = true;
  }

  display() {
    return `[${this.completed ? "x" : " "}] ${this.title}`;
  }
}

const task = new Todo("Learn JavaScript Classes");
console.log(task.display()); // [ ] Learn JavaScript Classes
task.markDone();
console.log(task.display()); // [x] Learn JavaScript Classes

// -----------------------------------------------------
// 5. Slightly Advanced — Using Class for User Management
// -----------------------------------------------------
class User {
  constructor(username, email, isAdmin = false) {
    this.username = username;
    this.email = email;
    this.isAdmin = isAdmin;
  }

  promoteToAdmin() {
    this.isAdmin = true;
    console.log(`${this.username} has been promoted to admin.`);
  }

  getInfo() {
    return {
      username: this.username,
      email: this.email,
      role: this.isAdmin ? "admin" : "user",
    };
  }
}

const user1 = new User("john_doe", "john@example.com");
console.log("[User Info Before Promotion]", user1.getInfo());
user1.promoteToAdmin();
console.log("[User Info After Promotion]", user1.getInfo());

/*
  Output:
  [User Info Before Promotion] { username: 'john_doe', email: 'john@example.com', role: 'user' }
  john_doe has been promoted to admin.
  [User Info After Promotion] { username: 'john_doe', email: 'john@example.com', role: 'admin' }
*/

// -----------------------------------------------------
// SUMMARY:
// - Classes provide a template to create structured and reusable objects.
// - Constructor initializes properties.
// - You can define methods inside the class for behavior.
// - Common use cases include models like User, Task, Account, Product, etc.
// -----------------------------------------------------
