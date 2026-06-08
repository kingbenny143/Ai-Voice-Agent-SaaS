// CallStatistics component for displaying call analytics

const CallStatistics = ({ calls }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 mt-6">

      <h2 className="text-2xl font-semibold mb-4">
        Call Statistics
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full table-auto">

          <thead>
            <tr className="bg-slate-100 border-b">
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Total Calls</th>
              <th className="px-4 py-3 text-left">Answered</th>
              <th className="px-4 py-3 text-left">Missed</th>
              <th className="px-4 py-3 text-left">Avg Duration</th>
            </tr>
          </thead>

          <tbody>

            {calls.map((call) => (
              <tr
                key={call.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="px-4 py-3">
                  {call.date}
                </td>

                <td className="px-4 py-3">
                  {call.totalCalls}
                </td>

                <td className="px-4 py-3 text-green-600 font-medium">
                  {call.answered}
                </td>

                <td className="px-4 py-3 text-red-600 font-medium">
                  {call.missed}
                </td>

                <td className="px-4 py-3">
                  {call.avgDuration}
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default CallStatistics;