// BillingHistory.jsx

const BillingHistory = ({ history = [] }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6">

      <h2 className="text-2xl font-semibold mb-5">
        Billing History
      </h2>

      <div className="space-y-4">

        {history.map((payment) => (
          <div
            key={payment.id}
            className="flex items-center justify-between border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
          >

            <div>
              <p className="font-medium">
                {payment.month}
              </p>

              <p className="text-sm text-gray-500">
                {payment.date}
              </p>
            </div>

            <div className="text-right">
              <p className="font-semibold">
                {payment.amount}
              </p>

              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  payment.status === "Paid"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {payment.status}
              </span>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default BillingHistory;