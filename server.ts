import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.send("TSA API is running 🚀");
});

// Example route for testing
app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Server is healthy ✅" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
