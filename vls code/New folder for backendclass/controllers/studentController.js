const express = require("express");
const studentModel = require("../models/studentModel")

// the controller hold all the CRUD functions
// CREATE METHOD: POST
const createStudent = async (req, res)=>{
    try{
        const newStudent = await studentModel.create({
            name: req.body.name,
            course: req.body.course,
            duration: req.body.duration
        });
        res.status(200).json({message: "New Student Created Successfully", data: newStudent})
    }catch(error){
        console.log({message: error.message})
    }
}

// RETRIEVE METHOD: GET
const getStudents = async (req, res)=>{
    try{
        const students = await studentModel.find();
        if(!students){
            res.send("There was no student in the database.")
        }
        res.status(200).json({message: "List of all students", data: students})
    }catch(error){
        console.log({message: error.message})
    }
}

// RETRIEVE A SINGLE STUDENT METHOD: GET
const getSingle = async (req, res)=>{
    try{
        const studentId = req.params.id;
        if(!studentId){
            res.status(404).json(`there was no student with this id: ${req.params.id}`)
        }
        const myStudent = await studentModel.findById(studentId);
        res.status(200).json({message: "These are my details", data: myStudent})
    }catch(error){
        console.log({message: error.message})
    }
}

// UPDATE METHOD: PATCH
const updateStudent = async (req, res)=>{
    try{
        const studentId = req.params.id;
        if(!studentId){
            res.status(400).json({message: "Wrong id"})
        }
        // const data = {
        //     name: req.body.name,
        //     course: req.body.course,
        //     duration: req.body.duration
        // }
        const updatedStudent = await studentModel.updateOne({
            name: req.body.name,
            course: req.body.course,
            duration: req.body.duration
        });
        res.status(200).json({message: "Updated Successfully", updatedStudent})
    }catch(error){
        console.log({message: error.message})
    }
}

// UPDATE METHOD: DELETE
const deleteStudent = async (req, res)=>{
try{
const studentId = req.params.id;
if(!studentId){
    res.status(404).json({message: `This id: ${studentId} is not found.`})
}
const deletedStudent = await studentModel.findByIdAndDelete(studentId);
res.status(200).json({message: "Student deleted successfully."})
}catch(error){
    res.status(404).json({message: error.message})
}
}


module.exports = {
    createStudent,
    getStudents,
    getSingle,
    updateStudent,
    deleteStudent,
}