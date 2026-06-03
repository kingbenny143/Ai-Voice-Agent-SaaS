const bookings = [
    {
        id: 1,
        customerName:"RAhul",
        bookingType: "Table Booking",
        bookingDate: "Today",
        status: "Confirmed"
    },

    {
        id: 2,
        customerName:"Anjali",
        bookingType: "Haircut",
        bookingDate: "Tomorrow",
        status: "Pending"
    },

    {
        id: 3,
        customerName:"Vikram",
        bookingType: "Room Booking",
        bookingDate: "Today",
        status: "Confirmed"
    }
]

const RecentBookingsTable = () => {
  return (
        <div className="bg-white rounded-xl shadow-md p-6 mt-6">
            
            <h2 className="text-xl font-semibold mb-4">Recent bookings</h2>
            <table className="w-full border-collapse">
            <thead>
            <tr>
                <th className="text-left p-3 border-b">ID</th>
                <th className="text-left p-3 border-b">Customer Name</th>
                <th className="text-left p-3 border-b">Booking Type</th>
                <th className="text-left p-3 border-b">Booking Date</th>
                <th className="text-left p-3 border-b">Status</th>
            </tr>
            </thead>

            <tbody>
            {
                bookings.map((booking) => (
                    <tr key={booking.id}>
                    <td className="p-3 border-b">{booking.id}</td>
                    <td className="p-3 border-b">{booking.customerName}</td>
                    <td className="p-3 border-b">{booking.bookingType}</td>
                    <td className="p-3 border-b">{booking.bookingDate}</td>
                    <td className="p-3 border-b">{booking.status}</td>
                    </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}

export default RecentBookingsTable