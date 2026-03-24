import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve("./.env"),
});  // MUST BE FIRST

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";

const app = express();

connectDB();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://ai-resume-analyzer-eight-flame.vercel.app"
  ],
  credentials: true
}));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);

app.get("/", (req, res) => {
  res.json({ message: "AI Resume Analyzer API Running" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});