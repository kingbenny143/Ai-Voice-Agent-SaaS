// FAQForm component for creating/editing FAQs
// FAQForm component for creating/editing FAQs

const FAQForm = () => {
  return (
    <form className="space-y-4">

      {/* Question */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Question
        </label>

        <input
          type="text"
          placeholder="Enter FAQ question"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Answer */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Answer
        </label>

        <textarea
          rows="5"
          placeholder="Enter FAQ answer"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Category
        </label>

        <select
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>General</option>
          <option>Bookings</option>
          <option>Payments</option>
          <option>Support</option>
          <option>Restaurant</option>
        </select>
      </div>

      {/* Status */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Status
        </label>

        <select
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      {/* Save Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
      >
        Save FAQ
      </button>

    </form>
  );
};

export default FAQForm;