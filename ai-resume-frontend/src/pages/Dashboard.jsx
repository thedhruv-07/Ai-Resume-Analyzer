import { useState } from "react";
import ResumeUpload from "../components/ResumeUpload";

export default function Dashboard() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analysis = result?.analysis || {};

  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 bg-[#F8F6F4] dark:bg-gray-950 transition-colors">

      <div className="relative z-10 w-full max-w-5xl">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#2D2D2D] dark:text-white mb-3">
            Resume Analyzer
          </h1>
          <p className="text-lg text-[#6B7280] dark:text-gray-300 max-w-2xl mx-auto">
            Upload your resume and job description to get detailed insights, keyword analysis, and ATS optimization recommendations.
          </p>
        </div>

        {/* Upload Component */}
        {!result && <ResumeUpload onResult={setResult} setLoading={setLoading} />}

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-12 h-12 rounded-full border-4 border-[#E5E5E5] dark:border-gray-700 border-t-blue-500 animate-spin mb-4"></div>
            <p className="text-[#6B7280] dark:text-gray-300 font-medium animate-pulse">
              Analyzing your resume...
            </p>
          </div>
        )}

        {/* Results Section */}
        {result && !loading && (
          <div className="space-y-6">

            {/* Score Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Score Card */}
              <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-[#E5E5E5] dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-sm font-semibold text-[#6B7280] dark:text-gray-400 uppercase tracking-wider">ATS Score</h2>
                <p className="text-5xl font-bold text-[#2D2D2D] dark:text-white mt-3">
                  {analysis.score || 0}%
                </p>
                <div className="w-full bg-[#E5E5E5] dark:bg-gray-800 rounded-full h-2 mt-4 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-700"
                    style={{ width: `${analysis.score || 0}%` }}
                  />
                </div>
              </div>

              {/* Match Card */}
              <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-[#E5E5E5] dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-sm font-semibold text-[#6B7280] dark:text-gray-400 uppercase tracking-wider">Job Match</h2>
                <p className="text-5xl font-bold text-[#2D2D2D] dark:text-white mt-3">
                  {analysis.matchPercentage || 0}%
                </p>
              </div>
            </div>

            {/* Insights Cards */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-[#E5E5E5] dark:border-gray-800 shadow-sm p-8 space-y-6">
              <h3 className="text-2xl font-bold text-[#2D2D2D] dark:text-white">Analysis Insights</h3>

              {/* Strengths */}
              <div className="pb-6 border-b border-[#E5E5E5] dark:border-gray-800">
                <h4 className="text-sm font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider mb-2">Strengths</h4>
                <p className="text-[#2D2D2D] dark:text-gray-300">
                  {Array.isArray(analysis.strengths)
                    ? analysis.strengths.join(", ")
                    : analysis.strengths || "N/A"}
                </p>
              </div>

              {/* Weaknesses */}
              <div className="pb-6 border-b border-[#E5E5E5] dark:border-gray-800">
                <h4 className="text-sm font-semibold text-red-600 dark:text-red-400 uppercase tracking-wider mb-2">Areas for Improvement</h4>
                <p className="text-[#2D2D2D] dark:text-gray-300">
                  {Array.isArray(analysis.weaknesses)
                    ? analysis.weaknesses.join(", ")
                    : analysis.weaknesses || "N/A"}
                </p>
              </div>

              {/* Missing Keywords */}
              <div className="pb-6 border-b border-[#E5E5E5] dark:border-gray-800">
                <h4 className="text-sm font-semibold text-[#2D2D2D] dark:text-white uppercase tracking-wider mb-3">Missing Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {analysis.missingKeywords?.length > 0 ? (
                    analysis.missingKeywords.map((item, i) => (
                      <span
                        key={i}
                        className="bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300 px-3 py-1.5 rounded-lg text-sm font-medium border border-red-200 dark:border-red-800"
                      >
                        {item}
                      </span>
                    ))
                  ) : (
                    <p className="text-[#6B7280] dark:text-gray-400 text-sm">✓ No missing keywords</p>
                  )}
                </div>
              </div>

              {/* Suggestions */}
              <div>
                <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">Recommendations</h4>
                <p className="text-[#2D2D2D] dark:text-gray-300">
                  {Array.isArray(analysis.suggestions)
                    ? analysis.suggestions.join(", ")
                    : analysis.suggestions || "N/A"}
                </p>
              </div>
            </div>

            {/* Re-analyze Button */}
            <button
              onClick={() => setResult(null)}
              className="w-full bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-800 text-white py-3 rounded-xl transition font-semibold"
            >
              Analyze Another Resume
            </button>

          </div>
        )}
      </div>
    </div>
  );
}