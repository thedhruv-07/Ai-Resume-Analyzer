import { useEffect, useState } from "react";
import API from "../services/api";

export default function History() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    API.get("/resume/history")
      .then((res) => {
        const data = res.data;
        setHistory(Array.isArray(data.resumes) ? data.resumes : []);
      })
      .catch((error) => {
        console.error("Error fetching history:", error);
        setHistory([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-[90vh] bg-gradient-to-br from-[#FAFBF9] via-white to-[#F5F3F0] px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Analysis History</h1>
          <p className="text-gray-600">View all your previous resume analyses</p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-12 h-12 rounded-full border-4 border-gray-200 border-t-blue-500 animate-spin mb-4"></div>
            <p className="text-gray-600 font-medium">Loading history...</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && history.length === 0 && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-12 text-center">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="text-gray-600 text-lg font-medium">No analyses yet</p>
            <p className="text-gray-500 mt-2">Upload your first resume to get started</p>
          </div>
        )}

        {/* History List */}
        {!loading && history.length > 0 && (
          <div className="space-y-4">
            {history.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      {item.originalFileName}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                      {/* Score */}
                      <div>
                        <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider">ATS Score</p>
                        <p className="text-2xl font-bold text-gray-900 mt-1">{item.score || 0}%</p>
                      </div>
                      {/* Match */}
                      <div>
                        <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Job Match</p>
                        <p className="text-2xl font-bold text-gray-900 mt-1">{item.matchPercentage || 0}%</p>
                      </div>
                      {/* Date */}
                      <div className="col-span-2 md:col-span-2">
                        <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Analyzed</p>
                        <p className="text-sm text-gray-700 mt-1">
                          {item.createdAt ? new Date(item.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          }) : 'N/A'}
                        </p>
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="mt-4 pt-4 border-t border-gray-200 flex flex-wrap gap-2">
                      {item.strengths?.length > 0 && (
                        <span className="text-xs bg-green-50 text-green-700 px-2.5 py-1.5 rounded-full border border-green-200">
                          {item.strengths.length} Strengths
                        </span>
                      )}
                      {item.missingKeywords?.length > 0 && (
                        <span className="text-xs bg-red-50 text-red-700 px-2.5 py-1.5 rounded-full border border-red-200">
                          {item.missingKeywords.length} Missing Keywords
                        </span>
                      )}
                      {item.suggestions?.length > 0 && (
                        <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1.5 rounded-full border border-blue-200">
                          {item.suggestions.length} Suggestions
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}