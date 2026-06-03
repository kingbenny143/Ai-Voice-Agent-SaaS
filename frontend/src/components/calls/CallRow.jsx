const CallRow = ({ call, onView }) => {
  return (
    <tr className="border-b hover:bg-gray-50 transition">
      <td className="px-4 py-3">{call.id}</td>

      <td className="px-4 py-3 font-medium">
        {call.customer}
      </td>

      <td className="px-4 py-3">
        {call.phone}
      </td>

      <td className="px-4 py-3">
        {call.duration}
      </td>

      <td className="px-4 py-3">
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            call.status === "Completed"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {call.status}
        </span>
      </td>

      <td className="px-4 py-3">
        <button
          onClick={() => onView(call)}
          className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700"
        >
          View
        </button>
      </td>
    </tr>
  );
};

export default CallRow;