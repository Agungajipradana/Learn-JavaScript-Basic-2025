// =====================================================
// JAVASCRIPT CLASSES EXAMPLES
// =====================================================

// -----------------------------------------------------
// Defining a Class & Constructor
// -----------------------------------------------------
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// -----------------------------------------------------
// Class Instantiation
// -----------------------------------------------------
const emily = new Person("Emily", 30);
console.log("[Instantiation] Name:", emily.name); // Emily
console.log("[Instantiation] Age:", emily.age); // 30

// -----------------------------------------------------
// Default Values with Constructor
// -----------------------------------------------------
class User {
  constructor(name = "Guest") {
    this.name = name;
  }
}

const defaultUser = new User();
console.log("[Default Constructor Value]", defaultUser.name); // Guest

const namedUser = new User("Daniel");
console.log("[Custom Constructor Value]", namedUser.name); // Daniel

// -----------------------------------------------------
// Class Methods
// -----------------------------------------------------
class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }
}

const calc = new Calculator();
console.log("[Class Method] 3 + 4 =", calc.add(3, 4)); // 7
console.log("[Class Method] 10 - 6 =", calc.subtract(10, 6)); // 4

// -----------------------------------------------------
// Properties with Initial Value
// -----------------------------------------------------
class Counter {
  count = 0;

  increment() {
    this.count++;
  }
}

const counter = new Counter();
console.log("[Initial Property] Before:", counter.count); // 0
counter.increment();
console.log("[Initial Property] After:", counter.count); // 1

// -----------------------------------------------------
// Getter and Setter
// -----------------------------------------------------
class Temperature {
  constructor(celsius) {
    this._celsius = celsius;
  }

  get fahrenheit() {
    return this._celsius * 1.8 + 32;
  }

  set fahrenheit(f) {
    this._celsius = (f - 32) / 1.8;
  }
}

const temp = new Temperature(0);
console.log("[Getter] Celsius to Fahrenheit:", temp.fahrenheit); // 32
temp.fahrenheit = 212;
console.log("[Setter] Fahrenheit to Celsius:", temp._celsius); // 100

// -----------------------------------------------------
// Static Method
// -----------------------------------------------------
class MathUtils {
  static square(x) {
    return x * x;
  }
}

console.log("[Static Method] Square of 5:", MathUtils.square(5)); // 25

// -----------------------------------------------------
// Inheritance
// -----------------------------------------------------
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks.`);
  }
}

const max = new Dog("Max");
max.speak(); // Max makes a sound.
max.bark(); // Max barks.

// -----------------------------------------------------
// Overriding Methods
// -----------------------------------------------------
class Cat extends Animal {
  speak() {
    console.log(`${this.name} meows.`);
  }
}

const luna = new Cat("Luna");
luna.speak(); // Luna meows.
