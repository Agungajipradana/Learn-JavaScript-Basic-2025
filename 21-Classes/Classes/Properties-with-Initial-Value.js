// =====================================================
// PROPERTIES WITH INITIAL VALUE IN JAVASCRIPT CLASSES
// =====================================================

/*
  Properties with initial values are defined directly in the class body,
  outside the constructor. This feature is known as "public class fields"
  and is supported in modern JavaScript (ES2022+).

  Syntax:
    class MyClass {
      property = defaultValue;
    }
*/

// -----------------------------------------------------
// 1. Basic Example — Property with Initial Value
// -----------------------------------------------------
class Counter {
  count = 0; // Initialized outside the constructor

  increment() {
    this.count++;
  }

  getValue() {
    return this.count;
  }
}

const counter = new Counter();
console.log("[Initial Value]", counter.getValue()); // 0
counter.increment();
console.log("[After Increment]", counter.getValue()); // 1

// -----------------------------------------------------
// 2. Multiple Properties with Initial Values
// -----------------------------------------------------
class User {
  name = "Guest";
  role = "user";
  isActive = true;

  getInfo() {
    return `${this.name} (${this.role}) - ${
      this.isActive ? "Active" : "Inactive"
    }`;
  }
}

const user = new User();
console.log("[User Info]", user.getInfo()); // Guest (user) - Active

// -----------------------------------------------------
// 3. Properties Mixed with Constructor Parameters
// -----------------------------------------------------
class Task {
  status = "pending"; // default property

  constructor(title) {
    this.title = title;
  }

  markComplete() {
    this.status = "completed";
  }

  display() {
    return `${this.title} [${this.status}]`;
  }
}

const task = new Task("Finish homework");
console.log("[Before Complete]", task.display()); // Finish homework [pending]
task.markComplete();
console.log("[After Complete]", task.display()); // Finish homework [completed]

// -----------------------------------------------------
// 4. Real-World Use Case — Product with Flags and State
// -----------------------------------------------------
class Product {
  isAvailable = true;
  views = 0;

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  view() {
    this.views++;
  }

  discontinue() {
    this.isAvailable = false;
  }

  info() {
    return `${this.name} - $${this.price} | Views: ${this.views} | ${
      this.isAvailable ? "Available" : "Discontinued"
    }`;
  }
}

const item = new Product("Gaming Mouse", 59.99);
item.view();
item.view();
console.log("[Product Info Before Discontinue]", item.info());
// Gaming Mouse - $59.99 | Views: 2 | Available

item.discontinue();
console.log("[Product Info After Discontinue]", item.info());
// Gaming Mouse - $59.99 | Views: 2 | Discontinued

// -----------------------------------------------------
// 5. Advanced Use Case — Simple Notification System
// -----------------------------------------------------
class Notification {
  timestamp = new Date(); // created at instantiation
  read = false;

  constructor(message, sender = "System") {
    this.message = message;
    this.sender = sender;
  }

  markAsRead() {
    this.read = true;
  }

  display() {
    const status = this.read ? "Read" : "Unread";
    return `[${status}] ${this.message} — from ${
      this.sender
    } at ${this.timestamp.toLocaleString()}`;
  }
}

const notif = new Notification("Your order has shipped", "Store");
console.log("[Notification]", notif.display());
// [Unread] Your order has shipped — from Store at <timestamp>

notif.markAsRead();
console.log("[Notification After Reading]", notif.display());
// [Read] Your order has shipped — from Store at <timestamp>

// -----------------------------------------------------
// SUMMARY:
// - Class fields allow setting default values without using a constructor.
// - Keeps code clean and reduces boilerplate.
// - Useful for flags, counters, booleans, timestamps, and other default states.
// -----------------------------------------------------
