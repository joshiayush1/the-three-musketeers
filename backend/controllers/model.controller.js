import modelModel from "../models/model.model.js";

export const getModels = async (req, res) => {
    try{
        const models = await modelModel.find();  
        res.status(200).json(models);
    } catch(err){
        console.log("Error getting models", err);
        res.status(500).json({message: err.message});
    }
};