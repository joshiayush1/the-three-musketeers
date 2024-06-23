import mongoose from "mongoose";

const modelSchema = mongoose.Schema({
    increment: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

modelSchema.statics.calculateAverageRating = async function () {
    const result = await this.aggregate([
        {
            $group: {
                _id: null,
                averageRating: { $avg: "$rating" },
            },
        },
    ]);

    return result.length > 0 ? result[0].averageRating : 0;
};

const Model = mongoose.model("Model", modelSchema);

export default Model;
