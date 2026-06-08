// BookingStatistics component for displaying booking analytics

const BookingStatistics = ({ bookings }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 mt-6">

      <h2 className="text-2xl font-semibold mb-4">
        Booking Statistics
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full table-auto">

          <thead>
            <tr className="bg-slate-100 border-b">
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Total</th>
              <th className="px-4 py-3 text-left">Confirmed</th>
              <th className="px-4 py-3 text-left">Pending</th>
              <th className="px-4 py-3 text-left">Cancelled</th>
            </tr>
          </thead>

          <tbody>

            {bookings.map((booking) => (
              <tr
                key={booking.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="px-4 py-3">
                  {booking.date}
                </td>

                <td className="px-4 py-3">
                  {booking.total}
                </td>

                <td className="px-4 py-3 text-green-600 font-medium">
                  {booking.confirmed}
                </td>

                <td className="px-4 py-3 text-yellow-600 font-medium">
                  {booking.pending}
                </td>

                <td className="px-4 py-3 text-red-600 font-medium">
                  {booking.cancelled}
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default BookingStatistics;