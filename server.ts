import express from "express";

// Import routes (make sure each file exports a router)
import clientsRouter from "./clients";
import jobsRouter from "./jobs";
import quotesRouter from "./quotes";
import scheduleRouter from "./schedule";
import authRouter from "./auth";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Server is healthy ✅" });
});

// Attach routers
app.use("/clients", clientsRouter);
app.use("/jobs", jobsRouter);
app.use("/quotes", quotesRouter);
app.use("/schedule", scheduleRouter);
app.use("/auth", authRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
