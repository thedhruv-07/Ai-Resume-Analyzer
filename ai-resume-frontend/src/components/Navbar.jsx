import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white border-b border-[#E5E5E5] shadow-sm dark:bg-gray-900 dark:border-gray-800">
      <h1 className="text-lg font-bold text-[#2D2D2D] dark:text-white tracking-wide">
        Resume Analyzer
      </h1>

      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-lg bg-[#F5F3F0] dark:bg-gray-800 text-[#2D2D2D] dark:text-white hover:bg-[#EDE9E3] dark:hover:bg-gray-700 transition font-medium"
      >
        {darkMode ? "Light ☀️" : "Dark 🌙"}
      </button>
    </nav>
  );

}