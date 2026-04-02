import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";
import ResumeAnalysis from "../models/ResumeAnalysis.js";
import { analyzeResumeWithAI } from "../utils/aiService.js";

export const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // 📄 Extract PDF text
    const uint8Array = new Uint8Array(req.file.buffer);
    const pdf = await getDocument({ data: uint8Array }).promise;

    let resumeText = "";

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const strings = content.items.map(item => item.str);
      resumeText += strings.join(" ") + "\n";
    }

    // 🆕 Get job description from frontend
    const jobDescription = req.body.jobDescription || "";

    // 🤖 AI Analysis
    const aiResult = await analyzeResumeWithAI(
      resumeText,
      jobDescription
    );

    // ✅ safe validation
    if (!aiResult || typeof aiResult !== "object") {
      throw new Error("Invalid AI response");
    }

    // 💾 Save analysis
    const saved = await ResumeAnalysis.create({
      originalFileName: req.file.originalname,
      score: aiResult.score,
      matchPercentage: aiResult.matchPercentage,
      strengths: aiResult.strengths,
      weaknesses: aiResult.weaknesses,
      missingKeywords: aiResult.missingKeywords,
      suggestions: aiResult.suggestions,
    });

    res.status(200).json({
      success: true,
      analysis: saved,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// 📊 Resume History
export const getResumeHistory = async (req, res) => {
  try {
    const resumes = await ResumeAnalysis.find()
      .select("-__v")
      .sort({ createdAt: -1 });

    res.status(200).json({
      count: resumes.length,
      resumes,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
