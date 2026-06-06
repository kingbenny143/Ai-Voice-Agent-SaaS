// BookingTable component for displaying all bookings
import { useState } from "react";
import BookingRow from "./BookingRow";

const BookingTable = ({ bookings }) => {

  const [selectedBooking, setSelectedBooking] = useState(null);
  const [closeModal, setCloseModal] = useState(null);

  return (
    <div className="bg-white rounded-xl shadow-md p-5 mt-6">
      <h2 className="text-2xl font-semibold mb-4">
        Booking History
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-slate-100 border-b">
              <th className="px-4 py-3 text-left w-16">ID</th>
              <th className="px-4 py-3 text-left">Customer</th>
              <th className="px-4 py-2 text-left">Booking Type</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-center w-32" >Action</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking.id}
                booking={booking}
                onView={setSelectedBooking}
                onClose={setCloseModal}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingTable;