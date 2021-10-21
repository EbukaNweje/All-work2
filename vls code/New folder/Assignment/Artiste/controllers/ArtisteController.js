const express = require("express");
const ArtisteModel = require("../models/ArtisteModel")

// CREATE METHOD: POST
const createArtiste = async (req, res)=>{
    try{
        const newArtiste = await ArtisteModel.create({
            name: req.body.name,
            country: req.body.country,
            typeofSong: req.body.typeofSong,
            Religion: {
                christianity: req.body.Religion.christianity,
                islamic: req.body.Religion.islamic,
            }
        });
        res.status(200).json({message: "New Artiste Created Successfully", data: newArtiste})
    }catch(error){
        console.log({message: error.message})
    }
}


module.exports = {
    createArtiste
}