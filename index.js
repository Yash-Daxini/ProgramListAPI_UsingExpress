require('dotenv').config()
const express = require("express");
const cors = require("cors");
// const mongoose = require("mongoose");
const app = express();
const PORT = 8000;

// mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser : true } );
// const db = mongoose.connection
// db.on('error',(error)=>console.error(error));
// db.once('open',()=>console.log("Open"))
// app.get("/selectall",(req,res)=>{
//     res.status(200).send({
//         name:"abc",
//         isPresent:true
//     })
// })

app.use(cors())

app.use(express.json());

const programRouter = require("./routes/programs");

app.use("/programs",programRouter)

app.listen(PORT,()=>console.log("Done"))