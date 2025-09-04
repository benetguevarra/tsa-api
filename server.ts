import express, { Request, Response } from "express";

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok", message: "Server is healthy ✅" });
});
