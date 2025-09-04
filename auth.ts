import { Router } from "express";

const router = Router();

// User login
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  res.json({ message: "User logged in", email });
});

// User register
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  res.json({ message: "User registered", name, email });
});

// User logout
router.post("/logout", (req, res) => {
  res.json({ message: "User logged out" });
});

export default router;
