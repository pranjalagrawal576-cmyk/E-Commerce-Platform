
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import auth from "./routes/auth.js";
import product from "./routes/product.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", auth);
app.use("/api/products", product);

mongoose.connect(process.env.MONGO_URI)
.then(()=> app.listen(5000, ()=> console.log("Server running")));
