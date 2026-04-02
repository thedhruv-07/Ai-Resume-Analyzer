import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";

function AppContent() {
  return (
    <div className="min-h-screen bg-[#F8F6F4] dark:bg-gray-950 transition-colors duration-300">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;