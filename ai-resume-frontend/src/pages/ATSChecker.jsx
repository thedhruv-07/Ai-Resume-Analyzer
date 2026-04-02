import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function ATSChecker() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile?.type === "application/pdf") {
      setFile(uploadedFile);
      setError("");
    } else {
      setError("Please upload a PDF file");
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      setError("Please upload a resume");
      return;
    }

    setError("");
    const formData = new FormData();
    formData.append("resume", file);
    formData.append("jobDescription", ""); // No JD for ATS check

    try {
      setLoading(true);
      const { data } = await API.post("/resume/upload", formData);
      setResult({
        score: data.analysis.score,
        file: file.name
      });
    } catch (error) {
      setError(error.response?.data?.message || "Analysis failed");
    } finally {
      setLoading(false);
    }
  };

  if (result) {
    return (
      <div className="min-h-screen bg-[#F8F6F4] dark:bg-gray-950 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate("/tools")}
            className="mb-8 text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium flex items-center gap-2"
          >
            ← Back to Tools
          </button>

          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-[#E5E5E5] dark:border-gray-800 p-12 text-center">
            <h1 className="text-4xl font-bold text-[#2D2D2D] dark:text-white mb-4">
              ATS Compatibility Score
            </h1>
            
            <div className="my-12">
              <p className="text-6xl font-bold text-blue-600 mb-4">{result.score}%</p>
              <p className="text-lg text-[#6B7280] dark:text-gray-300">
                {result.score >= 80 ? "✓ Excellent! Your resume is ATS-friendly" : 
                 result.score >= 60 ? "⚠️ Good, but needs improvements" : 
                 "✗ Needs significant optimization"}
              </p>
            </div>

            <p className="text-[#6B7280] dark:text-gray-400 mb-8">
              File: {result.file}
            </p>

            <div className="space-y-4">
              <button
                onClick={() => {
                  setResult(null);
                  setFile(null);
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
              >
                Check Another Resume
              </button>
              <button
                onClick={() => navigate("/tools/resume-analyzer")}
                className="w-full border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 py-3 rounded-xl font-semibold hover:bg-blue-50 dark:hover:bg-blue-950 transition"
              >
                Get Full Analysis →
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F6F4] dark:bg-gray-950 px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => navigate("/tools")}
          className="mb-8 text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium flex items-center gap-2"
        >
          ← Back to Tools
        </button>

        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-[#E5E5E5] dark:border-gray-800 p-8">
          <div className="mb-8">
            <div className="text-5xl mb-4">📄</div>
            <h1 className="text-3xl font-bold text-[#2D2D2D] dark:text-white mb-2">
              ATS Resume Checker
            </h1>
            <p className="text-[#6B7280] dark:text-gray-400">
              Check if your resume passes Applicant Tracking Systems. Get your ATS compatibility score.
            </p>
          </div>

          <div className="space-y-6">
            {/* Features */}
            <div className="bg-[#F8F6F4] dark:bg-gray-800 rounded-xl p-6">
              <h3 className="font-semibold text-[#2D2D2D] dark:text-white mb-4">What You'll Get:</h3>
              <ul className="space-y-2">
                <li className="text-[#6B7280] dark:text-gray-300 flex items-center gap-2">
                  <span className="text-blue-600">✓</span> ATS Compatibility Score
                </li>
                <li className="text-[#6B7280] dark:text-gray-300 flex items-center gap-2">
                  <span className="text-blue-600">✓</span> Formatting Assessment
                </li>
                <li className="text-[#6B7280] dark:text-gray-300 flex items-center gap-2">
                  <span className="text-blue-600">✓</span> Keyword Density Check
                </li>
                <li className="text-[#6B7280] dark:text-gray-300 flex items-center gap-2">
                  <span className="text-blue-600">✓</span> Structure Validation
                </li>
              </ul>
            </div>

            {/* Upload */}
            <div>
              <label className="block text-sm font-semibold text-[#2D2D2D] dark:text-white mb-3">
                Upload Your Resume (PDF only)
              </label>
              <div className="relative border-2 border-dashed border-[#E5E5E5] dark:border-gray-700 rounded-xl p-8 text-center hover:border-blue-400 transition">
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <div className="text-4xl mb-3">📥</div>
                <p className="text-[#2D2D2D] dark:text-white font-medium">
                  {file ? file.name : "Click or drag PDF here"}
                </p>
                <p className="text-sm text-[#6B7280] dark:text-gray-400 mt-1">
                  PDF format only
                </p>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800">
                <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
              </div>
            )}

            {/* Button */}
            <button
              onClick={handleSubmit}
              disabled={loading || !file}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 disabled:bg-gray-400 text-white font-semibold rounded-xl transition"
            >
              {loading ? "Checking ATS..." : "Check ATS Score"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
