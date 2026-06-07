// LanguageDropdown component for selecting AI language

const LanguageDropdown = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md">
      <label className="block text-lg font-semibold mb-3">
        Language
      </label>

      <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option>English</option>
        <option>Hindi</option>
        <option>Kannada</option>
        <option>Tamil</option>
        <option>Telugu</option>
      </select>
    </div>
  );
};

export default LanguageDropdown;