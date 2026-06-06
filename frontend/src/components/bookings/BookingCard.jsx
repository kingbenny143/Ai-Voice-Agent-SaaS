// BookingCard component for individual booking display

const BookingCard = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex flex-wrap gap-4 items-center">

            <input
            type="text"
            placeholder="Search Booking..."
            className="border border-gray-300 px-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select className="w-48 border border-gray-300 px-2 py-1 rounded-md">
                <option className="text-gray-500" value="all">All Status</option>
                <option className="text-gray-500" value="success">Completed</option>
                <option className="text-gray-500" value="failed">Missed</option>
                <option className="text-gray-500" value="pending">Pending</option>
            </select>
            <select className="border border-gray-300 px-4 py-2 rounded-lg">
                <option className="text-gray-500" value="Today">Today</option>
                <option className="text-gray-500" value="ThisWeek">This Week</option>
                <option className="text-gray-500" value="ThisMonth">This Month</option>
                <option className="text-gray-500" value="ThisYear">This Year</option>
            </select>
        </div>
    </div>
  )
}


export default BookingCard