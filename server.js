// imports 
import express from "express";
import dotenv from "dotenv";
import { logReq, globalErr } from "./middleware/middlewares.js";
import connectDB from "./db/connection.js";
import drinkRoutes from "./routes/drinkRoutes.js";
import mocktailRoutes from "./routes/drinkRoutes.js"

// setups 
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
connectDB();

// middleware 
app.use(express.json());
app.use(logReq);

// routes 
app.use("api/wine", drinkRoutes);
app.use("/", mocktailRoutes);

// global err handling middleware 
app.use(globalErr);

// listener 
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
});