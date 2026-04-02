import { useNavigate } from "react-router-dom";

export default function Pricing() {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "Forever",
      description: "Perfect to get started",
      features: [
        "3 free analyses per tool",
        "Basic ATS checking",
        "Job match percentage",
        "Limited keyword suggestions",
        "Community support"
      ],
      cta: "Get Started",
      ctaVariant: "outline",
      highlighted: false
    },
    {
      name: "Premium",
      price: "$9.99",
      period: "/month",
      description: "Most popular for job seekers",
      features: [
        "Unlimited analyses",
        "Full ATS compatibility reports",
        "Advanced job matching",
        "Detailed keyword analysis",
        "Download reports as PDF",
        "Resume version history",
        "Priority support",
        "Advanced AI insights"
      ],
      cta: "Start Premium",
      ctaVariant: "solid",
      highlighted: true
    },
    {
      name: "Pro",
      price: "$24.99",
      period: "/month",
      description: "For professional resume optimization",
      features: [
        "Everything in Premium",
        "Custom resume templates",
        "LinkedIn profile optimizer",
        "Tailored resume rewriting",
        "Company-specific ATS analyzer",
        "Interview question generator",
        "Salary negotiation guide",
        "1-on-1 career coaching"
      ],
      cta: "Start Pro",
      ctaVariant: "solid",
      highlighted: false
    }
  ];

  const annualSavings = [
    { plan: "Premium", monthly: 9.99, annual: 79, save: "35%" },
    { plan: "Pro", monthly: 24.99, annual: 199, save: "34%" }
  ];

  return (
    <div className="min-h-screen bg-[#F8F6F4] dark:bg-gray-950 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#2D2D2D] dark:text-white mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-[#6B7280] dark:text-gray-300 max-w-2xl mx-auto">
            Choose the plan that fits your needs. Always fair, no hidden fees.
          </p>
        </div>

        {/* Toggle Annual/Monthly */}
        <div className="flex justify-center items-center gap-4 mb-16">
          <span className="text-[#6B7280] dark:text-gray-400">Monthly</span>
          <div className="relative inline-flex bg-[#E5E5E5] dark:bg-gray-800 rounded-full p-1">
            <button className="px-6 py-2 rounded-full bg-white dark:bg-gray-900 text-[#2D2D2D] dark:text-white font-semibold shadow-sm">
              Monthly
            </button>
            <button className="px-6 py-2 rounded-full text-[#6B7280] dark:text-gray-400 font-semibold">
              Annual (Save up to 35%)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border transition ${
                plan.highlighted
                  ? "border-blue-400 dark:border-blue-500 bg-white dark:bg-gray-900 ring-2 ring-blue-400 dark:ring-blue-500 shadow-lg md:scale-105"
                  : "border-[#E5E5E5] dark:border-gray-800 bg-white dark:bg-gray-900"
              } p-8`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#2D2D2D] dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-[#6B7280] dark:text-gray-400 text-sm mb-4">
                  {plan.description}
                </p>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-[#2D2D2D] dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-[#6B7280] dark:text-gray-400 ml-2">
                    {plan.period}
                  </span>
                </div>
              </div>

              <button
                className={`w-full py-3 rounded-xl font-semibold mb-8 transition ${
                  plan.ctaVariant === "solid"
                    ? "bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 text-white"
                    : "border-2 border-[#E5E5E5] dark:border-gray-700 text-[#2D2D2D] dark:text-white hover:bg-[#F5F3F0] dark:hover:bg-gray-800"
                }`}
              >
                {plan.cta}
              </button>

              <div className="border-t border-[#E5E5E5] dark:border-gray-800 pt-8">
                <p className="text-xs font-semibold text-[#6B7280] dark:text-gray-400 uppercase tracking-wider mb-4">
                  What's Included
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature, fidx) => (
                    <li
                      key={fidx}
                      className="flex items-start gap-3 text-[#2D2D2D] dark:text-gray-300"
                    >
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Annual Savings Table */}
        <div className="max-w-2xl mx-auto mb-20">
          <h3 className="text-2xl font-bold text-[#2D2D2D] dark:text-white text-center mb-8">
            Save More with Annual Plans
          </h3>
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-[#E5E5E5] dark:border-gray-800 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#E5E5E5] dark:border-gray-800 bg-[#F8F6F4] dark:bg-gray-800">
                  <th className="text-left px-6 py-4 font-semibold text-[#2D2D2D] dark:text-white">
                    Plan
                  </th>
                  <th className="text-left px-6 py-4 font-semibold text-[#2D2D2D] dark:text-white">
                    Monthly
                  </th>
                  <th className="text-left px-6 py-4 font-semibold text-[#2D2D2D] dark:text-white">
                    Annual
                  </th>
                  <th className="text-left px-6 py-4 font-semibold text-green-600">
                    Save
                  </th>
                </tr>
              </thead>
              <tbody>
                {annualSavings.map((row, idx) => (
                  <tr key={idx} className="border-b border-[#E5E5E5] dark:border-gray-800 last:border-b-0">
                    <td className="px-6 py-4 text-[#2D2D2D] dark:text-white font-medium">
                      {row.plan}
                    </td>
                    <td className="px-6 py-4 text-[#6B7280] dark:text-gray-400">
                      ${(row.monthly * 12).toFixed(2)}
                    </td>
                    <td className="px-6 py-4 text-[#2D2D2D] dark:text-white font-semibold">
                      ${row.annual}
                    </td>
                    <td className="px-6 py-4 text-green-600 font-semibold">
                      {row.save}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-[#2D2D2D] dark:text-white text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="space-y-6">
            {[
              {
                q: "Can I upgrade or downgrade anytime?",
                a: "Yes! You can change your plan at any time. Changes take effect immediately."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, PayPal, and Apple Pay for easy and secure payments."
              },
              {
                q: "Is there a money-back guarantee?",
                a: "Absolutely! If you're not satisfied, we offer a 14-day full refund, no questions asked."
              },
              {
                q: "Do I need to provide credit card for free trial?",
                a: "No credit card required! You get 3 free analyses per tool right away. Premium is optional."
              },
              {
                q: "Can teams or companies use this?",
                a: "Yes! Contact our sales team for custom enterprise plans and bulk licenses."
              },
              {
                q: "What happens if I cancel?",
                a: "Your account data is safely stored. Downgrade to free and keep analyzing with 3 free analyses."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-[#E5E5E5] dark:border-gray-800"
              >
                <h4 className="font-semibold text-[#2D2D2D] dark:text-white mb-2">
                  {item.q}
                </h4>
                <p className="text-[#6B7280] dark:text-gray-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <p className="text-[#6B7280] dark:text-gray-400 mb-6">
            Ready to optimize your resume?
          </p>
          <button
            onClick={() => navigate("/tools")}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 text-white rounded-xl font-semibold transition"
          >
            Start Free Trial →
          </button>
          <p className="text-xs text-[#6B7280] dark:text-gray-600 mt-8">
            <button
              onClick={() => navigate("/admin")}
              className="text-blue-600 hover:underline"
            >
              Business Owner?
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
