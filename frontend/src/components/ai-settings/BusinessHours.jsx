// BusinessHours component for setting business hours

const BusinessHours = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold mb-4">
        Business Hours
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Opening Time
          </label>

          <input
            type="time"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Closing Time
          </label>

          <input
            type="time"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessHours;