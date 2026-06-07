// ToneSelector component for choosing AI tone of voice

const ToneSelector = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md">
      <label className="block text-lg font-semibold mb-3">
        AI Tone
      </label>

      <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option>Friendly</option>
        <option>Professional</option>
        <option>Formal</option>
        <option>Casual</option>
        <option>Luxury</option>
      </select>
    </div>
  );
};

export default ToneSelector;