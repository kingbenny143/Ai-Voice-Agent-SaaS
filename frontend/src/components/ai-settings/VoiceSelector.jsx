// VoiceSelector component for choosing AI voice

const VoiceSelector = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md">
      <label className="block text-lg font-semibold mb-3">
        Voice Selection
      </label>

      <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option>Female Voice</option>
        <option>Male Voice</option>
        <option>Professional Voice</option>
        <option>Friendly Voice</option>
      </select>
    </div>
  );
};

export default VoiceSelector;