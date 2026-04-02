import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import Pricing from "./pages/Pricing";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import ATSChecker from "./pages/ATSChecker";
import JDMatcher from "./pages/JDMatcher";
import ResumeAnalyzerTool from "./pages/ResumeAnalyzerTool";
import AdminDashboard from "./pages/AdminDashboard";
import PaymentSettings from "./pages/PaymentSettings";
import PaymentFlowGuide from "./pages/PaymentFlowGuide";

function AppContent() {
  return (
    <div className="min-h-screen bg-[#F8F6F4] dark:bg-gray-950 transition-colors duration-300">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/tools/ats-checker" element={<ATSChecker />} />
        <Route path="/tools/jd-match" element={<JDMatcher />} />
        <Route path="/tools/resume-analyzer" element={<ResumeAnalyzerTool />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/payment-settings" element={<PaymentSettings />} />
        <Route path="/payment-guide" element={<PaymentFlowGuide />} />
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