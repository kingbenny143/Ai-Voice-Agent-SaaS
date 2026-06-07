// DocumentTable component for displaying document information

import { useState } from "react";
import DocumentRow from "./DocumentRow";
import DocumentViewerModal from "./DocumentViewerModal";

const DocumentTable = ({ documents }) => {
  const [selectedDocument, setSelectedDocument] = useState(null);

  return (
    <div className="bg-white shadow-md p-5 rounded-xl">
      <h2 className="flex justify-center text-2xl font-bold mb-4 text-gray-800">
        Document List
      </h2>

      <table className="w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100">
          <tr className="text-left">
            <th className="px-4 py-3">ID</th>
            <th className="px-4 py-3">File Name</th>
            <th className="px-4 py-3">Type</th>
            <th className="px-4 py-3">Upload Date</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {documents.map((document) => (
            <DocumentRow
              key={document.id}
              document={document}
              onView={setSelectedDocument}
            />
          ))}
        </tbody>
      </table>

      <DocumentViewerModal
        document={selectedDocument}
        onClose={() => setSelectedDocument(null)}
      />
    </div>
  );
};

export default DocumentTable;