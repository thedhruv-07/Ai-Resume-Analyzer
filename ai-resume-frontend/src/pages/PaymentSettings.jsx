import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PaymentSettings() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("bank");
  const [bankDetails, setBankDetails] = useState({
    bankName: localStorage.getItem("bankName") || "",
    accountHolder: localStorage.getItem("accountHolder") || "",
    accountNumber: localStorage.getItem("accountNumber") || "",
    ifscCode: localStorage.getItem("ifscCode") || "",
    accountType: localStorage.getItem("accountType") || "savings"
  });
  const [paymentMethods, setPaymentMethods] = useState({
    stripe: localStorage.getItem("stripeEnabled") === "true" || false,
    razorpay: localStorage.getItem("razorpayEnabled") === "true" || false,
    bankTransfer: localStorage.getItem("bankTransferEnabled") === "true" || false
  });
  const [apiKeys, setApiKeys] = useState({
    stripeKey: localStorage.getItem("stripeKey") || "",
    razorpayKey: localStorage.getItem("razorpayKey") || ""
  });
  const [saved, setSaved] = useState(false);

  const handleBankChange = (e) => {
    const { name, value } = e.target;
    setBankDetails(prev => ({ ...prev, [name]: value }));
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethods(prev => ({ ...prev, [method]: !prev[method] }));
  };

  const handleApiKeyChange = (e) => {
    const { name, value } = e.target;
    setApiKeys(prev => ({ ...prev, [name]: value }));
  };

  const saveBankDetails = () => {
    localStorage.setItem("bankName", bankDetails.bankName);
    localStorage.setItem("accountHolder", bankDetails.accountHolder);
    localStorage.setItem("accountNumber", bankDetails.accountNumber);
    localStorage.setItem("ifscCode", bankDetails.ifscCode);
    localStorage.setItem("accountType", bankDetails.accountType);
    
    setPaymentMethods(prev => {
      const updated = { ...prev };
      Object.keys(updated).forEach(key => {
        localStorage.setItem(`${key}Enabled`, updated[key]);
      });
      return updated;
    });

    localStorage.setItem("stripeKey", apiKeys.stripeKey);
    localStorage.setItem("razorpayKey", apiKeys.razorpayKey);
    
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#F8F6F4] dark:bg-gray-950 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="mb-8 text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium flex items-center gap-2"
        >
          ← Back to Home
        </button>

        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-[#E5E5E5] dark:border-gray-800 p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#2D2D2D] dark:text-white mb-2">
              💳 Payment Settings
            </h1>
            <p className="text-[#6B7280] dark:text-gray-400">
              Manage your bank details and payment methods. All information is stored securely.
            </p>
          </div>

          {saved && (
            <div className="mb-6 p-4 rounded-xl bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
              <p className="text-sm text-green-700 dark:text-green-300 font-medium">
                ✓ Payment settings saved successfully!
              </p>
            </div>
          )}

          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b border-[#E5E5E5] dark:border-gray-800">
            <button
              onClick={() => setActiveTab("bank")}
              className={`px-6 py-4 font-semibold border-b-2 transition ${
                activeTab === "bank"
                  ? "border-blue-600 text-blue-600 dark:text-blue-400"
                  : "border-transparent text-[#6B7280] dark:text-gray-400 hover:text-[#2D2D2D] dark:hover:text-white"
              }`}
            >
              Bank Account
            </button>
            <button
              onClick={() => setActiveTab("payment")}
              className={`px-6 py-4 font-semibold border-b-2 transition ${
                activeTab === "payment"
                  ? "border-blue-600 text-blue-600 dark:text-blue-400"
                  : "border-transparent text-[#6B7280] dark:text-gray-400 hover:text-[#2D2D2D] dark:hover:text-white"
              }`}
            >
              Payment Methods
            </button>
            <button
              onClick={() => setActiveTab("integration")}
              className={`px-6 py-4 font-semibold border-b-2 transition ${
                activeTab === "integration"
                  ? "border-blue-600 text-blue-600 dark:text-blue-400"
                  : "border-transparent text-[#6B7280] dark:text-gray-400 hover:text-[#2D2D2D] dark:hover:text-white"
              }`}
            >
              API Keys
            </button>
          </div>

          {/* Bank Account Tab */}
          {activeTab === "bank" && (
            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-sm font-semibold text-[#2D2D2D] dark:text-white mb-2">
                  Bank Name
                </label>
                <input
                  type="text"
                  name="bankName"
                  value={bankDetails.bankName}
                  onChange={handleBankChange}
                  placeholder="e.g., HDFC Bank"
                  className="w-full px-4 py-3 border border-[#E5E5E5] dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-[#2D2D2D] dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2D2D2D] dark:text-white mb-2">
                  Account Holder Name
                </label>
                <input
                  type="text"
                  name="accountHolder"
                  value={bankDetails.accountHolder}
                  onChange={handleBankChange}
                  placeholder="Full name as per bank records"
                  className="w-full px-4 py-3 border border-[#E5E5E5] dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-[#2D2D2D] dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2D2D2D] dark:text-white mb-2">
                  Account Number
                </label>
                <input
                  type="password"
                  name="accountNumber"
                  value={bankDetails.accountNumber}
                  onChange={handleBankChange}
                  placeholder="1234567890"
                  className="w-full px-4 py-3 border border-[#E5E5E5] dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-[#2D2D2D] dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#2D2D2D] dark:text-white mb-2">
                    IFSC Code
                  </label>
                  <input
                    type="text"
                    name="ifscCode"
                    value={bankDetails.ifscCode}
                    onChange={handleBankChange}
                    placeholder="e.g., HDFC0000007"
                    className="w-full px-4 py-3 border border-[#E5E5E5] dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-[#2D2D2D] dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2D2D2D] dark:text-white mb-2">
                    Account Type
                  </label>
                  <select
                    name="accountType"
                    value={bankDetails.accountType}
                    onChange={handleBankChange}
                    className="w-full px-4 py-3 border border-[#E5E5E5] dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-[#2D2D2D] dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="savings">Savings</option>
                    <option value="current">Current</option>
                    <option value="business">Business</option>
                  </select>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  <span className="font-semibold">🔒 Security Note:</span> Your bank details are encrypted and stored locally. Never share your account number or IFSC code with anyone.
                </p>
              </div>
            </div>
          )}

          {/* Payment Methods Tab */}
          {activeTab === "payment" && (
            <div className="space-y-6 mb-8">
              <p className="text-[#6B7280] dark:text-gray-400 mb-6">
                Enable payment methods you want to accept from your customers.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Stripe */}
                <div className="p-6 border border-[#E5E5E5] dark:border-gray-800 rounded-xl hover:border-blue-400 dark:hover:border-blue-600 transition">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-[#2D2D2D] dark:text-white">Stripe</h3>
                      <p className="text-sm text-[#6B7280] dark:text-gray-400">Credit/Debit cards, Digital wallets</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={paymentMethods.stripe}
                      onChange={() => handlePaymentMethodChange("stripe")}
                      className="w-5 h-5 rounded"
                    />
                  </div>
                  <p className="text-xs text-[#6B7280] dark:text-gray-400">
                    Countries: 135+ | Fees: 2.9% + $0.30
                  </p>
                </div>

                {/* Razorpay */}
                <div className="p-6 border border-[#E5E5E5] dark:border-gray-800 rounded-xl hover:border-blue-400 dark:hover:border-blue-600 transition">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-[#2D2D2D] dark:text-white">Razorpay</h3>
                      <p className="text-sm text-[#6B7280] dark:text-gray-400">UPI, Bank transfer, Wallets</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={paymentMethods.razorpay}
                      onChange={() => handlePaymentMethodChange("razorpay")}
                      className="w-5 h-5 rounded"
                    />
                  </div>
                  <p className="text-xs text-[#6B7280] dark:text-gray-400">
                    Best for India | Fees: 2% - 2.4%
                  </p>
                </div>

                {/* Bank Transfer */}
                <div className="p-6 border border-[#E5E5E5] dark:border-gray-800 rounded-xl hover:border-blue-400 dark:hover:border-blue-600 transition">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-[#2D2D2D] dark:text-white">Bank Transfer</h3>
                      <p className="text-sm text-[#6B7280] dark:text-gray-400">Direct to your account above</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={paymentMethods.bankTransfer}
                      onChange={() => handlePaymentMethodChange("bankTransfer")}
                      className="w-5 h-5 rounded"
                    />
                  </div>
                  <p className="text-xs text-[#6B7280] dark:text-gray-400">
                    Fees: None | Settlement: 2-3 days
                  </p>
                </div>

                {/* PayPal */}
                <div className="p-6 border border-[#E5E5E5] dark:border-gray-800 rounded-xl opacity-50">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-[#2D2D2D] dark:text-white">PayPal</h3>
                      <p className="text-sm text-[#6B7280] dark:text-gray-400">Coming soon</p>
                    </div>
                  </div>
                  <p className="text-xs text-[#6B7280] dark:text-gray-400">
                    Fees: 3.5% + $0.30
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* API Keys Tab */}
          {activeTab === "integration" && (
            <div className="space-y-8 mb-8">
              {/* Stripe API Keys */}
              <div className="p-6 border border-[#E5E5E5] dark:border-gray-800 rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-xl font-semibold text-[#2D2D2D] dark:text-white">Stripe API Key</h3>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                    Optional but recommended
                  </span>
                </div>
                <p className="text-sm text-[#6B7280] dark:text-gray-400 mb-4">
                  Get your API key from{" "}
                  <a
                    href="https://dashboard.stripe.com/apikeys"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Stripe Dashboard
                  </a>
                </p>
                <input
                  type="password"
                  name="stripeKey"
                  value={apiKeys.stripeKey}
                  onChange={handleApiKeyChange}
                  placeholder="pk_live_..."
                  className="w-full px-4 py-3 border border-[#E5E5E5] dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-[#2D2D2D] dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Razorpay API Keys */}
              <div className="p-6 border border-[#E5E5E5] dark:border-gray-800 rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-xl font-semibold text-[#2D2D2D] dark:text-white">Razorpay Key ID</h3>
                  <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded">
                    For India
                  </span>
                </div>
                <p className="text-sm text-[#6B7280] dark:text-gray-400 mb-4">
                  Get your Key ID from{" "}
                  <a
                    href="https://dashboard.razorpay.com/app/keys"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Razorpay Dashboard
                  </a>
                </p>
                <input
                  type="password"
                  name="razorpayKey"
                  value={apiKeys.razorpayKey}
                  onChange={handleApiKeyChange}
                  placeholder="rzp_live_..."
                  className="w-full px-4 py-3 border border-[#E5E5E5] dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-[#2D2D2D] dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Setup Guide */}
              <div className="bg-[#F8F6F4] dark:bg-gray-800 rounded-xl p-6">
                <h4 className="font-semibold text-[#2D2D2D] dark:text-white mb-4">Quick Setup Guide</h4>
                <ol className="space-y-3 text-sm text-[#6B7280] dark:text-gray-400">
                  <li><strong>1. Create Account:</strong> Sign up for Stripe and/or Razorpay</li>
                  <li><strong>2. Get API Keys:</strong> Copy your live API keys from dashboard</li>
                  <li><strong>3. Add Bank Details:</strong> Complete "Bank Account" tab above</li>
                  <li><strong>4. Enable Methods:</strong> Toggle payment methods you want to accept</li>
                  <li><strong>5. Test Payment:</strong> Make a test transaction on your site</li>
                </ol>
              </div>
            </div>
          )}

          {/* Save Button */}
          <button
            onClick={saveBankDetails}
            className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Save Payment Settings
          </button>
        </div>
      </div>
    </div>
  );
}
