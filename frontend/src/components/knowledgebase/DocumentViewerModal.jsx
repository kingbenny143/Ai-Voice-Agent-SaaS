// DocumentViewerModal component for viewing document in modal

import React from 'react'

const DocumentViewerModal = ({ document, onClose }) => {
  if (!document) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xl">

        <h2 className="text-2xl font-bold mb-4">
          Document Details
        </h2>

        <div className="space-y-3">

          <p>
            <strong>ID:</strong> {document.id}
          </p>

          <p>
            <strong>File Name:</strong> {document.fileName}
          </p>

          <p>
            <strong>Type:</strong> {document.type}
          </p>

          <p>
            <strong>Upload Date:</strong> {document.uploadDate}
          </p>

          <p>
            <strong>Category:</strong> {document.category}
          </p>

          <p>
            <strong>Description:</strong> {document.description}
          </p>

        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
        >
          Close
        </button>

      </div>

    </div>
  );
};

export default DocumentViewerModal;