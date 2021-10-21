const express = require("express");
const router = express.Router();
const {createArtiste} = require("../controllers/ArtisteController")

// POST METHOD
router.post("/Artiste", createArtiste);


module.exports = router;