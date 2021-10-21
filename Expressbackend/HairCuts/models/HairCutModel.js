const mongoose = require("mongoose");

// create a schema
const HairCutSchema = mongoose.Schema({

    nameofHaircut: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        required: true,
      },
});

// create a model
HairCutModel = mongoose.model("HairCutModel", HairCutSchema);

module.exports = HairCutModel;
