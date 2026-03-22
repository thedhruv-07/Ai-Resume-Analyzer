import express from "express";
import { uploadResume,getResumeHistory } from "../controllers/resumeController.js";
import upload from "../middleware/uploadMiddleware.js";
import { protect } from "../middleware/authMiddleware.js";
// import { uploadResume, getResumeHistory } from "../controllers/resumeController.js";

const router = express.Router();

router.post("/upload", protect, upload.single("resume"), uploadResume);
router.get("/history", protect, getResumeHistory);

export default router;