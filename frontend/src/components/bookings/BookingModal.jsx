// BookingModal component for displaying booking form in a modal

const BookingModal = ({ booking, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto" id="right">

        <h2 className="text-2xl font-bold mb-4">
          Booking Details
        </h2>

        <div className="space-y-3">
          <p>
            <strong>Customer:</strong> {booking.customer}
          </p>

          <p>
            <strong>Phone:</strong> {booking.phone}
          </p>

          <p>
            <strong>Duration:</strong> {booking.duration}
          </p>

          <p>
            <strong>Status:</strong> {booking.status}
          </p>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
        >
          Close
        </button>

      </div>
    </div>
  )
}

export default BookingModal