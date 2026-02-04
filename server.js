// imports 
import express from "express";
import dotenv from "dotenv";

// setups 
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;


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