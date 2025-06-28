# JavaScript Class Challenges

## Easy Level

1. **Create a simple class**
   Define a class `Person` with a `name` property and a `sayHello()` method that prints a greeting.

2. **Class with constructor**
   Create a class `Book` that takes `title` and `author` in its constructor and stores them as properties.

3. **Add method to a class**
   Add a `getSummary()` method to the `Book` class that returns a string with title and author.

4. **Create multiple instances**
   Create three instances of the `Book` class with different titles and authors.

5. **Use getter to format property**
   Add a getter to the `Book` class that returns the uppercase version of the book title.

6. **Use setter to sanitize input**
   Create a setter that trims whitespace from the author's name when set.

7. **Use class with default property**
   Add a property `isAvailable = true` by default in the class and log it from an instance.

8. **Log class method output**
   Use `console.log()` to print the result of calling a method on a class instance.

9. **Simple class with arithmetic**
   Create a class `Calculator` with a method `add(a, b)` that returns the result.

10. **Use `typeof` to check class instance**
    Create an instance and use `typeof` and `instanceof` to check its type.

---

## Medium Level

1. **Class inheritance**
   Create a class `Animal`, and a subclass `Dog` that inherits and adds a `bark()` method.

2. **Override parent method**
   Override a method in `Dog` to change its implementation from the `Animal` class.

3. **Use `super()` in constructor**
   In the `Dog` constructor, use `super()` to call the parent `Animal` constructor.

4. **Create class with static method**
   Add a static method `compareAge(a, b)` in a `Person` class to compare two instances by age.

5. **Factory method using static**
   Add a static `createGuestUser()` method in a `User` class that returns a default guest user.

6. **Chained method calls**
   Add multiple methods in a class that return `this` to allow method chaining.

7. **Class with computed property**
   Use a getter to calculate BMI in a `Person` class based on `weight` and `height`.

8. **Encapsulate logic with private field**
   Use `#balance` in a `BankAccount` class and expose it via getter/setter.

9. **Class method calling another method**
   Create a method in a class that internally calls another method of the same class.

10. **Use `instanceof` for behavior**
    Create a function that behaves differently based on whether its argument is a `User`, `Admin`, or `Guest`.

---

## Hard Level

1. **Inheritance in real-world model**
   Create `User`, `Admin`, and `Moderator` classes with different permission sets.

2. **Override with super behavior**
   Override `getPermissions()` in `Admin` but also call `super.getPermissions()` to append more.

3. **Use static method for validation**
   In `FormValidator` class, add static methods to validate email and password strength.

4. **Create reusable logger class**
   Create a `Logger` class with `log()`, `info()`, and `error()` methods that include timestamps.

5. **Abstract class simulation**
   Simulate an abstract `Shape` class and extend it with `Rectangle` and `Circle` that override the `area()` method.

6. **Build class-based data model**
   Build a `Post` class and a `Blog` class that contains and manages multiple `Post` instances.

7. **Class for request simulation**
   Create a `HttpRequest` class with properties like URL, method, headers, and body, and add a `send()` method.

8. **Nested instance structure**
   A `Library` class contains `Book` instances. Add methods to add books and list their titles.

9. **Dynamic method overriding**
   Add a method to change how `describe()` works at runtime using prototype.

10. **Implement mixin logic manually**
    Create a class and manually copy methods from another object (mixin pattern) into its prototype.

---
