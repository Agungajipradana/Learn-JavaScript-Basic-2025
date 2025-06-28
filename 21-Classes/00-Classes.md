# JavaScript Classes

JavaScript `class` syntax is a modern way to create objects and deal with object-oriented programming (OOP). Introduced in ECMAScript 2015 (ES6), classes provide a cleaner and more concise way to write constructor functions and manage inheritance.

---

## 1. Defining a Class

A class is defined using the `class` keyword followed by the class name and a block of code containing methods and a constructor.

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}
```

---

## 2. Class Instantiation

You can create an instance (object) from a class using the `new` keyword.

```javascript
const john = new Person("John");
console.log(john.name); // Output: John
```

---

## 3. Class Constructor

The `constructor()` method is a special method for initializing objects created from the class.

```javascript
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}
```

---

## 4. Default Values with Constructor

You can assign default values to parameters in the constructor.

```javascript
class User {
  constructor(name = "Guest") {
    this.name = name;
  }
}

const user1 = new User();
console.log(user1.name); // Output: Guest
```

---

## 5. Class Methods

You can define methods inside a class, and they will be added to the prototype of instances.

```javascript
class Calculator {
  add(a, b) {
    return a + b;
  }
}

const calc = new Calculator();
console.log(calc.add(5, 3)); // Output: 8
```

---

## 6. Properties with Initial Value

You can define properties directly with initial values inside the class body (class fields syntax).

```javascript
class Counter {
  count = 0;

  increment() {
    this.count++;
  }
}
```

---

## 7. Getter

Getter methods allow you to define how to retrieve a property.

```javascript
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }
}

const c = new Circle(5);
console.log(c.area); // Output: 78.53981633974483
```

---

## 8. Setter

Setter methods allow you to control how a property is set.

```javascript
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
temp.fahrenheit = 212;
console.log(temp._celsius); // Output: 100
```

---

## 9. Static Method

Static methods belong to the class itself, not the instance.

```javascript
class MathUtils {
  static square(x) {
    return x * x;
  }
}

console.log(MathUtils.square(4)); // Output: 16
```

---

## 10. Inheritance

Use the `extends` keyword to create a subclass that inherits from another class.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Rex");
dog.speak(); // Rex makes a noise.
dog.bark(); // Rex barks.
```

---

## 11. Overriding Methods

A subclass can override methods defined in its parent class.

```javascript
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat meows");
  }
}

const cat = new Cat();
cat.speak(); // Output: Cat meows
```

---

## Final Notes

- JavaScript classes are syntactic sugar over its prototype-based inheritance.
- Use classes to organize and structure your code more cleanly and maintainably.
- ES6 classes help bridge the gap between JavaScript and other class-based OOP languages like Java or C++.

---
