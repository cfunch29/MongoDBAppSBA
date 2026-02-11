import express from "express";
// import drinks structure by alias 
import Drinks from "../models/drinkSchema.js";

import data from "../utilities/data.js";

const router = express.Router();

// create
router.route("/").post(async (req, res) => {

})
// read
.get(async (req, res) => {

})

// update
router.route("/:id").put(async (req, res) => {

})
// delete
router.route("/:id").delete(async (req, res) => {

})
// show one
router.route("/:id").get(async (req, res) => {
    
})
