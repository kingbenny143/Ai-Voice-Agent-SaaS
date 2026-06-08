// PaymentMethod.jsx

const PaymentMethod = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6">

      <h2 className="text-2xl font-semibold mb-5">
        Payment Method
      </h2>

      <div className="flex items-center justify-between border border-gray-200 rounded-lg p-4">

        <div>
          <p className="text-lg font-medium">
            💳 Visa **** 1234
          </p>

          <p className="text-sm text-gray-500">
            Expires: 12/28
          </p>
        </div>

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Change Card
        </button>

      </div>

    </div>
  );
};

export default PaymentMethod;