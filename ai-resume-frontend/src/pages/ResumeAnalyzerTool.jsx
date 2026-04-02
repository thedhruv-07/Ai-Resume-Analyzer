import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function ResumeAnalyzerTool() {
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
      setResult(data.analysis);
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

          <div className="space-y-8">
            {/* Score Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-[#E5E5E5] dark:border-gray-800 shadow-sm">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-sm font-semibold text-[#6B7280] dark:text-gray-400 uppercase tracking-wider">ATS Score</h2>
                    <p className="text-5xl font-bold text-blue-600 dark:text-blue-400 mt-3">
                      {result.score}%
                    </p>
                  </div>
                  <div className="text-4xl">📄</div>
                </div>
                <div className="w-full bg-[#E5E5E5] dark:bg-gray-800 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${result.score}%` }} />
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-[#E5E5E5] dark:border-gray-800 shadow-sm">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-sm font-semibold text-[#6B7280] dark:text-gray-400 uppercase tracking-wider">Job Match</h2>
                    <p className="text-5xl font-bold text-green-600 dark:text-green-400 mt-3">
                      {result.matchPercentage}%
                    </p>
                  </div>
                  <div className="text-4xl">🎯</div>
                </div>
                <div className="w-full bg-[#E5E5E5] dark:bg-gray-800 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: `${result.matchPercentage}%` }} />
                </div>
              </div>
            </div>

            {/* Detailed Insights */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-[#E5E5E5] dark:border-gray-800 p-8 space-y-8">
              <h3 className="text-2xl font-bold text-[#2D2D2D] dark:text-white">Detailed Analysis</h3>

              {result.strengths && (
                <div className="pb-8 border-b border-[#E5E5E5] dark:border-gray-800">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">💪</span>
                    <h4 className="text-lg font-semibold text-[#2D2D2D] dark:text-white">Your Strengths</h4>
                  </div>
                  <p className="text-[#2D2D2D] dark:text-gray-300">
                    {Array.isArray(result.strengths) ? result.strengths.join(" • ") : result.strengths}
                  </p>
                </div>
              )}

              {result.weaknesses && (
                <div className="pb-8 border-b border-[#E5E5E5] dark:border-gray-800">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">⚠️</span>
                    <h4 className="text-lg font-semibold text-[#2D2D2D] dark:text-white">Areas for Improvement</h4>
                  </div>
                  <p className="text-[#2D2D2D] dark:text-gray-300">
                    {Array.isArray(result.weaknesses) ? result.weaknesses.join(" • ") : result.weaknesses}
                  </p>
                </div>
              )}

              {result.missingKeywords?.length > 0 && (
                <div className="pb-8 border-b border-[#E5E5E5] dark:border-gray-800">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🔍</span>
                    <h4 className="text-lg font-semibold text-[#2D2D2D] dark:text-white">Missing Keywords</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {result.missingKeywords.map((kw, i) => (
                      <span key={i} className="bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300 px-3 py-1.5 rounded-lg text-sm border border-red-200 dark:border-red-800">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {result.suggestions && (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">💡</span>
                    <h4 className="text-lg font-semibold text-[#2D2D2D] dark:text-white">Recommendations</h4>
                  </div>
                  <p className="text-[#2D2D2D] dark:text-gray-300">
                    {Array.isArray(result.suggestions) ? result.suggestions.join(" • ") : result.suggestions}
                  </p>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setResult(null);
                  setFile(null);
                  setJobDesc("");
                }}
                className="flex-1 bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 text-white py-3 rounded-xl font-semibold transition"
              >
                Analyze Another
              </button>
              <button
                onClick={() => window.print()}
                className="flex-1 border-2 border-[#E5E5E5] dark:border-gray-700 text-[#2D2D2D] dark:text-white py-3 rounded-xl font-semibold hover:bg-[#F5F3F0] dark:hover:bg-gray-800 transition"
              >
                Download Report
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
            <div className="text-5xl mb-4">📊</div>
            <h1 className="text-3xl font-bold text-[#2D2D2D] dark:text-white mb-2">
              Full Resume Analysis
            </h1>
            <p className="text-[#6B7280] dark:text-gray-400">
              Get comprehensive AI-powered feedback on your resume. Includes ATS score, job match, strengths, weaknesses, and actionable recommendations.
            </p>
          </div>

          <div className="space-y-6">
            {/* Features */}
            <div className="bg-[#F8F6F4] dark:bg-gray-800 rounded-xl p-6">
              <h3 className="font-semibold text-[#2D2D2D] dark:text-white mb-4">What You'll Get:</h3>
              <ul className="space-y-2">
                <li className="text-[#6B7280] dark:text-gray-300 flex items-center gap-2">
                  <span className="text-purple-600">✓</span> ATS Compatibility Score
                </li>
                <li className="text-[#6B7280] dark:text-gray-300 flex items-center gap-2">
                  <span className="text-purple-600">✓</span> Job Match Percentage
                </li>
                <li className="text-[#6B7280] dark:text-gray-300 flex items-center gap-2">
                  <span className="text-purple-600">✓</span> Strengths Analysis
                </li>
                <li className="text-[#6B7280] dark:text-gray-300 flex items-center gap-2">
                  <span className="text-purple-600">✓</span> Missing Keywords
                </li>
                <li className="text-[#6B7280] dark:text-gray-300 flex items-center gap-2">
                  <span className="text-purple-600">✓</span> Detailed Recommendations
                </li>
                <li className="text-[#6B7280] dark:text-gray-300 flex items-center gap-2">
                  <span className="text-purple-600">✓</span> Downloadable Report
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
                className="w-full p-4 border border-[#E5E5E5] dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-[#2D2D2D] dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                rows="6"
              />
            </div>

            {/* Resume Upload */}
            <div>
              <label className="block text-sm font-semibold text-[#2D2D2D] dark:text-white mb-3">
                Your Resume (PDF)
              </label>
              <div className="relative border-2 border-dashed border-[#E5E5E5] dark:border-gray-700 rounded-xl p-8 text-center hover:border-purple-400 transition">
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
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 disabled:bg-gray-400 text-white font-semibold rounded-xl transition"
            >
              {loading ? "Analyzing..." : "Get Full Analysis"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
