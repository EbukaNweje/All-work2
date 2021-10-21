const express = require("express")
const port = 8080
const mongoose = require("mongoose")
const router = require("./routes/churchRoutes")


const app = express()

const url= "mongodb://localhost:27017/redeemApi"

app.use(express.json())

mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true})
.then(()=>{
    console.log("Successfully connected to the database.")
})
app.get("/", (req, res)=>{
    res.status(200).send("An Api containing all church mabers")
})

app.use("/info", router)

app.listen(port, ()=>{
    console.log("listening to port", port)
})