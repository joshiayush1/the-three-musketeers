import Model from "../models/model.model.js";

export const getModels = async (req, res) => {
    try {
        const { increment, rating, user } = req.body;
        const model = await Model.create({ increment, rating, user });

        res.status(200).json({
            success: true,
            message: "Model successfully saved",
            model: {
                increment: model.increment,
                rating: model.rating,
                user: model.user,
                updatedAt: model.updatedAt,
            },
        });
    } catch (err) {
        console.error("Error saving model:", err);
        res.status(500).json({ success: false, message: err.message });
    }
};

export const lastUpdatedModel = async (req, res) => {
    try {
        const lastUpdatedModel = await Model.findOne().sort({ updatedAt: -1 });

        if (!lastUpdatedModel) {
            return res.status(404).json({ success: false, message: "No models found" });
        }

        const averageRating = await Model.calculateAverageRating();

        res.status(200).json({
            success: true,
            message: "Last updated model found",
            model: {
                increment: lastUpdatedModel.increment,
                rating: lastUpdatedModel.rating,
                updatedAt: lastUpdatedModel.updatedAt,
            },
            averageRating: averageRating,
        });
    } catch (err) {
        console.error("Error fetching last updated model:", err);
        res.status(500).json({ success: false, message: err.message });
    }
};

export const getAllModels = async (req, res) => {
    try {
        const models = await Model.find().populate("user");
        
        res.status(200).json({
            success: true,
            message: "Models successfully fetched",
            models: models
        });
    } catch (err) {
        console.error("Error fetching models:", err);
        res.status(500).json({ success: false, message: err.message });
    }
};