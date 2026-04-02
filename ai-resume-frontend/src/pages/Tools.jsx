import { useNavigate } from "react-router-dom";

export default function Tools() {
  const navigate = useNavigate();

  const tools = [
    {
      title: "ATS Resume Checker",
      description: "Ensure your resume passes Applicant Tracking Systems with our comprehensive ATS audit.",
      features: ["Formatting Check", "Keyword Analysis", "Structure Validation", "ATS Score"],
      icon: "📄",
      color: "blue"
    },
    {
      title: "JD Match Score",
      description: "Match your resume against job descriptions to align with what employers are looking for.",
      features: ["Resume-JD Matching", "Match Percentage", "Missing Keywords", "Recommendations"],
      icon: "🎯",
      color: "green"
    },
    {
      title: "Resume Analyzer",
      description: "Get detailed AI-powered feedback on your resume's strengths and areas for improvement.",
      features: ["Strengths Analysis", "Improvement Tips", "Keyword Suggestions", "Score Breakdown"],
      icon: "📊",
      color: "purple"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F6F4] dark:bg-gray-950 transition-colors px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-[#2D2D2D] dark:text-white text-center mb-4">
          Our Tools
        </h1>
        <p className="text-center text-[#6B7280] dark:text-gray-300 mb-16 max-w-2xl mx-auto">
          Comprehensive suite of AI-powered tools to optimize your job search
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((tool, idx) => {
            const paths = ["/tools/ats-checker", "/tools/jd-match", "/tools/resume-analyzer"];
            return (
              <div key={idx} className="bg-white dark:bg-gray-900 rounded-2xl border border-[#E5E5E5] dark:border-gray-800 p-8 hover:shadow-lg transition">
                <div className="text-5xl mb-4">{tool.icon}</div>
                <h3 className="text-2xl font-bold text-[#2D2D2D] dark:text-white mb-3">
                  {tool.title}
                </h3>
                <p className="text-[#6B7280] dark:text-gray-300 mb-6">
                  {tool.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {tool.features.map((feature, fidx) => (
                    <li key={fidx} className="text-sm text-[#6B7280] dark:text-gray-400 flex items-center gap-2">
                      <span className="text-blue-600">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate(paths[idx])}
                  className={`w-full py-3 rounded-xl font-semibold transition ${
                    tool.color === "blue" ? "bg-blue-600 hover:bg-blue-700 dark:bg-blue-700" :
                    tool.color === "green" ? "bg-green-600 hover:bg-green-700 dark:bg-green-700" :
                    "bg-purple-600 hover:bg-purple-700 dark:bg-purple-700"
                  } text-white`}
                >
                  Try Now Free
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
