const express = require("express")
// const mongoose = require("mongoose")
const churchModel = require("../model/churchModel")


// CREATE METHOD

const CreateChurch = async (req, res)=>{
    try{
        const church = await churchModel.create({

            Name: req.body.churchName,
            Section: req.body.churchSection,
            Members: req.body.churchMembers,
            Building: req.body.completedBuilding,
            Department: req.body.churchDepartment
        })
        res.status(200).json({message:"New Church Database has been created", data: church})
    }catch(error){
        res.send("There was an error")
    }
}

// GET ALL CHURCHES DATA 

const getAllChurch = async(req, res) =>{
    try{
        const allChurches = await churchModel.find()
        res.status(200).json({message: "All Churches Database", data: allChurches})
    }catch(error){
        res.send({message: error})
    }
}

// GET ONE CHURCH DATA

const getOneChurch = async (req, res)=>{
    try{
        const ChurchId =  req.params.id
        if(!ChurchId){
            res.status(200).json("This is a wrong Id")
        }
        const myChurch = await churchModel.findById(ChurchId)
        res.status(200).json({message: "Yes this Church data", data: myChurch})
    }catch(error){
        console.log({message: error});
    }
}

// UPDATE ONE CHURCH DATA

const updateChurch = async (req, res) =>{
    try{
        const ChurchId =  req.params.id
        if(!ChurchId){
            res.send("This is not a correct id")
        }
        const UpdatedChurchData = await churchModel.updateOne({
            Name: req.body.churchName,
            Section: req.body.churchSection,
            Members: req.body.churchMembers,
            Building: req.body.completedBuilding,
            Department: req.body.churchDepartment
        })
        res.status(200).json({message: "Your church data has been updated successfully", data: UpdatedChurchData})
    }catch(error){
        console.log({message: error})
    }
}

// DELETE ONE CHURCH DATA

const DeleteChurch = async (req, res) =>{
    try{
        const ChurchId = req.params.id
        if(!ChurchId){
            res.status(200).send("Not a church id")
        }
        const DeletedChurchData = await churchModel.findByIdAndDelete(ChurchId)
        res.status(200).json({message: "YOur church data has been deleted", data: DeletedChurchData})
    }catch(error){
        console.log({message: error});
    }
}

module.exports = {
    CreateChurch,
    getAllChurch,
    getOneChurch,
    updateChurch,
    DeleteChurch 

}
