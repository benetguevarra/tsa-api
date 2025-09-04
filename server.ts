import "dotenv/config";
import express from "express";
import cors from "cors";

import clients from "./routes/clients.js";
import jobs from "./routes/jobs.js";
import quotes from "./routes/quotes.js";
import schedule from "./routes/schedule.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (_,res)=>res.json({ok:true}));

app.use("/clients", clients);
app.use("/jobs", jobs);
app.use("/quotes", quotes);
app.use("/schedule", schedule);

const port = process.env.PORT || 4000;
app.listen(port, ()=>console.log(`API on :${port}`));
