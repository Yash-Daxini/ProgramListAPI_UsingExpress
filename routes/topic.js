const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

mongoose.connect(process.env.DATABASE_URL);
let db = mongoose.connection;

db.once('open',()=>console.log("Connection Initiated"));

router.get("/", async (req,res)=>{
    let collection = await db.collection("MST_ProgramTopic");
    let result = await collection.find({}).toArray();
    res.send(result).status(200);
})

module.exports = router;