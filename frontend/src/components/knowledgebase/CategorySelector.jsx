// CategorySelector component for selecting FAQ categories

const CategorySelector = () => {
  return (
    <div className="flex justify-center bg-white p-3 gap-5 rounded-xl shadow-md">
      <label className="block text-bold font-medium items-center text-gray-700 mb-2">
        Category
      </label>

      <select
        className="w-full md:w-56 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="All Categories">
          All Categories
        </option>

        <option value="Bookings">
          Bookings
        </option>

        <option value="Payments">
          Payments
        </option>

        <option value="Support">
          Support
        </option>

        <option value="General">
          General
        </option>

        <option value="Restaurant">
          Restaurant
        </option>
      </select>
    </div>
  );
};

export default CategorySelector;