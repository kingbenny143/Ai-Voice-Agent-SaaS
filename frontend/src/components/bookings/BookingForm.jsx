// BookingForm component for creating/editing bookings
import { useNavigate } from "react-router-dom";

const BookingForm = () => {

  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mt-5 mx-auto">
      <button
      className="bg-slate-800 text-white px-4 py-2 rounded-md cursor-pointer"
      onClick={
        ()=>{
          navigate('/bookings');
        }}
      >Back</button>
      <h2 className="text-2xl font-bold text-center mb-6">
        Booking Form
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="space-y-4"
      >
        {/* Customer Name */}
        <div>
          <label
            htmlFor="customer"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Customer Name
          </label>

          <input
            type="text"
            id="customer"
            name="customer"
            placeholder="Enter customer name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Booking Type */}
        <div>
          <label
            htmlFor="bookingType"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Booking Type
          </label>

          <select
            id="bookingType"
            name="bookingType"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Table Booking">
              Table Booking
            </option>

            <option value="Haircut">
              Haircut
            </option>

            <option value="Room Booking">
              Room Booking
            </option>
          </select>
        </div>

        {/* Date */}
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Date
          </label>

          <input
            type="date"
            id="date"
            name="date"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Guests */}
        <div>
          <label
            htmlFor="guests"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Guests
          </label>

          <input
            type="number"
            id="guests"
            name="guests"
            placeholder="Number of guests"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Notes */}
        <div>
          <label
            htmlFor="notes"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Notes
          </label>

          <textarea
            id="notes"
            name="notes"
            rows="4"
            placeholder="Additional notes..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Create Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;