import express from "express";
// import drinks structure by alias 
import Drinks from "../models/drinkSchema.js";

import { wines, mocktails, softDrinks } from "../utilities/data.js";

const router = express.Router();

// create
router.route("/").post(async (req, res) => {
    let newDrink = await Drinks.insertOne(req.body);
    res.json(newDrink);
})
// read
.get(async (req, res) => {
    let allDrinks = await Drinks.find({});
    res.json(allDrinks);
});

// update
router.route("/:id").put(async (req, res) => {
    let updatedDrink = await Drinks.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true },
    );
    if (!updatedDrink) return res.status(404).json({ error: "Drink Not Found" });
    res.json(updatedDrink);
})
// delete
router.route("/:id").delete(async (req, res) => {
let deletedDrink = await Drinks.findByIdAndDelete(req.params.id);
if (!deletedDrink) return res.status(404).json({ error: "Drink Not Found" });
res.json(deletedDrink);
})
// show one
router.route("/:id").get(async (req, res) => {
    let drink = await Drinks.findById(req.params.id);
    if (!drink) return res.status(404).json({ error: "Drink Not Found" });
    res.json(drink);
});

export default router;
