import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Home() {
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  return (
    <div className="min-h-screen bg-[#F8F6F4] dark:bg-gray-950 transition-colors">
      {/* Hero Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-50 dark:bg-blue-950 rounded-full border border-blue-200 dark:border-blue-800">
            <span className="text-blue-600 dark:text-blue-300 text-sm font-semibold">✨ AI-Powered Resume Optimization</span>
          </div>
          
          <h1 className="text-6xl font-bold text-[#2D2D2D] dark:text-white mb-6 leading-tight">
            Find Your Dream Job <br /> Powered by AI
          </h1>
          
          <p className="text-xl text-[#6B7280] dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Optimize your resume, match with the right roles, and get hired faster. 
            <br /> Smart AI tools built for job seekers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/dashboard")}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white rounded-xl font-semibold transition"
            >
              Get Started Free
            </button>
            <button
              onClick={() => document.getElementById("features").scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 border-2 border-[#E5E5E5] dark:border-gray-700 text-[#2D2D2D] dark:text-white rounded-xl font-semibold hover:bg-[#F5F3F0] dark:hover:bg-gray-900 transition"
            >
              See Our Tools
            </button>
          </div>

          <p className="text-sm text-[#6B7280] dark:text-gray-400 mt-4">
            No signup required • 100% Free • No credit card needed
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#2D2D2D] dark:text-white text-center mb-4">
            What We Do
          </h2>
          <p className="text-center text-[#6B7280] dark:text-gray-300 mb-16 max-w-2xl mx-auto">
            Comprehensive AI tools designed to help you stand out to recruiters
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl bg-[#F8F6F4] dark:bg-gray-800 border border-[#E5E5E5] dark:border-gray-700 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 dark:text-blue-300 text-xl">📄</span>
              </div>
              <h3 className="text-xl font-bold text-[#2D2D2D] dark:text-white mb-3">
                ATS Resume Check
              </h3>
              <p className="text-[#6B7280] dark:text-gray-300">
                Ensure your resume is 100% ATS-friendly. Check formatting, keywords, and structure that passes filters.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl bg-[#F8F6F4] dark:bg-gray-800 border border-[#E5E5E5] dark:border-gray-700 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-600 dark:text-green-300 text-xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-[#2D2D2D] dark:text-white mb-3">
                JD Match Score
              </h3>
              <p className="text-[#6B7280] dark:text-gray-300">
                Upload a job description and your resume — get a compatibility score and tips to improve alignment.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl bg-[#F8F6F4] dark:bg-gray-800 border border-[#E5E5E5] dark:border-gray-700 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 dark:text-purple-300 text-xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-[#2D2D2D] dark:text-white mb-3">
                AI Insights & Feedback
              </h3>
              <p className="text-[#6B7280] dark:text-gray-300">
                Get detailed AI-driven feedback on strengths, weaknesses, and actionable recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#2D2D2D] dark:text-white text-center mb-4">
          Your Resume Deserves a Strategy
        </h2>
        <p className="text-center text-[#6B7280] dark:text-gray-300 mb-16 max-w-2xl mx-auto">
          In a job market where recruiters spend less than 7 seconds per resume, you need precision.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-300">✓</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2D2D2D] dark:text-white mb-2">
                ATS Optimization That Works
              </h3>
              <p className="text-[#6B7280] dark:text-gray-300">
                Most resumes get filtered before HR even sees them. We ensure 100% ATS compatibility.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <span className="text-green-600 dark:text-green-300">✓</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2D2D2D] dark:text-white mb-2">
                Job-Aligned Resumes
              </h3>
              <p className="text-[#6B7280] dark:text-gray-300">
                We analyze job descriptions and adapt your resume to match exactly what employers want.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 dark:text-purple-300">✓</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2D2D2D] dark:text-white mb-2">
                Smart AI Feedback
              </h3>
              <p className="text-[#6B7280] dark:text-gray-300">
                Instant actionable feedback on what's working and what needs improvement.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                <span className="text-orange-600 dark:text-orange-300">✓</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2D2D2D] dark:text-white mb-2">
                Easy to Use
              </h3>
              <p className="text-[#6B7280] dark:text-gray-300">
                Simple, intuitive interface. Just upload and get instant results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#2D2D2D] dark:text-white text-center mb-16">
            By The Numbers
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">80%</p>
              <p className="text-[#6B7280] dark:text-gray-300">
                Job seekers fail due to non-ATS resumes
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">3X</p>
              <p className="text-[#6B7280] dark:text-gray-300">
                More likely to get shortlisted
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">20+</p>
              <p className="text-[#6B7280] dark:text-gray-300">
                Evaluation criteria per resume
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">6hrs</p>
              <p className="text-[#6B7280] dark:text-gray-300">
                Saved per application
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#2D2D2D] dark:text-white text-center mb-4">
          What People Say
        </h2>
        <p className="text-center text-[#6B7280] dark:text-gray-300 mb-16">
          Real stories from real users
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl border border-[#E5E5E5] dark:border-gray-700 bg-white dark:bg-gray-900">
            <p className="text-[#6B7280] dark:text-gray-300 mb-4">
              "This tool helped me land interviews in just a week! The match score and suggestions were game-changers."
            </p>
            <div>
              <p className="font-semibold text-[#2D2D2D] dark:text-white">Sarah Johnson</p>
              <p className="text-sm text-[#6B7280] dark:text-gray-400">Marketing Manager</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-[#E5E5E5] dark:border-gray-700 bg-white dark:bg-gray-900">
            <p className="text-[#6B7280] dark:text-gray-300 mb-4">
              "I didn't know how many mistakes were in my resume. The AI feedback was sharp and easy to implement."
            </p>
            <div>
              <p className="font-semibold text-[#2D2D2D] dark:text-white">Amit Patel</p>
              <p className="text-sm text-[#6B7280] dark:text-gray-400">Software Developer</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-[#E5E5E5] dark:border-gray-700 bg-white dark:bg-gray-900">
            <p className="text-[#6B7280] dark:text-gray-300 mb-4">
              "As an HR professional, I can tell — these optimized resumes definitely stand out from the crowd."
            </p>
            <div>
              <p className="font-semibold text-[#2D2D2D] dark:text-white">Priya Sharma</p>
              <p className="text-sm text-[#6B7280] dark:text-gray-400">HR Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Hired?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Join thousands of job seekers optimizing their resumes to land interviews faster.
          </p>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition"
          >
            Get Started Free — No Signup Required
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-[#F8F6F4] dark:bg-gray-950 border-t border-[#E5E5E5] dark:border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <p className="text-[#6B7280] dark:text-gray-400">
              © 2026 Resume Analyzer. Built with ❤️ for job seekers.
            </p>
            <button
              onClick={() => navigate("/admin")}
              className="text-xs text-[#6B7280] dark:text-gray-600 hover:text-blue-600 dark:hover:text-blue-400 transition"
              title="Admin Dashboard"
            >
              Admin ⚙️
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
