// GreetingEditor component for customizing AI greetings

const GreetingEditor = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md">
      
      <h3 className="text-xl font-semibold mb-4">
        Greeting Message
      </h3>

      <p className="text-sm text-gray-500 mb-3">
        This message will be spoken when a customer calls.
      </p>

      <textarea
        rows="5"
        placeholder="Hello! Thank you for calling our restaurant. How can I help you today?"
        className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex justify-end mt-4">
        <button
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          Save Greeting
        </button>
      </div>

    </div>
  );
};

export default GreetingEditor;