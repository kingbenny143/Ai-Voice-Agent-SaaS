// PlanCard.jsx

const PlanCard = ({
  plan,
  price,
  features = [],
  isCurrent = false,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition">

      <h3 className="text-2xl font-bold mb-2">
        {plan}
      </h3>

      <p className="text-3xl font-bold text-blue-600 mb-4">
        {price}
        <span className="text-sm text-gray-500 font-normal">
          /month
        </span>
      </p>

      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-gray-700"
          >
            <span className="text-green-500">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      {isCurrent ? (
        <button
          className="w-full bg-gray-300 text-gray-700 py-2 rounded-lg cursor-not-allowed"
          disabled
        >
          Current Plan
        </button>
      ) : (
        <button
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Upgrade Plan
        </button>
      )}

    </div>
  );
};

export default PlanCard;