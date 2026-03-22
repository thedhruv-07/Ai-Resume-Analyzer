import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center px-8 py-4 
      bg-white dark:bg-[#0f172a] 
      border-b border-gray-200 dark:border-gray-800">

      <h1 className="text-xl font-bold 
        text-gray-800 dark:text-white tracking-wide">
        AI Resume Analyzer
      </h1>

      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-lg 
        bg-gray-200 dark:bg-gray-800 
        text-black dark:text-white
        hover:scale-105 transition"
      >
        {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button>
      <button
        onClick={handleLogout}
        className="px-4 py-2 rounded-lg bg-red-500 text-white hover:scale-105 transition"
      >
        Logout
      </button>
    </nav>
  );

}