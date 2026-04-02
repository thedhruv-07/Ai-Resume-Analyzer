import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function JDMatcher() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [jobDesc, setJobDesc] = useState("");
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
    if (!jobDesc.trim()) {
      setError("Please paste a job description");
      return;
    }

    setError("");
    const formData = new FormData();
    formData.append("resume", file);
    formData.append("jobDescription", jobDesc);

    try {
      setLoading(true);
      const { data } = await API.post("/resume/upload", formData);
      setResult({
        matchPercentage: data.analysis.matchPercentage,
        file: file.name,
        missingKeywords: data.analysis.missingKeywords || []
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

          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-[#E5E5E5] dark:border-gray-800 p-12">
            <h1 className="text-4xl font-bold text-[#2D2D2D] dark:text-white mb-4 text-center">
              Job Description Match Score
            </h1>
            
            <div className="my-12 text-center">
              <p className="text-6xl font-bold text-green-600 mb-4">{result.matchPercentage}%</p>
              <p className="text-lg text-[#6B7280] dark:text-gray-300">
                {result.matchPercentage >= 80 ? "✓ Excellent match! Your resume aligns well with this job" : 
                 result.matchPercentage >= 60 ? "⚠️ Good match, but could be improved" : 
                 "✗ Needs optimization for this role"}
              </p>
            </div>

            {result.missingKeywords.length > 0 && (
              <div className="mb-8 p-6 rounded-xl bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800">
                <h3 className="font-semibold text-amber-900 dark:text-amber-200 mb-4">Missing Keywords ({result.missingKeywords.length}):</h3>
                <div className="flex flex-wrap gap-2">
                  {result.missingKeywords.map((keyword, i) => (
                    <span key={i} className="bg-white dark:bg-amber-900 text-amber-700 dark:text-amber-200 px-3 py-1 rounded-lg text-sm font-medium">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-4">
              <button
                onClick={() => {
                  setResult(null);
                  setFile(null);
                  setJobDesc("");
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
              >
                Check Another Job
              </button>
              <button
                onClick={() => navigate("/tools/resume-analyzer")}
                className="w-full border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 py-3 rounded-xl font-semibold hover:bg-blue-50 dark:hover:bg-blue-950 transition"
              >
                Get Detailed Analysis →
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
            <div className="text-5xl mb-4">🎯</div>
            <h1 className="text-3xl font-bold text-[#2D2D2D] dark:text-white mb-2">
              JD Match Score
            </h1>
            <p className="text-[#6B7280] dark:text-gray-400">
              See how well your resume matches a specific job description. Get alignment percentage and missing keywords.
            </p>
          </div>

          <div className="space-y-6">
            {/* Features */}
            <div className="bg-[#F8F6F4] dark:bg-gray-800 rounded-xl p-6">
              <h3 className="font-semibold text-[#2D2D2D] dark:text-white mb-4">What You'll Get:</h3>
              <ul className="space-y-2">
                <li className="text-[#6B7280] dark:text-gray-300 flex items-center gap-2">
                  <span className="text-green-600">✓</span> Resume-JD Match Percentage
                </li>
                <li className="text-[#6B7280] dark:text-gray-300 flex items-center gap-2">
                  <span className="text-green-600">✓</span> Missing Keywords List
                </li>
                <li className="text-[#6B7280] dark:text-gray-300 flex items-center gap-2">
                  <span className="text-green-600">✓</span> Alignment Score
                </li>
                <li className="text-[#6B7280] dark:text-gray-300 flex items-center gap-2">
                  <span className="text-green-600">✓</span> Improvement Tips
                </li>
              </ul>
            </div>

            {/* Job Description */}
            <div>
              <label className="block text-sm font-semibold text-[#2D2D2D] dark:text-white mb-3">
                Job Description
              </label>
              <textarea
                placeholder="Paste the job description here..."
                value={jobDesc}
                onChange={(e) => setJobDesc(e.target.value)}
                className="w-full p-4 border border-[#E5E5E5] dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-[#2D2D2D] dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                rows="6"
              />
            </div>

            {/* Resume Upload */}
            <div>
              <label className="block text-sm font-semibold text-[#2D2D2D] dark:text-white mb-3">
                Your Resume (PDF)
              </label>
              <div className="relative border-2 border-dashed border-[#E5E5E5] dark:border-gray-700 rounded-xl p-8 text-center hover:border-green-400 transition">
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
              className="w-full py-3 bg-green-600 hover:bg-green-700 dark:bg-green-700 disabled:bg-gray-400 text-white font-semibold rounded-xl transition"
            >
              {loading ? "Calculating Match..." : "Calculate Match Score"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
