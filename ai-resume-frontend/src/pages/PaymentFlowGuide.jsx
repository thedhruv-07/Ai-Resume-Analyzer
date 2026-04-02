import { useNavigate } from "react-router-dom";

export default function PaymentFlowGuide() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F6F4] dark:bg-gray-950 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate("/admin")}
          className="mb-8 text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium flex items-center gap-2"
        >
          ← Back to Admin
        </button>

        <div className="space-y-12">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-5xl font-bold text-[#2D2D2D] dark:text-white mb-4">
              💰 How You Receive Money
            </h1>
            <p className="text-xl text-[#6B7280] dark:text-gray-300">
              Complete payment flow from customer to your bank account
            </p>
          </div>

          {/* Step-by-Step Flow */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-[#E5E5E5] dark:border-gray-800 p-8">
            <h2 className="text-3xl font-bold text-[#2D2D2D] dark:text-white mb-8">
              Payment Journey: 4 Simple Steps
            </h2>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900">
                    <span className="h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                      1
                    </span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-[#2D2D2D] dark:text-white mb-2">
                    Customer Subscribes
                  </h3>
                  <p className="text-[#6B7280] dark:text-gray-400 mb-4">
                    User visits your site, selects a plan (Premium $9.99 or Pro $24.99/month), and clicks "Subscribe"
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      <strong>Example:</strong> Customer chooses Premium plan at $9.99/month
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900">
                    <span className="h-6 w-6 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">
                      2
                    </span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-[#2D2D2D] dark:text-white mb-2">
                    Payment Processor Takes Commission
                  </h3>
                  <p className="text-[#6B7280] dark:text-gray-400 mb-4">
                    Payment is processed through Stripe/Razorpay. They deduct their commission and hold the rest.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4">
                      <p className="text-sm font-semibold text-green-900 dark:text-green-200 mb-2">Razorpay (Best for India):</p>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        • Customer pays: <strong>$9.99</strong><br/>
                        • Commission: <strong>2% = $0.20</strong><br/>
                        • You get: <strong>$9.79</strong> (held temporarily)
                      </p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                      <p className="text-sm font-semibold text-purple-900 dark:text-purple-200 mb-2">Stripe (Global):</p>
                      <p className="text-sm text-purple-700 dark:text-purple-300">
                        • Customer pays: <strong>$9.99</strong><br/>
                        • Commission: <strong>2.9% + $0.30 = $0.59</strong><br/>
                        • You get: <strong>$9.40</strong> (held temporarily)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900">
                    <span className="h-6 w-6 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">
                      3
                    </span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-[#2D2D2D] dark:text-white mb-2">
                    Settlement to Your Bank Account
                  </h3>
                  <p className="text-[#6B7280] dark:text-gray-400 mb-4">
                    After 2-3 business days, the money (minus commission) is transferred directly to your bank account you configured in Payment Settings.
                  </p>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                        <p className="text-xs font-semibold text-orange-700 dark:text-orange-200 uppercase mb-1">Razorpay Settlement</p>
                        <p className="text-sm text-orange-900 dark:text-orange-200 font-bold">2-3 days</p>
                      </div>
                      <div className="bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4">
                        <p className="text-xs font-semibold text-indigo-700 dark:text-indigo-200 uppercase mb-1">Stripe Settlement</p>
                        <p className="text-sm text-indigo-900 dark:text-indigo-200 font-bold">5-7 days</p>
                      </div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        <strong>Your bank details:</strong> {localStorage.getItem("accountHolder") || "Not configured yet"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-900">
                    <span className="h-6 w-6 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">
                      4
                    </span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-[#2D2D2D] dark:text-white mb-2">
                    Money in Your Account! 🎉
                  </h3>
                  <p className="text-[#6B7280] dark:text-gray-400 mb-4">
                    Money arrives in your bank account. You can now use it, withdraw it, or let it accumulate. Track everything in your Admin Dashboard.
                  </p>
                  <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <p className="text-sm text-green-700 dark:text-green-300">
                      <strong>✓ Money is yours!</strong> Use it immediately - no holding periods or withdrawal fees
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Monthly Earnings Example */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 rounded-2xl border border-green-200 dark:border-green-800 p-8">
            <h2 className="text-3xl font-bold text-green-900 dark:text-green-100 mb-8">
              📊 Real Earnings Example
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-4">
                  Scenario: 100 Premium Subscribers
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-green-900 rounded-xl p-6">
                    <p className="text-sm text-green-700 dark:text-green-300 font-semibold mb-3">Using Razorpay (2% fee)</p>
                    <div className="space-y-2 text-sm text-green-800 dark:text-green-200">
                      <p>• 100 subscribers × $9.99 = <strong>$999.00</strong></p>
                      <p>• Razorpay fee (2%) = <strong>-$19.98</strong></p>
                      <p className="border-t border-green-300 pt-2 font-bold text-lg">
                        You receive: <strong className="text-green-600 dark:text-green-300">$979.02/month</strong>
                      </p>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-green-900 rounded-xl p-6">
                    <p className="text-sm text-green-700 dark:text-green-300 font-semibold mb-3">Using Stripe (2.9% + $0.30)</p>
                    <div className="space-y-2 text-sm text-green-800 dark:text-green-200">
                      <p>• 100 subscribers × $9.99 = <strong>$999.00</strong></p>
                      <p>• Stripe fee (2.9% + $0.30) = <strong>-$59.70</strong></p>
                      <p className="border-t border-green-300 pt-2 font-bold text-lg">
                        You receive: <strong className="text-green-600 dark:text-green-300">$939.30/month</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-green-900 rounded-xl p-6">
                <p className="text-sm text-green-700 dark:text-green-300 font-semibold mb-3">Annual Projection (100 Premium Subscribers)</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-green-800 dark:text-green-200">
                  <div>
                    <p className="font-bold mb-1">Razorpay:</p>
                    <p>$979.02/month × 12 = <strong className="text-lg text-green-600 dark:text-green-300">$11,748.24/year</strong></p>
                  </div>
                  <div>
                    <p className="font-bold mb-1">Stripe:</p>
                    <p>$939.30/month × 12 = <strong className="text-lg text-green-600 dark:text-green-300">$11,271.60/year</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-[#E5E5E5] dark:border-gray-800 p-8">
            <h2 className="text-3xl font-bold text-[#2D2D2D] dark:text-white mb-8">
              ⏱️ Money Timeline
            </h2>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="min-w-24 font-semibold text-blue-600">Day 1</div>
                <div className="text-[#6B7280] dark:text-gray-400">Customer pays via your pricing page</div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="min-w-24 font-semibold text-blue-600">Day 1-2</div>
                <div className="text-[#6B7280] dark:text-gray-400">Payment processor (Stripe/Razorpay) processes payment</div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="min-w-24 font-semibold text-green-600">Day 3-5 (Razorpay) / Day 5-7 (Stripe)</div>
                <div className="text-[#6B7280] dark:text-gray-400">
                  <strong>✓ Money deposited in your bank account!</strong>
                  <br/>
                  Settlement happens automatically to the bank account you configured
                </div>
              </div>
            </div>
          </div>

          {/* Payment Methods Customers Can Use */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-[#E5E5E5] dark:border-gray-800 p-8">
            <h2 className="text-3xl font-bold text-[#2D2D2D] dark:text-white mb-8">
              🛒 Payment Methods Your Customers Can Use
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-[#E5E5E5] dark:border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#2D2D2D] dark:text-white mb-4">Razorpay (India)</h3>
                <ul className="space-y-2 text-[#6B7280] dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span> Debit/Credit Cards
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span> UPI (Fastest in India)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span> Net Banking
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span> Google Pay, PhonePe, etc.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span> Bank Transfer
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                  <p className="text-xs text-green-700 dark:text-green-300">
                    <strong>Best for India!</strong> Instant UPI payments
                  </p>
                </div>
              </div>

              <div className="border border-[#E5E5E5] dark:border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#2D2D2D] dark:text-white mb-4">Stripe (Global)</h3>
                <ul className="space-y-2 text-[#6B7280] dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span> Credit/Debit Cards
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span> Apple Pay
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span> Google Pay
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span> Bank Transfer (ACH)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span> Works in 135+ countries
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <p className="text-xs text-blue-700 dark:text-blue-300">
                    <strong>Global reach!</strong> Accept payments worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tracking Your Money */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-[#E5E5E5] dark:border-gray-800 p-8">
            <h2 className="text-3xl font-bold text-[#2D2D2D] dark:text-white mb-8">
              📈 Track Your Money
            </h2>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-2xl">📊</div>
                <div>
                  <h3 className="font-bold text-[#2D2D2D] dark:text-white">Admin Dashboard</h3>
                  <p className="text-[#6B7280] dark:text-gray-400">
                    See total revenue, active subscribers, and monthly recurring revenue in real-time
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl">💼</div>
                <div>
                  <h3 className="font-bold text-[#2D2D2D] dark:text-white">Razorpay/Stripe Dashboard</h3>
                  <p className="text-[#6B7280] dark:text-gray-400">
                    Log in to your payment processor account. See all transactions, payouts, and disputes
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl">🏦</div>
                <div>
                  <h3 className="font-bold text-[#2D2D2D] dark:text-white">Your Bank Account</h3>
                  <p className="text-[#6B7280] dark:text-gray-400">
                    Check your bank account statements. Money appears as deposits from Razorpay/Stripe
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl">📧</div>
                <div>
                  <h3 className="font-bold text-[#2D2D2D] dark:text-white">Email Notifications</h3>
                  <p className="text-[#6B7280] dark:text-gray-400">
                    Get email alerts when customers subscribe and when money settles to your bank
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tax & Reporting */}
          <div className="bg-yellow-50 dark:bg-yellow-950 rounded-2xl border border-yellow-200 dark:border-yellow-800 p-8">
            <h2 className="text-3xl font-bold text-yellow-900 dark:text-yellow-100 mb-6">
              ⚠️ Important: Taxes & Reporting
            </h2>

            <div className="space-y-4 text-yellow-800 dark:text-yellow-200">
              <p>
                <strong>You are responsible for:</strong>
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex gap-2">
                  <span>✓</span> <span>Recording all income from subscriptions</span>
                </li>
                <li className="flex gap-2">
                  <span>✓</span> <span>Paying income taxes on your earnings</span>
                </li>
                <li className="flex gap-2">
                  <span>✓</span> <span>Filing necessary tax returns in your country</span>
                </li>
                <li className="flex gap-2">
                  <span>✓</span> <span>Keeping records for tax purposes (bank statements, invoices)</span>
                </li>
              </ul>
              <p className="mt-4 pt-4 border-t border-yellow-300">
                <strong>💡 Tip:</strong> Both Razorpay and Stripe provide detailed transaction reports and 1099 forms for tax filing. Download these regularly for your records.
              </p>
            </div>
          </div>

          {/* Setup Steps */}
          <div className="bg-blue-50 dark:bg-blue-950 rounded-2xl border border-blue-200 dark:border-blue-800 p-8">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-8">
              ✅ Setup Checklist to Start Receiving Money
            </h2>

            <div className="space-y-4">
              <div className="flex gap-4 items-start bg-white dark:bg-blue-900 p-4 rounded-lg">
                <input type="checkbox" className="mt-1" defaultChecked />
                <div>
                  <p className="font-semibold text-[#2D2D2D] dark:text-white">Add Your Bank Details</p>
                  <p className="text-sm text-[#6B7280] dark:text-gray-400">Go to Payment Settings and add your bank account information</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-white dark:bg-blue-900 p-4 rounded-lg">
                <input type="checkbox" className="mt-1" />
                <div>
                  <p className="font-semibold text-[#2D2D2D] dark:text-white">Enable Payment Methods</p>
                  <p className="text-sm text-[#6B7280] dark:text-gray-400">Toggle which payment methods to accept (Razorpay, Stripe)</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-white dark:bg-blue-900 p-4 rounded-lg">
                <input type="checkbox" className="mt-1" />
                <div>
                  <p className="font-semibold text-[#2D2D2D] dark:text-white">Add API Keys</p>
                  <p className="text-sm text-[#6B7280] dark:text-gray-400">Copy your API keys from Razorpay/Stripe dashboards</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-white dark:bg-blue-900 p-4 rounded-lg">
                <input type="checkbox" className="mt-1" />
                <div>
                  <p className="font-semibold text-[#2D2D2D] dark:text-white">Test a Payment</p>
                  <p className="text-sm text-[#6B7280] dark:text-gray-400">Make a test subscription to verify everything works</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-white dark:bg-blue-900 p-4 rounded-lg">
                <input type="checkbox" className="mt-1" />
                <div>
                  <p className="font-semibold text-[#2D2D2D] dark:text-white">Monitor Admin Dashboard</p>
                  <p className="text-sm text-[#6B7280] dark:text-gray-400">Check your Revenue Stats and track incoming money</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-2 gap-6">
            <button
              onClick={() => navigate("/payment-settings")}
              className="p-6 bg-white dark:bg-gray-900 border border-[#E5E5E5] dark:border-gray-800 rounded-2xl hover:border-blue-400 dark:hover:border-blue-600 transition text-left"
            >
              <div className="text-3xl mb-3">💳</div>
              <h3 className="font-bold text-[#2D2D2D] dark:text-white mb-2">Payment Settings</h3>
              <p className="text-sm text-[#6B7280] dark:text-gray-400">Configure your bank details and payment methods</p>
            </button>

            <button
              onClick={() => navigate("/admin")}
              className="p-6 bg-white dark:bg-gray-900 border border-[#E5E5E5] dark:border-gray-800 rounded-2xl hover:border-blue-400 dark:hover:border-blue-600 transition text-left"
            >
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold text-[#2D2D2D] dark:text-white mb-2">Admin Dashboard</h3>
              <p className="text-sm text-[#6B7280] dark:text-gray-400">Track revenue, subscribers, and earnings</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
