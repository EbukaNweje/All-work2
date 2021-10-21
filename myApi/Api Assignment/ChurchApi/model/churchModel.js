const mongoose = require("mongoose")

const ChurchSchema = mongoose.Schema({
    Name: {
        type: String,
        require: true,
    },
    Section:{
        type: String,
        require: true,
    },
   Members : {
        type: Number,
        require: true,
    },
    Building:{
        type: Boolean,
        require: true,
    },
    Department: {
        type: Array,
        require: true,
    }

})

const churchModel = mongoose.model("churchModel", ChurchSchema) 

module.exports = churchModel
