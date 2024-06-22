import mongoose from "mongoose";

const modelSchema = mongoose.Schema({
    number:{
        type: Number,
        required: true,
    },
    rating:{
        type: Number,
        required: true,
    },
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    // },
});

const modelModel = mongoose.model('Model', modelSchema);

export default modelModel;