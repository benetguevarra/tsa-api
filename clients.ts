import { Router } from "express";
import { db } from "../lib/db.js";
const r = Router();

r.get("/", async (_ ,res)=>{
  const { data, error } = await db.from("clients").select("*").order("created_at",{ascending:false});
  if(error) return res.status(500).json({error:error.message});
  res.json(data);
});

r.post("/", async (req,res)=>{
  const { data, error } = await db.from("clients").insert(req.body).select().single();
  if(error) return res.status(500).json({error:error.message});
  res.json(data);
});

r.patch("/:id", async (req,res)=>{
  const { data, error } = await db.from("clients").update(req.body).eq("id",req.params.id).select().single();
  if(error) return res.status(500).json({error:error.message});
  res.json(data);
});

r.delete("/:id", async (req,res)=>{
  const { error } = await db.from("clients").delete().eq("id",req.params.id);
  if(error) return res.status(500).json({error:error.message});
  res.json({ok:true});
});

export default r;
