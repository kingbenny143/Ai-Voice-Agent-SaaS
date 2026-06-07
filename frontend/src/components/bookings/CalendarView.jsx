// CalendarView component for displaying bookings in calendar format

const CalendarView = () => {
  const days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

  const dates = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6">
      <div className="flex justify-between items-center mb-6">
        <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">
          ← Prev
        </button>

        <h2 className="text-2xl font-bold">
          June 2026
        </h2>

        <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">
          Next →
        </button>
      </div>

      {/* Week Days */}
      <div className="grid grid-cols-7 gap-2 mb-2">
        {days.map((day) => (
          <div
            key={day}
            className="text-center font-semibold text-gray-600"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Dates */}
      <div className="grid grid-cols-7 gap-2">
        {dates.map((date) => (
          <div
            key={date}
            className="h-24 border rounded-lg p-2 hover:bg-slate-50 cursor-pointer"
          >
            <p className="font-medium">{date}</p>

            {/* Sample bookings */}
            {(date === 4 || date === 8 || date === 15) && (
              <div className="mt-2">
                <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                  Booking
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;