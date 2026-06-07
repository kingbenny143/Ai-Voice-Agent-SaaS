// DocumentRow component for displaying document information

const DocumentRow = ({ document, onView }) => {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-3">{document.id}</td>
      <td className="px-4 py-3">{document.fileName}</td>
      <td className="px-4 py-3">{document.type}</td>
      <td className="px-4 py-3">{document.uploadDate}</td>

      <td className="px-4 py-3">
        <button
          onClick={() => onView(document)}
          className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
        >
          View
        </button>
      </td>
    </tr>
  );
};

export default DocumentRow;