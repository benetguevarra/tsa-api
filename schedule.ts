import { Router } from "express";

const router = Router();

// Get full schedule
router.get("/", (req, res) => {
  res.json({ message: "Schedule list" });
});

// Get schedule for specific job
router.get("/:id", (req, res) => {
  res.json({ message: `Schedule for job ID ${req.params.id}` });
});

// Add schedule entry
router.post("/", (req, res) => {
  res.json({ message: "Schedule entry created", schedule: req.body });
});

// Update schedule
router.put("/:id", (req, res) => {
  res.json({ message: `Schedule entry ${req.params.id} updated`, data: req.body });
});

// Delete schedule entry
router.delete("/:id", (req, res) => {
  res.json({ message: `Schedule entry ${req.params.id} deleted` });
});

export default router;
