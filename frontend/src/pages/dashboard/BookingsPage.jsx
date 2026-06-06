// BookingsPage - Page for managing bookings
import BookingCard from '../../components/bookings/BookingCard'
import BookingTable from '../../components/bookings/BookingTable'



const bookings = [
  {
    id: 1,
    customer: "Rahul",
    bookingType: "Table Booking",
    date: "2026-06-04",
    status: "Confirmed",
    action: "View"
  },
  {
    id: 2,
    customer: "Anjali",
    bookingType: "Haircut",
    date: "2026-06-05",
    status: "Pending",
    action: "View"
  },
  {
    id: 3,
    customer: "Anish",
    bookingType: "Haircut",
    date: "2026-06-06",
    status: "Missed",
    action: "View"
  },
  {
    id: 4,
    customer: "vishal",
    bookingType: "Haircut",
    date: "2026-06-07",
    status: "Completed",
    action: "View"
  },
  {
    id: 5,
    customer: "ram",
    bookingType: "Haircut",
    date: "2026-06-08",
    status: "Pending",
    action: "View"
  }
];

const BookingsPage = () => {
  return (
    <div>
      <h2 className='flex justify-center text-2xl font-bold mb-4'>Booking Details</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <BookingCard />
      </div>
      <BookingTable bookings={bookings} />
    </div>
  )
}

export default BookingsPage