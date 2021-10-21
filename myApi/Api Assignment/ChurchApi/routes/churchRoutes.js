const express = require("express")
     
const {CreateChurch, getAllChurch, getOneChurch, updateChurch, DeleteChurch} = require("../controllers/churchControllers")
const router = express.Router()

//POST 

router.post("/church", CreateChurch)

//GET ALL CHURCH

router.get("/church", getAllChurch)

//GET ONE CHURCH DATA

router.get("/church/:id", getOneChurch)

// UPDATE ONE CHURCH DATA

router.patch("/church/:id", updateChurch)

router.delete("/church/:id", DeleteChurch)
module.exports = router 