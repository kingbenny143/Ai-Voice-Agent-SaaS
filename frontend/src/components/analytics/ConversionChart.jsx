// ConversionChart component for displaying conversion rate data
// ConversionChart.jsx

const ConversionChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 mt-6">

      <h2 className="text-2xl font-semibold mb-4">
        Conversion Funnel
      </h2>

      <div className="h-80 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">

        <div className="text-center space-y-4">
          <div className="bg-blue-100 px-8 py-3 rounded-lg">
            Total Calls: 1000
          </div>

          <div>↓</div>

          <div className="bg-yellow-100 px-8 py-3 rounded-lg">
            Interested Customers: 600
          </div>

          <div>↓</div>

          <div className="bg-green-100 px-8 py-3 rounded-lg">
            Bookings Created: 250
          </div>
        </div>

      </div>

    </div>
  );
};

export default ConversionChart;