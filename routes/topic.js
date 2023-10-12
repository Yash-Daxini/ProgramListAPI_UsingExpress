const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const db = require("../dbConnections");

router.get("/", async (req, res) => {
  let collection = await db.collection("MST_ProgramTopic");
  let result = await collection.find({}).toArray();
  res.send(result).status(200);
});
let ObjectId = mongoose.Types.ObjectId;
router.get("/:id", async (req, res) => {
  let collection = await db.collection("MST_ProgramTopic");
  let result = await collection.findOne({ _id: new ObjectId(req.params.id) });
  res.send(result).status(200);
});
router.post("/", async (req, res) => {
  let collection = await db.collection("MST_ProgramTopic");
  let result = await collection.insertOne({
    topic_name: req.body.topic_name,
  });
  res.send(result).status(200);
});
router.put("/:id", async (req, res) => {
  let collection = await db.collection("MST_ProgramTopic");
  let result = await collection.updateOne(
    { _id: new ObjectId(req.params.id) },
    {
      $set: {
        topic_name: req.body.topic_name,
      },
    }
  );
  res.send(result).status(200);
});
router.delete("/:id", async (req, res) => {
  let collection = await db.collection("MST_ProgramTopic");
  let result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });
  res.send(result).status(200);
});
router.delete("/deleteFromTopic/:topic_name", async (req, res) => {
  let collection = await db.collection("MST_ProgramTopic");
  // const caseSensitiveRegex = new RegExp(`^${req.params.topic_name}$`);
  
  // const query = { topic_name: { $regex: caseSensitiveRegex } };
  
  // const result = await collection.deleteOne(query);
  // console.log(caseSensitiveRegex + " " + result);
  let result = await collection.deleteOne({ topic_name: req.params.topic_name});
  res.send(result).status(200);
});

module.exports = router;
