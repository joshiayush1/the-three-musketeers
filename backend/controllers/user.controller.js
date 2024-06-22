import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await userModel.findOne({ username });
        if (!user) {
            return res.status(400).json({ success: false, message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid password" });
        }

        const token = createToken(user._id);
        res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user: {
                id: user._id,
                fullname: user.fullname,
                username: user.username
            }
        });
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });  // Optionally, you can set token expiration
}

export const registerUser = async (req, res) => {
    try {
        const { username, fullname, password } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            username,
            fullname,
            password: hashedPassword,
        });

        const user = await newUser.save();
        console.log(user);

        const token = createToken(user._id);
        res.status(201).json({
            success: true,
            token,
            user: {
                id: user._id,
                fullname: user.fullname,
                username: user.username
            }
        });
    } catch (err) {
        console.log("Error:", err);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};
