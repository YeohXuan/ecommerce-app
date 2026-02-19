import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

// App setup
const app = express();
const port = process.env.PORT || 5001;
dotenv.config();
connectDB();
connectCloudinary();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send(`Port ${5001} active`);
});

app.listen(port, () => {
  console.log(`\x1b[32mServer running on port: ${port}\x1b[0m`);
});

//llLglODj5rPM2eUS
