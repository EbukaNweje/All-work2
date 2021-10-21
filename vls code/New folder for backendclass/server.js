 const express = require("express");
const port = 2021;
const mongoose = require("mongoose");
const router = require("./routes/studentRoute")


// creating an instance of the express object
const app = express();
// creating a connection string
const url = "mongodb://localhost:27017/set04a";

// using express middleware
app.use(express.json());

// connecting to the database
mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true})
.then(()=>{
    console.log("Successfully connected to the database.")
})

// mongoose.connection.once("open", ()=>{
// console.log("connected")
// }).on("error", ()=>{
//     console.log("error.message")
// })

// endpoints
// method: GET
app.get("/", (req, res)=>{
    // res.status(200).json(" All Student API")
    res.status(200).send("Student API")
})

// call all our endpoints
app.use("/api", router);


app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
})
