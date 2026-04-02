import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white border-b border-gray-200 shadow-sm dark:bg-gray-900 dark:border-gray-800">
      <h1 className="text-lg font-bold text-gray-900 dark:text-white tracking-wide">
        Resume Analyzer
      </h1>

      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        {darkMode ? "Light ☀️" : "Dark 🌙"}
      </button>
    </nav>
  );

}