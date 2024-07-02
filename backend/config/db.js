import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const URI = process.env.MongoDBURI;
export const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log("DB connected");
  } catch (err) {
    console.log("Error is:", err.message);
  }
};
