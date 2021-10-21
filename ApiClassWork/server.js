const express = require("express")
const mongoose = require("mongoose")
const router = require("./routes/MyRoutes")
const port = 1996;

const app = express()
app.use(express.json())

const url = "mongodb://localhost:27017/Style";
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log(`Connected successfully to: ${url} `);
  })
  .catch((error) => {
    console.log(`Failed to connect ${url}`, error.message);
  });
app.get("/", (req, res)=>{
    res.status(200).send("Welcome to your Api")
})

app.use("/api", router)

app.listen(port, ()=>{
    console.log(`Listening to ${port}`)
})