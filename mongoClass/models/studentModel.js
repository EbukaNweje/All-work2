const mongoose = require("mongoose");

// create a schema
const studentSchema = mongoose.Schema({
    // name: String,
    // course: String,
    // duration: Number

    name: {
        type: String,
        require: true,
    },
    course: {
        type: String,
        require: true,
    },
    duration: {
        type: Number,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    }
});

// create a model
const studentModel = mongoose.model("studentModel", studentSchema);

module.exports = studentModel;