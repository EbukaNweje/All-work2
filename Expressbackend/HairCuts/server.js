const express = require("express");
const port = 2029;
const mongoose = require("mongoose");
const router = require("./routes/HairCutRoute")


const app = express();

// using express middleware
app.use(express.json());
app.use("/api/HairCut", express.static("./uploads"))

// creating a connection string
const url = "mongodb://localhost:27017/set04a";

// connecting to the database
mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true})
.then(() => {
    console.log(`Connected successfully to: ${url} `);
  })
  .catch((error) => {
    console.log(`Failed to connect ${url}`, error.message);
  });


// method: GET
app.get("/", (req, res)=>{
    res.status(200).send("HairCut API")
})

// calling the endpoints
app.use("/api", router);


app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
})
