// BookingsPage - Page for managing bookings
import BookingFilter from '../../components/bookings/BookingFilter'
import BookingTable from '../../components/bookings/BookingTable'
import BookingCard from '../../components/bookings/BookingCard'
import CalendarView from "../../components/bookings/CalendarView";
import { useNavigate } from 'react-router-dom';

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
    bookingType: "Table Booking",
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

  const navigate = useNavigate();
  return (
    <div>
      <h2 className='flex justify-center text-2xl font-bold mb-4'>Booking Details</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <BookingFilter />

        <div className="grid grid-cols-4 gap-4 my-6">
            <BookingCard
              title="Total Bookings"
              value="150"
              color="text-blue-600"
            />

            <BookingCard
              title="Confirmed"
              value="120"
              color="text-green-600"
            />

            <BookingCard
              title="Pending"
              value="20"
              color="text-yellow-500"
            />

            <BookingCard
              title="Cancelled"
              value="10"
              color="text-red-500"
            />
          </div>


      </div>
      <BookingTable bookings={bookings} />

      <CalendarView />

      <div className='flex justify-center mt-5'>
        <button 
        className='bg-blue-500 text-white px-4 py-2 rounded-md'
        onClick={
          ()=>{
            navigate('/bookings/new');
          }
        }
        >Create Booking</button>
      </div>
      
    
    </div>
  )
}

export default BookingsPage