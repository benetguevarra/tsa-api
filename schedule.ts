import { Router } from "express";
import { db } from "../lib/db.js";
const r = Router();

r.get("/", async (req,res)=>{
  const date = String(req.query.date||"");
  let q = db.from("schedule").select("*");
  if(date) q = q.eq("date", date);
  const { data, error } = await q;
  if(error) return res.status(500).json({error:error.message});
  res.json(data);
});

export default r;
