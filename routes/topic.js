const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

mongoose.connect(process.env.DATABASE_URL);
let db = mongoose.connection;

db.once("open", () => console.log("Connection Initiated"));

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
router.patch("/:id", async (req, res) => {
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

module.exports = router;
