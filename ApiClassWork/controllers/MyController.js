const myModel = require("../models/MyModels")
const multer = require("multer");

const newStyle = async(req, res) =>{
    try{
        const Style = await myModel.create({
              style: req.body.style,
              image: req.file.path,
              amount: req.body.amount,
        });
        res.json({ newStyle: "Student created successfully", data: Style });
    }catch (error){
        res.json({ message: error.message });
    }
};