// PromptEditor component for editing AI prompts

const PromptEditor = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md">

      <h3 className="text-xl font-semibold mb-4">
        AI Prompt
      </h3>

      <p className="text-sm text-gray-500 mb-3">
        Define how the AI should behave during calls.
      </p>

      <textarea
        rows={8}
        placeholder="You are a restaurant booking assistant. Be polite and collect customer details before confirming bookings."
        className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

    </div>
  );
};

export default PromptEditor;