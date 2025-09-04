import { Router } from "express";
import { db } from "../lib/db.js";
const r = Router();

r.get("/", async (req,res)=>{
  const q = String(req.query.q||"").toLowerCase();
  const status = String(req.query.status||"");
  let { data, error } = await db.from("quotes").select("*, quote_items(*)").order("created_at",{ascending:false});
  if(error) return res.status(500).json({error:error.message});
  let rows = data || [];
  if (q) rows = rows.filter((x:any)=>JSON.stringify(x).toLowerCase().includes(q));
  if (status && status!=="All") rows = rows.filter((x:any)=>x.status===status);
  res.json(rows);
});

r.get("/:id", async (req,res)=>{
  const { data, error } = await db.from("quotes").select("*, quote_items(*)").eq("id", req.params.id).single();
  if(error) return res.status(500).json({error:error.message});
  res.json(data);
});

r.patch("/:id", async (req,res)=>{
  const body = req.body;
  const { data, error } = await db.from("quotes").update(body).eq("id",req.params.id).select().single();
  if(error) return res.status(500).json({error:error.message});
  res.json(data);
});

export default r;
