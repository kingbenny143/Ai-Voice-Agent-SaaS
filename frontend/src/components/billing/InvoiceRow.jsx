// InvoiceRow.jsx

const InvoiceRow = ({ invoice }) => {
  return (
    <tr className="border-b hover:bg-gray-50">

      <td className="px-4 py-3">
        {invoice.id}
      </td>

      <td className="px-4 py-3 font-medium">
        {invoice.amount}
      </td>

      <td className="px-4 py-3">
        {invoice.date}
      </td>

      <td className="px-4 py-3">
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            invoice.status === "Paid"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {invoice.status}
        </span>
      </td>

      <td className="px-4 py-3">
        <button className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700">
          Download
        </button>
      </td>

    </tr>
  );
};

export default InvoiceRow;