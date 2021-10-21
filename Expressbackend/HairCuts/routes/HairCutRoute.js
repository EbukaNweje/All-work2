const express = require("express");
const router = express.Router();
const {createHairCut, getHairCut, getSingleHairCut, 
    updateHairCut, deleteHairCut, imageUploader} 
    = require("../controllers/HairCutController")


// POST
router.post("/HairCut", imageUploader, createHairCut);

// GET 
router.get("/HairCut", getHairCut);

// GET 
router.get("/HairCut/:id", getSingleHairCut);

// PATCH
router.patch("/HairCut/:id", imageUploader, updateHairCut)

// DELETE
router.delete("/HairCut/:id", deleteHairCut)

module.exports = router;