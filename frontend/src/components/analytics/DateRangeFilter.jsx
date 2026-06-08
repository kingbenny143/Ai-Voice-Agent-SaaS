// DateRangeFilter component for filtering analytics data by date range

const DateRangeFilter = ({ value, onChange }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex items-center gap-4">

      <label className="font-medium text-gray-700">
        Date Range
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="Today">Today</option>
        <option value="Yesterday">Yesterday</option>
        <option value="Last 7 Days">Last 7 Days</option>
        <option value="Last 30 Days">Last 30 Days</option>
        <option value="This Month">This Month</option>
        <option value="This Year">This Year</option>
      </select>

    </div>
  );
};

export default DateRangeFilter;