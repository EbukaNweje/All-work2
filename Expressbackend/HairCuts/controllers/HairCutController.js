const HairCutModel = require("../models/HairCutModel")
const multer = require("multer");


// creating a local storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./uploads");
    },
    fileName: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
  // creating a filter
  const fileFilter = (req, file, cb) => {
    if (
      file.mimetype === "image.jpeg" ||
      file.mimetype === "image.jpg" ||
      file.mimetype === "image.png"
    ) {
      cb(null, true);
    } else {
      cb(null, "File type is not supported");
    }
  };
  
  // create an uploader for the storage.
  const imageUploader = multer({
    storage,
    fileFilter,
    limit: {
      fileSize: 1024 * 1024 * 2,
    },
  }).single("image");



// CREATE METHOD: POST
const createHairCut = async (req, res)=>{
    try{
        const newHairCut = await HairCutModel.create({
            nameofHaircut: req.body.nameofHaircut,
            image: req.file.path,
        });
        res.status(200).json({message: "New HairCut Created Successfully", data: newHairCut})
    }catch(error){
        console.log({message: error.message})
    }
}

// RETRIEVE METHOD: GET
const getHairCut = async (req, res)=>{
    try{
        const HairCut = await HairCutModel.find();
        if(!HairCut){
            res.send("There was no HairCut with this style in the database.")
        }
        res.status(200).json({message: "List of all HairCut", data: HairCut})
    }catch(error){
        console.log({message: error.message})
    }
}

// RETRIEVE A SINGLE STUDENT METHOD: GET
const getSingleHairCut = async (req, res)=>{
    try{
        const HairCutId = req.params.id;
        // const HairCut = await HairCutModel.findOne();
        if(!HairCutId){
            res.status(404).json(`there was no HairCut with this id: ${req.params.id}`)
        }
        const myHairCut = await HairCutModel.findById(HairCutId);
        res.status(200).json({message: "These are my details", data: myHairCut})
    }catch(error){
        console.log({message: error.message})
    }
}

// UPDATE METHOD: PATCH
const updateHairCut = async (req, res)=>{
    try{
        const HairCutId = req.params.id;
        const HairCut = await HairCutModel.findById(id);
        if(!HairCut){
            res.status(400).json({message: "Wrong id"})
        }
        const updatedHairCut = await HairCutModel.updateOne({
            nameofHaircut: req.body.nameofHaircut,
            image: req.file.path,
        });
        res.status(200).json({message: "Updated Successfully", updatedHairCut})
    }catch(error){
        console.log({message: error.message})
    }
}

// UPDATE METHOD: DELETE
const deleteHairCut = async (req, res)=>{
try{
const HairCutId = req.params.HairCutId;
const DeletedHairCut = await HairCutModel.findByIdAndDelete(HairCutId)
res.status(200).json({message: "HairCut deleted successfully." , data:DeletedHairCut})
}catch(error){
    res.status(404).json({message: error.message})
}
}


module.exports = {
    createHairCut,
    getHairCut,
    getSingleHairCut,
    updateHairCut,
    deleteHairCut,
    imageUploader,
}