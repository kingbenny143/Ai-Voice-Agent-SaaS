// BookingRow component for displaying individual booking details
import StatusBadge from "./StatusBadge";
import { useState } from "react";



const BookingRow = ({ booking, onView }) => { 
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="px-2 py-2">
        {booking.id}
      </td>

      <td className="px-2 py-2">
        {booking.customer} 
      </td>

      <td className="px-2 py-2">
        {booking.bookingType}
      </td>

      <td className="px-2 py-2">
        {booking.date}
      </td>

      <td className="px-2 py-2">
        <StatusBadge status={booking.status} />
      </td>

      <td className="px-2 py-2 text-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        onClick={() => onView(booking)}
        >
          View
        </button>
      </td>
    </tr>
  );
};

export default BookingRow;