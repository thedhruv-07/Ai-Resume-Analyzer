import { useState } from "react";
import ResumeUpload from "../components/ResumeUpload";

export default function Dashboard() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analysis = result?.analysis || {};

  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 bg-[#020617]">

      <div className="relative z-10 w-full max-w-4xl p-10 rounded-3xl 
        bg-[#111827] border border-gray-800 shadow-2xl">

        {/* 🔥 Header */}
        <h1 className="text-4xl font-bold text-white text-center">
          AI Resume Analyzer 🚀
        </h1>

        <p className="mt-4 text-center text-gray-400">
          Upload your resume and get ATS score, keyword gaps, and AI insights.
        </p>

        {/* 🔥 Upload */}
        <ResumeUpload onResult={setResult} setLoading={setLoading} />

        {/* 🔄 Loading */}
        {loading && (
          <p className="text-center text-gray-400 mt-6 animate-pulse">
            Analyzing your resume...
          </p>
        )}

        {/* 📊 Result Section */}
        {result && !loading && (
          <div className="mt-10 space-y-6">

            {/* 🔥 Score + Match */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Score */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-600/20 to-cyan-500/20 border border-gray-700 text-center">
                <h2 className="text-lg text-gray-400">ATS Score</h2>
                <p className="text-5xl font-bold text-green-400 mt-2">
                  {analysis.score || 0}%
                </p>

                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-3 mt-4">
                  <div
                    className="bg-green-400 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${analysis.score || 0}%` }}
                  />
                </div>
              </div>

              {/* Match */}
              <div className="p-6 rounded-2xl bg-[#0f172a] border border-gray-700 text-center">
                <h2 className="text-lg text-gray-400">ATS Match</h2>
                <p className="text-4xl font-bold text-cyan-400 mt-2">
                  {analysis.matchPercentage || 0}%
                </p>
              </div>

            </div>

            {/* 🔥 Insights */}
            <div className="p-6 rounded-2xl bg-[#0f172a] border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Insights</h3>

              {/* Strengths */}
              <div className="mb-3">
                <p className="text-green-400 font-semibold">Strengths</p>
                <p className="text-gray-300 text-sm mt-1">
                  {Array.isArray(analysis.strengths)
                    ? analysis.strengths.join(", ")
                    : analysis.strengths || "N/A"}
                </p>
              </div>

              {/* Weaknesses */}
              <div className="mb-3">
                <p className="text-red-400 font-semibold">Weaknesses</p>
                <p className="text-gray-300 text-sm mt-1">
                  {Array.isArray(analysis.weaknesses)
                    ? analysis.weaknesses.join(", ")
                    : analysis.weaknesses || "N/A"}
                </p>
              </div>

              {/* Missing Keywords */}
              <div className="mt-4">
                <h3 className="font-semibold text-red-400">
                  Missing Keywords
                </h3>

                <div className="flex flex-wrap gap-2 mt-2">
                  {analysis.missingKeywords?.length > 0 ? (
                    analysis.missingKeywords.map((item, i) => (
                      <span
                        key={i}
                        className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))
                  ) : (
                    <p className="text-gray-500 text-sm">
                      No missing keywords 🎉
                    </p>
                  )}
                </div>
              </div>

              {/* Suggestions */}
              <div className="mt-4">
                <p className="text-yellow-400 font-semibold">Suggestions</p>
                <p className="text-gray-300 text-sm mt-1">
                  {Array.isArray(analysis.suggestions)
                    ? analysis.suggestions.join(", ")
                    : analysis.suggestions || "N/A"}
                </p>
              </div>
            </div>

            {/* 🔁 Re-upload */}
            <button
              onClick={() => setResult(null)}
              className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-xl transition"
            >
              Analyze Another Resume
            </button>

          </div>
        )}
      </div>
    </div>
  );
}