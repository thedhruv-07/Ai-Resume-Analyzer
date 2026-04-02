import { useNavigate } from "react-router-dom";

export default function PaywallModal({ isOpen, toolName, onClose }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-md w-full border border-[#E5E5E5] dark:border-gray-800 p-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#6B7280] dark:text-gray-400 hover:text-[#2D2D2D] dark:hover:text-white text-2xl"
        >
          ✕
        </button>

        <div className="text-center">
          <div className="text-5xl mb-4">🔒</div>
          
          <h2 className="text-2xl font-bold text-[#2D2D2D] dark:text-white mb-3">
            Free Trial Limit Reached
          </h2>

          <p className="text-[#6B7280] dark:text-gray-300 mb-8">
            You've used your 3 free analyses for <span className="font-semibold">{toolName}</span>. Upgrade to premium to continue using all tools.
          </p>

          <div className="bg-[#F8F6F4] dark:bg-gray-800 rounded-xl p-6 mb-8 text-left">
            <h3 className="font-semibold text-[#2D2D2D] dark:text-white mb-4">Premium Benefits:</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-[#6B7280] dark:text-gray-300">
                <span className="text-green-600">✓</span> Unlimited analyses per tool
              </li>
              <li className="flex items-center gap-2 text-[#6B7280] dark:text-gray-300">
                <span className="text-green-600">✓</span> Full detailed reports
              </li>
              <li className="flex items-center gap-2 text-[#6B7280] dark:text-gray-300">
                <span className="text-green-600">✓</span> Download reports as PDF
              </li>
              <li className="flex items-center gap-2 text-[#6B7280] dark:text-gray-300">
                <span className="text-green-600">✓</span> Priority AI analysis
              </li>
              <li className="flex items-center gap-2 text-[#6B7280] dark:text-gray-300">
                <span className="text-green-600">✓</span> Resume version history
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => {
                navigate("/pricing");
                onClose();
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
            >
              Upgrade to Premium
            </button>
            <button
              onClick={onClose}
              className="w-full border-2 border-[#E5E5E5] dark:border-gray-700 text-[#2D2D2D] dark:text-white py-3 rounded-xl font-semibold hover:bg-[#F5F3F0] dark:hover:bg-gray-800 transition"
            >
              Maybe Later
            </button>
          </div>

          <p className="text-xs text-[#6B7280] dark:text-gray-400 mt-4">
            Get premium for just $9.99/month or $79/year
          </p>
        </div>
      </div>
    </div>
  );
}
