// FAQDetailsModal component

const FAQDetailsModal = ({ faq, onClose }) => {
  if (!faq) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xl">

        <h2 className="text-2xl font-bold mb-4">
          FAQ Details
        </h2>

        <div className="space-y-3">

          <p>
            <strong>ID:</strong> {faq.id}
          </p>

          <p>
            <strong>Question:</strong> {faq.question}
          </p>

          <p>
            <strong>Answer:</strong> {faq.answer}
          </p>

          <p>
            <strong>Category:</strong> {faq.category}
          </p>

          <p>
            <strong>Status:</strong> {faq.status}
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

export default FAQDetailsModal;