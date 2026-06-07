// BookingModal component for displaying booking form in a modal

const BookingModal = ({ booking, onClose }) => {
  if (!booking) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg">

        <h2 className="text-2xl font-bold mb-4">
          Booking Details
        </h2>

        <div className="space-y-3">

          <p>
            <strong>Customer:</strong> {booking.customer}
          </p>

          <p>
            <strong>Booking Type:</strong> {booking.bookingType}
          </p>

          <p>
            <strong>Date:</strong> {booking.date}
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
  );
};

export default BookingModal;