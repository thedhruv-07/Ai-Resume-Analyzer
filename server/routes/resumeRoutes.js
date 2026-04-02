import express from "express";
import { uploadResume, getResumeHistory } from "../controllers/resumeController.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.post("/upload", upload.single("resume"), uploadResume);
router.get("/history", getResumeHistory);

export default router;