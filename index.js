require('dotenv').config()
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

const programRouter = require("./routes/programs");

const topicRouter = require("./routes/topic");

app.use("/programs",programRouter);

app.use("/topic",topicRouter);

app.listen(process.env.PORT,()=>console.log(`Port: ${process.env.PORT}`))