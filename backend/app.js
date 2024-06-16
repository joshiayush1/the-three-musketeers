import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.send("Namaste Duniya!!!!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});