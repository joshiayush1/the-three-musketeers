import express from "express";
const app = express();
import cors from "cors";
import {connectDB} from "./config/db.js";

import modelRouter from "./routes/model.route.js";
import userRouter from "./routes/user.route.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4000;

//db connection
connectDB();

//middlewares
app.use(express.json());
app.use(cors());
app.use("/model", modelRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
    res.send("Api working!!!!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// mongodb+srv://joshiayush17:<password>@cluster0.ufxvkmg.mongodb.net/?