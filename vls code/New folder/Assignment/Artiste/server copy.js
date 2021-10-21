const express = require("express");
const port = 2021;
const mongoose = require("mongoose");
const router = require("./routes/ArtisteRoute");


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


app.get("/", (req, res)=>{
    res.status(200).send("Student API")
})


// Calling all our endpoints
app.use("/api", router);

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
})
