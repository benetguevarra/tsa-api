import { Router } from "express";

const router = Router();

// Get all quotes
router.get("/", (req, res) => {
  res.json({ message: "List of all quotes" });
});

// Get one quote
router.get("/:id", (req, res) => {
  res.json({ message: `Quote with ID ${req.params.id}` });
});

// Create new quote
router.post("/", (req, res) => {
  res.json({ message: "Quote created", quote: req.body });
});

// Update quote
router.put("/:id", (req, res) => {
  res.json({ message: `Quote ${req.params.id} updated`, data: req.body });
});

// Delete quote
router.delete("/:id", (req, res) => {
  res.json({ message: `Quote ${req.params.id} deleted` });
});

export default router;
