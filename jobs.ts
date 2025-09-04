import { Router } from "express";

const router = Router();

// Get all jobs
router.get("/", (req, res) => {
  res.json({ message: "List of all jobs" });
});

// Get one job
router.get("/:id", (req, res) => {
  res.json({ message: `Job with ID ${req.params.id}` });
});

// Create new job
router.post("/", (req, res) => {
  res.json({ message: "Job created", job: req.body });
});

// Update job
router.put("/:id", (req, res) => {
  res.json({ message: `Job ${req.params.id} updated`, data: req.body });
});

// Delete job
router.delete("/:id", (req, res) => {
  res.json({ message: `Job ${req.params.id} deleted` });
});

export default router;
