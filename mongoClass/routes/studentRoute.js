const express = require("express");
const router = express.Router();
const {createStudent, getStudents, getSingle, updateStudent} = require("../controllers/studentController")


// POST
router.post("/student", createStudent);

// GET 
router.get("/student", getStudents);

// GET 
router.get("/student/:id", getSingle);

// PATCH
router.patch("/student/:id", updateStudent)

module.exports = router;