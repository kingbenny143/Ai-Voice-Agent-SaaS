// FAQS row

const FAQRow = ({ faq, onView }) => {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-3">{faq.id}</td>
      <td className="px-4 py-3">{faq.question}</td>
      <td className="px-4 py-3">{faq.category}</td>
      <td className="px-4 py-3">{faq.status}</td>

      <td className="px-4 py-3">
        <button
          onClick={() => onView(faq)}
          className="bg-blue-500 text-white px-3 py-1 rounded-md"
        >
          View
        </button>
      </td>
    </tr>
  );
};

export default FAQRow;