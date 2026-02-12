import express from "express";
// import drinks structure by alias 
import Drinks from "../models/drinkSchema.js";

import { mocktails } from "../utilities/data.js";

const router = express.Router();

router.route("/").get(async (req, res) => {
    let allMocks = await mocktails.find({});
    res.json(allMocks);
});

export default router;