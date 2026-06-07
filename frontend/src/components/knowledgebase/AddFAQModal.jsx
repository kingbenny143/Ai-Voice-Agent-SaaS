// AddFAQModal component for adding new FAQ in modal

import FAQForm from "./FAQForm";

const AddFAQModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-2xl">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Add New FAQ
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 text-xl"
          >
            ✕
          </button>
        </div>

        <FAQForm />

      </div>

    </div>
  );
};

export default AddFAQModal;