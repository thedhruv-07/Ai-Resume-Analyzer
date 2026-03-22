import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";
import ResumeAnalysis from "../models/ResumeAnalysis.js";
import { analyzeResumeWithAI } from "../utils/aiService.js";
import User from "../models/User.js";

export const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // 🔍 Check user
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 🚫 Free limit check
    if (user.plan === "free" && user.usageCount >= 3) {
      return res.status(403).json({
        message: "Free limit reached. Upgrade to Pro."
      });
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

    // 🤖 AI Analysis (UPDATED)
    const aiResult = await analyzeResumeWithAI(
      resumeText,
      jobDescription
    );

    // ✅ safe validation
    if (!aiResult || typeof aiResult !== "object") {
      throw new Error("Invalid AI response");
    }

    // 💾 Save analysis (UPDATED FIELDS)
    const saved = await ResumeAnalysis.create({
      user: req.user.id,
      originalFileName: req.file.originalname,
      score: aiResult.score,
      matchPercentage: aiResult.matchPercentage,
      strengths: aiResult.strengths,
      weaknesses: aiResult.weaknesses,
      missingKeywords: aiResult.missingKeywords,
      suggestions: aiResult.suggestions,
    });

    // 📈 Increment usage
    user.usageCount += 1;
    await user.save();

    res.status(200).json({
      success: true,
      remainingFreeUses:
        user.plan === "free" ? 3 - user.usageCount : "Unlimited",
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
    const resumes = await ResumeAnalysis.find({
      user: req.user.id
    })
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
