// HeatMap component for displaying heat map data
const HeatMap = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 mt-6">

      <h2 className="text-2xl font-semibold mb-4">
        Busy Hours Heat Map
      </h2>

      <div className="grid grid-cols-4 gap-3">

        <div className="bg-blue-100 p-4 rounded-lg text-center">
          9 AM
        </div>

        <div className="bg-blue-300 p-4 rounded-lg text-center">
          10 AM
        </div>

        <div className="bg-blue-500 text-white p-4 rounded-lg text-center">
          11 AM
        </div>

        <div className="bg-blue-700 text-white p-4 rounded-lg text-center">
          12 PM
        </div>

      </div>

    </div>
  );
};

export default HeatMap;