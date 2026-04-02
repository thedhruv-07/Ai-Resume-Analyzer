import { useTheme } from "../context/ThemeContext";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white border-b border-[#E5E5E5] shadow-sm dark:bg-gray-900 dark:border-gray-800 sticky top-0 z-50">
      <div className="flex items-center gap-12">
        <Link to="/" className="text-lg font-bold text-[#2D2D2D] dark:text-white tracking-wide hover:text-blue-600 transition">
          Resume Analyzer
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={`font-medium transition ${isActive("/") ? "text-blue-600" : "text-[#6B7280] dark:text-gray-400 hover:text-[#2D2D2D] dark:hover:text-white"}`}
          >
            Home
          </Link>
          <Link 
            to="/tools" 
            className={`font-medium transition ${isActive("/tools") ? "text-blue-600" : "text-[#6B7280] dark:text-gray-400 hover:text-[#2D2D2D] dark:hover:text-white"}`}
          >
            Tools
          </Link>
          <Link 
            to="/pricing" 
            className={`font-medium transition ${isActive("/pricing") ? "text-blue-600" : "text-[#6B7280] dark:text-gray-400 hover:text-[#2D2D2D] dark:hover:text-white"}`}
          >
            Pricing
          </Link>
          <Link 
            to="/dashboard" 
            className={`font-medium transition ${isActive("/dashboard") ? "text-blue-600" : "text-[#6B7280] dark:text-gray-400 hover:text-[#2D2D2D] dark:hover:text-white"}`}
          >
            Dashboard
          </Link>
        </div>
      </div>

      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-lg bg-[#F5F3F0] dark:bg-gray-800 text-[#2D2D2D] dark:text-white hover:bg-[#EDE9E3] dark:hover:bg-gray-700 transition font-medium"
      >
        {darkMode ? "Light ☀️" : "Dark 🌙"}
      </button>
    </nav>
  );
}