import mongoose from "mongoose";

const resumeAnalysisSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  originalFileName: String,

  score: Number,
  matchPercentage: Number,   // 👈 ADD THIS
  strengths: [String],
  weaknesses: [String],
  missingKeywords: [String], // 👈 ADD THIS
  suggestions: [String],

}, { timestamps: true });

export default mongoose.model("ResumeAnalysis", resumeAnalysisSchema);