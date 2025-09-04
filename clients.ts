import { Router } from "express";

const router = Router();

// Example route
router.get("/", (req, res) => {
  res.json({ message: "Clients list" });
});

router.post("/", (req, res) => {
  const newClient = req.body;
  res.json({ message: "Client created", client: newClient });
});

export default router;
