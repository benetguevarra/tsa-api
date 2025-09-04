import { Router } from "express";
import { db } from "../lib/db.js";
const r = Router();

r.get("/", async (req,res)=>{
  const q = String(req.query.q||"").toLowerCase();
  const status = String(req.query.status||"");
  let { data, error } = await db.from("jobs").select("*, clients(name)").order("created_at",{ascending:false});
  if(error) return res.status(500).json({error:error.message});
  let rows = data || [];
  if (q) rows = rows.filter((j:any)=>JSON.stringify(j).toLowerCase().includes(q));
  if (status && status!=="All") rows = rows.filter((j:any)=>j.status===status);
  res.json(rows);
});

r.get("/:id", async (req,res)=>{
  const { data, error } = await db.from("jobs").select("*").eq("id", req.params.id).single();
  if(error) return res.status(500).json({error:error.message});
  res.json(data);
});

export default r;
