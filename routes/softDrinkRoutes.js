import express from "express";
// import drinks structure by alias 
import Drinks from "../models/drinkSchema.js";

import { softDrinks } from "../utilities/data.js";

const router = express.Router();

router.route("/").get(async (req, res) => {
    let allSodas = await softDrinks.find({});
    res.json(allSodas);
});

export default router;