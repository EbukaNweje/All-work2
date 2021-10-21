const mongoose = require("mongoose")

const myModelSchema = mongoose.Schema({
    Style:{
        type="Style",
        require = true
    },
    Image:{
        type="Style",
        require = true
    },
    Amount:{
        type= Number,
        require = true
    },

})

const myModel = mongoose.model("myModel", myModelSchema);
module.exports = myModel;