const calls = [
  {
    id: 1,
    customer: "Rahul",
    phone: "9876543210",
    duration: "3m 20s",
    status: "Completed",
  },
  {
    id: 2,
    customer: "Anjali",
    phone: "9123456789",
    duration: "1m 45s",
    status: "Missed",
  },
  {
    id: 3,
    customer: "Vikram",
    phone: "9988776655",
    duration: "5m 10s",
    status: "Completed",
  },
];

const RecentCallsTable = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6">
      <h2 className="text-xl font-semibold mb-4">
        Recent Calls
      </h2>

      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left p-3 border-b">ID</th>
            <th className="text-left p-3 border-b">Customer</th>
            <th className="text-left p-3 border-b">Phone</th>
            <th className="text-left p-3 border-b">Duration</th>
            <th className="text-left p-3 border-b">Status</th>
          </tr>
        </thead>

        <tbody>
          {calls.map((call) => (
            <tr key={call.id}>
              <td className="p-3 border-b">{call.id}</td>
              <td className="p-3 border-b">{call.customer}</td>
              <td className="p-3 border-b">{call.phone}</td>
              <td className="p-3 border-b">{call.duration}</td>
              <td className="p-3 border-b">{call.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentCallsTable;