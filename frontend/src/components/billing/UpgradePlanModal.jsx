// UpgradePlanModal.jsx

const UpgradePlanModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const plans = [
    {
      name: "Starter",
      price: "₹999/month",
      features: [
        "500 Calls",
        "Basic Analytics",
        "Email Support",
      ],
    },
    {
      name: "Pro",
      price: "₹2999/month",
      features: [
        "Unlimited Calls",
        "Advanced Analytics",
        "AI Customization",
      ],
    },
    {
      name: "Enterprise",
      price: "₹9999/month",
      features: [
        "Unlimited Calls",
        "Custom AI",
        "Priority Support",
        "Dedicated Manager",
      ],
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold">
            Upgrade Plan
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-xl"
          >
            ✕
          </button>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className="border border-gray-200 rounded-xl p-5 hover:shadow-lg transition"
            >

              <h3 className="text-xl font-bold mb-2">
                {plan.name}
              </h3>

              <p className="text-2xl font-bold text-blue-600 mb-4">
                {plan.price}
              </p>

              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2"
                  >
                    <span className="text-green-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                Upgrade Now
              </button>

            </div>
          ))}

        </div>

        <div className="flex justify-end mt-6">

          <button
            onClick={onClose}
            className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
          >
            Cancel
          </button>

        </div>

      </div>

    </div>
  );
};

export default UpgradePlanModal;