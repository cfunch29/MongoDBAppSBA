// imports 
import express from "express";
import dotenv from "dotenv";
import { logReq, globalErr } from "./middleware/middlewares.js";
import connectDB from "./db/connection.js";

// setups 
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
connectDB();

// middleware 
app.use(express.json());
app.use(logReq);

// routes 

// global err handling middleware 
app.use(globalErr);

// listener 
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
});