import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const bankDetails = {
    bankName: localStorage.getItem("bankName"),
    accountHolder: localStorage.getItem("accountHolder"),
    accountNumber: localStorage.getItem("accountNumber"),
    ifscCode: localStorage.getItem("ifscCode")
  };

  const hasPaymentSetup = bankDetails.bankName && bankDetails.accountNumber;

  return (
    <div className="min-h-screen bg-[#F8F6F4] dark:bg-gray-950 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-[#2D2D2D] dark:text-white mb-2">
          Admin Dashboard
        </h1>
        <p className="text-[#6B7280] dark:text-gray-400 mb-12">
          Manage your Resume Analyzer business settings
        </p>

        {/* Quick Info Card */}
        <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 mb-12">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
                💰 How Do You Receive Money?
              </h3>
              <p className="text-blue-800 dark:text-blue-200 max-w-2xl">
                Customers pay via Stripe/Razorpay → Money is processed → Arrives in your bank account in 2-7 days
              </p>
            </div>
            <button
              onClick={() => navigate("/payment-guide")}
              className="flex-shrink-0 px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 text-white rounded-lg font-semibold transition"
            >
              View Payment Flow →
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Payment Setup Card */}
          <div className={`rounded-2xl border p-8 ${
            hasPaymentSetup
              ? "bg-white dark:bg-gray-900 border-[#E5E5E5] dark:border-gray-800"
              : "bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800"
          }`}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-[#2D2D2D] dark:text-white">
                  💳 Payment Setup
                </h2>
                <p className={`text-sm mt-1 ${
                  hasPaymentSetup
                    ? "text-green-600 dark:text-green-400"
                    : "text-amber-600 dark:text-amber-400"
                }`}>
                  {hasPaymentSetup ? "✓ Configured" : "⚠️ Not configured"}
                </p>
              </div>
            </div>

            {hasPaymentSetup ? (
              <div className="space-y-2 mb-6 text-sm">
                <p className="text-[#6B7280] dark:text-gray-400">
                  <strong>Bank:</strong> {bankDetails.bankName}
                </p>
                <p className="text-[#6B7280] dark:text-gray-400">
                  <strong>Account:</strong> {bankDetails.accountHolder}
                </p>
                <p className="text-[#6B7280] dark:text-gray-400">
                  <strong>Account Number:</strong> ••••••••{bankDetails.accountNumber?.slice(-4)}
                </p>
                <p className="text-[#6B7280] dark:text-gray-400">
                  <strong>IFSC:</strong> {bankDetails.ifscCode}
                </p>
              </div>
            ) : (
              <p className="text-sm text-amber-700 dark:text-amber-300 mb-6">
                Add your bank details to receive payments from subscription customers.
              </p>
            )}

            <button
              onClick={() => navigate("/payment-settings")}
              className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
            >
              {hasPaymentSetup ? "Update Payment Details" : "Configure Payment"}
            </button>
          </div>

          {/* Revenue Stats */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-[#E5E5E5] dark:border-gray-800 p-8">
            <h2 className="text-2xl font-bold text-[#2D2D2D] dark:text-white mb-6">
              📊 Revenue Stats
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-[#6B7280] dark:text-gray-400">Total Revenue</p>
                <p className="text-3xl font-bold text-green-600">$0.00</p>
              </div>
              <div>
                <p className="text-sm text-[#6B7280] dark:text-gray-400">Active Subscribers</p>
                <p className="text-3xl font-bold text-blue-600">0</p>
              </div>
              <div>
                <p className="text-sm text-[#6B7280] dark:text-gray-400">Monthly Recurring Revenue</p>
                <p className="text-3xl font-bold text-purple-600">$0.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Guides */}
        <h2 className="text-2xl font-bold text-[#2D2D2D] dark:text-white mb-6">
          🚀 Payment Integration Guide
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Razorpay Guide */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-[#E5E5E5] dark:border-gray-800 p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🇮🇳</span>
              <h3 className="text-xl font-bold text-[#2D2D2D] dark:text-white">
                Razorpay (Best for India)
              </h3>
            </div>
            <ol className="space-y-3 text-sm text-[#6B7280] dark:text-gray-400 mb-6">
              <li>
                <strong className="text-[#2D2D2D] dark:text-white">1.</strong> Go to{" "}
                <a href="https://razorpay.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  razorpay.com
                </a>
              </li>
              <li>
                <strong className="text-[#2D2D2D] dark:text-white">2.</strong> Sign up with your business details
              </li>
              <li>
                <strong className="text-[#2D2D2D] dark:text-white">3.</strong> Verify your bank account
              </li>
              <li>
                <strong className="text-[#2D2D2D] dark:text-white">4.</strong> Copy your API Key ID from Settings
              </li>
              <li>
                <strong className="text-[#2D2D2D] dark:text-white">5.</strong> Add it to Payment Settings above
              </li>
            </ol>
            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <p className="text-xs text-blue-700 dark:text-blue-300">
                <strong>💡 Pro Tip:</strong> Razorpay supports UPI, bank transfer, and wallets. Settlement in 2-3 days.
              </p>
            </div>
          </div>

          {/* Stripe Guide */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-[#E5E5E5] dark:border-gray-800 p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🌐</span>
              <h3 className="text-xl font-bold text-[#2D2D2D] dark:text-white">
                Stripe (Global)
              </h3>
            </div>
            <ol className="space-y-3 text-sm text-[#6B7280] dark:text-gray-400 mb-6">
              <li>
                <strong className="text-[#2D2D2D] dark:text-white">1.</strong> Go to{" "}
                <a href="https://stripe.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  stripe.com
                </a>
              </li>
              <li>
                <strong className="text-[#2D2D2D] dark:text-white">2.</strong> Create account and add business details
              </li>
              <li>
                <strong className="text-[#2D2D2D] dark:text-white">3.</strong> Navigate to Developers → API Keys
              </li>
              <li>
                <strong className="text-[#2D2D2D] dark:text-white">4.</strong> Copy your Publishable Key
              </li>
              <li>
                <strong className="text-[#2D2D2D] dark:text-white">5.</strong> Add it to Payment Settings above
              </li>
            </ol>
            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <p className="text-xs text-blue-700 dark:text-blue-300">
                <strong>💡 Pro Tip:</strong> Works globally. Supports 135+ countries and all payment methods.
              </p>
            </div>
          </div>
        </div>

        {/* Money Flow */}
        <div className="mt-12 p-8 bg-white dark:bg-gray-900 rounded-2xl border border-[#E5E5E5] dark:border-gray-800">
          <h3 className="text-2xl font-bold text-[#2D2D2D] dark:text-white mb-6">
            💰 How Money Flows to You
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-[#2D2D2D] dark:text-white">Customer Subscribes</p>
                <p className="text-sm text-[#6B7280] dark:text-gray-400">User pays via Stripe/Razorpay on your site</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-[#2D2D2D] dark:text-white">Payment Processed</p>
                <p className="text-sm text-[#6B7280] dark:text-gray-400">Payment processor takes commission (2-3%)</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-[#2D2D2D] dark:text-white">Money to Your Bank</p>
                <p className="text-sm text-[#6B7280] dark:text-gray-400">Amount transferred to your bank account (2-3 days)</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300 font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-[#2D2D2D] dark:text-white">Track Dashboard</p>
                <p className="text-sm text-[#6B7280] dark:text-gray-400">View revenue, subscribers, and transactions here</p>
              </div>
            </div>
          </div>
        </div>

        {/* Example */}
        <div className="mt-12 p-8 bg-green-50 dark:bg-green-950 rounded-2xl border border-green-200 dark:border-green-800">
          <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-4">
            ✅ Example: $9.99 Premium Subscription
          </h3>
          <div className="space-y-2 text-sm text-green-800 dark:text-green-200">
            <p><strong>Customer pays:</strong> $9.99</p>
            <p><strong>Payment fee (2%):</strong> -$0.20</p>
            <p><strong>You receive:</strong> $9.79</p>
            <p className="pt-2 border-t border-green-300 dark:border-green-700"><strong>Your earnings per month:</strong> If 100 subscribers = $979/month</p>
          </div>
        </div>
      </div>
    </div>
  );
}
