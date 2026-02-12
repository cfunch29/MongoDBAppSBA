import express from "express";
// import drinks structure by alias 
import Drinks from "../models/drinkSchema.js";

import { wines } from "../utilities/data.js";

const router = express.Router();

// create
router.route("/").post(async (req, res) => {
    let newWine = await wines.insertOne(req.body);
    res.json(newWine);
})
// read
.get(async (req, res) => {
    let allWines = await wines.find({});
    res.json(allWines);
});

// update
router.route("/:id").put(async (req, res) => {
    let updatedWine = await wines.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true },
    );
    if (!updatedWine) return res.status(404).json({ error: "Drink Not Found" });
    res.json(updatedWine);
})
// delete
router.route("/:id").delete(async (req, res) => {
let deletedWine = await wines.findByIdAndDelete(req.params.id);
if (!deletedWine) return res.status(404).json({ error: "Drink Not Found" });
res.json(deletedWine);
})
// show one
router.route("/:id").get(async (req, res) => {
    let wine = await wines.findById(req.params.id);
    if (!wine) return res.status(404).json({ error: "Drink Not Found" });
    res.json(wine);
});

export default router;
