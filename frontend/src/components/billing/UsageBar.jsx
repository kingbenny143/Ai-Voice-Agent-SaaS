// UsageBar component for displaying plan usage

const UsageBar = ({ used, total }) => {
  const percentage =
  total > 0
    ? Math.min((used / total) * 100, 100)
    : 0;

  return (
    <div className="w-full">

      <div className="flex justify-between mb-2 text-sm text-gray-600">
        <span>Calls Used</span>
        <span>
          {used} / {total}
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-4">

        <div
          className="bg-blue-600 h-4 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />

      </div>

      <p className="mt-2 text-sm text-gray-500">
        {percentage.toFixed(0)}% Used
      </p>

    </div>
  );
};

export default UsageBar;