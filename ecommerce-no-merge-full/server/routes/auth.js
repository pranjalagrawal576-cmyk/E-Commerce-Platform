
import express from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/register", async (req,res)=>{
  const hash = await bcrypt.hash(req.body.password,10);
  const user = await User.create({...req.body,password:hash});
  res.json(user);
});

router.post("/login", async (req,res)=>{
  const user = await User.findOne({email:req.body.email});
  const ok = await bcrypt.compare(req.body.password,user.password);
  if(!ok) return res.status(400).json("Wrong");
  const token = jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT_SECRET);
  res.json({token});
});

export default router;
