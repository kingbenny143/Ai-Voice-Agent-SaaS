// AnalyticsCard component for displaying analytics data

const AnalyticsCard = ({ title, value }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 flex flex-col items-center justify-center min-h-[120px]">
      <p className="text-gray-500 text-sm">
        {title}
      </p>

      <p className="text-3xl font-bold mt-2">
        {value}
      </p>
    </div>
  );
};

export default AnalyticsCard;