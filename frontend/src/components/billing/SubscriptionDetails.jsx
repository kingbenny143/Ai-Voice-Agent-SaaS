// SubscriptionDetails.jsx

import UsageBar from "./UsageBar";

const SubscriptionDetails = ({
  plan,
  status,
  renewalDate,
  used,
  total,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6">

      <h2 className="text-2xl font-semibold mb-5">
        Subscription Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

        <div>
          <p className="text-sm text-gray-500">
            Current Plan
          </p>

          <p className="text-lg font-semibold">
            {plan}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Status
          </p>

          <p className="text-lg font-semibold text-green-600">
            {status}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Renewal Date
          </p>

          <p className="text-lg font-semibold">
            {renewalDate}
          </p>
        </div>

      </div>

      <UsageBar
        used={used}
        total={total}
      />

    </div>
  );
};

export default SubscriptionDetails;