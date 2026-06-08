// PerformanceMetrics component

const PerformanceMetrics = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 mt-6">

      <h2 className="text-2xl font-semibold mb-4">
        Performance Metrics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-gray-600">AI Response Time</h3>
          <p className="text-2xl font-bold text-blue-600">1.2s</p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-gray-600">Conversion Rate</h3>
          <p className="text-2xl font-bold text-green-600">78%</p>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="text-gray-600">Transfer Rate</h3>
          <p className="text-2xl font-bold text-yellow-600">12%</p>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="text-gray-600">Customer Rating</h3>
          <p className="text-2xl font-bold text-purple-600">4.8/5</p>
        </div>

      </div>

    </div>
  );
};

export default PerformanceMetrics;