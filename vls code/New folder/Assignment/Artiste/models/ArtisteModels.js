const express = require("express");
const mongoose = require("mongoose");

// Create a Schema
const ArtisteSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    typeofSong: {
        type: Number,
        required: true,
    },

    Religion: { 
        christianity: {
        type: Boolean,
        required: true,
    },  islamic: {
        type: Boolean,
        required: true,
    }
    }
});


// Creating an ArtisteModel
const ArtisteModel = mongoose.model("ArtisteModel", ArtisteSchema);

module.exports = ArtisteModel;