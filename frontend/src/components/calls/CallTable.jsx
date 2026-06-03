import { useState } from "react";
import CallRow from "./CallRow";
import CallDetailsModal from "./CallDetailsModal";

const CallTable = () => {
  const [selectedCall, setSelectedCall] = useState(null);

  const calls = [
    {
      id: 1,
      customer: "Rahul",
      phone: "9876543210",
      duration: "3m 20s",
      status: "Completed",
      summary: "Customer booked a table for 4 people tomorrow."
    },
    {
      id: 2,
      customer: "Anjali",
      phone: "9123456789",
      duration: "1m 45s",
      status: "Missed",
      summary: "Customer disconnected before completing booking."
    },
    {
      id: 3,
      customer: "Vikram",
      phone: "9988776655",
      duration: "5m 10s",
      status: "Completed",
      summary: "Customer asked for information about the menu."
    },

    {
      id: 4,
      customer: "Deepak",
      phone: "9555555555",
      duration: "2m 30s",
      status: "Completed",
      summary: "Customer requested a refund."
    },
    
    {
      id: 5,
      customer: "Rajiv",
      phone: "9222222222",
      duration: "4m 15s",
      status: "Completed",
      summary: "Customer asked for information about the menu."
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6">
      <h2 className="text-2xl font-semibold mb-4">
        Call History
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-100 border-b">
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Customer</th>
              <th className="px-4 py-3 text-left">Phone</th>
              <th className="px-4 py-3 text-left">Duration</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {calls.map((call) => (
              <CallRow
                key={call.id}
                call={call}
                onView={setSelectedCall}
              />
            ))}
          </tbody>
        </table>
      </div>

      <CallDetailsModal
        call={selectedCall}
        onClose={() => setSelectedCall(null)}
      />
    </div>
  );
};

export default CallTable;