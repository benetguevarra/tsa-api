import { Router } from "express";

const router = Router();

// Get all clients
router.get("/", (req, res) => {
  res.json({ message: "List of all clients" });
});

// Get one client by ID
router.get("/:id", (req, res) => {
  res.json({ message: `Client with ID ${req.params.id}` });
});

// Create new client
router.post("/", (req, res) => {
  res.json({ message: "Client created", client: req.body });
});

// Update client
router.put("/:id", (req, res) => {
  res.json({ message: `Client ${req.params.id} updated`, data: req.body });
});

// Delete client
router.delete("/:id", (req, res) => {
  res.json({ message: `Client ${req.params.id} deleted` });
});

export default router;
