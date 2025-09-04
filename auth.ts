import type { Request, Response, NextFunction } from "express";
import { db } from "../lib/db.js";

export async function requireAuth(req:Request,res:Response,next:NextFunction){
  const auth = req.headers.authorization;
  if(!auth) return res.status(401).json({error:"No token"});
  const token = auth.split(" ")[1];
  const { data, error } = await db.auth.getUser(token);
  if(error || !data) return res.status(401).json({error:"Invalid token"});
  (req as any).user = data.user;
  next();
}
