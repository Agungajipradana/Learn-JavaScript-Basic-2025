// =====================================================
// JAVASCRIPT ERROR HANDLING EXAMPLES
// =====================================================

// -----------------------------------------------------
// try...catch...finally
// -----------------------------------------------------
try {
  console.log("Start of try block");
  let result = undefinedVariable + 1; // ReferenceError
} catch (err) {
  console.error("Caught an error:", err.message);
} finally {
  console.log("Finally block always executes");
}

// -----------------------------------------------------
// ReferenceError Example
// -----------------------------------------------------
try {
  console.log(notDeclaredVar); // ReferenceError
} catch (err) {
  console.error("[ReferenceError]", err.message); // notDeclaredVar is not defined
}

// -----------------------------------------------------
// SyntaxError Example using eval()
// -----------------------------------------------------
try {
  eval("function () {"); // SyntaxError
} catch (err) {
  console.error("[SyntaxError]", err.message);
}

// -----------------------------------------------------
// TypeError Example
// -----------------------------------------------------
try {
  const num = 123;
  num(); // TypeError: num is not a function
} catch (err) {
  console.error("[TypeError]", err.message);
}

// -----------------------------------------------------
// Express.js Real Case: Error Handling in Backend API
// -----------------------------------------------------

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Sample database
const users = [
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

// -----------------------------------------------------
// Middleware: Error Logger
// -----------------------------------------------------
function errorLogger(err, req, res, next) {
  console.error("[ERROR LOG]");
  console.error("Message:", err.message);
  next(err);
}

// -----------------------------------------------------
// Middleware: Error Handler
// -----------------------------------------------------
function errorHandler(err, req, res, next) {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
}

// -----------------------------------------------------
// GET /users/:id — Get user by ID
// -----------------------------------------------------
app.get("/users/:id", (req, res, next) => {
  try {
    const userId = parseInt(req.params.id);
    if (isNaN(userId)) {
      throw { status: 400, message: "Invalid ID format" };
    }

    const user = users.find((u) => u.id === userId);
    if (!user) {
      throw { status: 404, message: "User not found" };
    }

    res.json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
});

// -----------------------------------------------------
// POST /users — Create user with validation
// -----------------------------------------------------
app.post("/users", (req, res, next) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      throw { status: 400, message: "Name and email are required" };
    }

    const newUser = {
      id: users.length + 1,
      name,
      email,
    };

    users.push(newUser);
    res.status(201).json({ success: true, data: newUser });
  } catch (err) {
    next(err);
  }
});

// -----------------------------------------------------
// GET /async-error — Simulate async error
// -----------------------------------------------------
app.get("/async-error", async (req, res, next) => {
  try {
    await simulateDatabaseError(); // Will reject
    res.send("Success");
  } catch (err) {
    next(err);
  }
});

// -----------------------------------------------------
// Simulated async function with error
// -----------------------------------------------------
async function simulateDatabaseError() {
  return Promise.reject(new Error("Database connection failed"));
}

// -----------------------------------------------------
// Use Error Middlewares
// -----------------------------------------------------
app.use(errorLogger);
app.use(errorHandler);

// -----------------------------------------------------
// Start Server
// -----------------------------------------------------
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
