// BookingCard component for individual booking display

const BookingCard = ({ title, value, color }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md">
      <p className="text-gray-500 text-sm">
        {title}
      </p>

      <p className={`text-3xl font-bold mt-2 ${color}`}>
        {value}
      </p>
    </div>
  );
};

export default BookingCard;