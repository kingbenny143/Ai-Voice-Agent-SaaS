import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", bookings: 25 },
  { day: "Tue", bookings: 40 },
  { day: "Wed", bookings: 35 },
  { day: "Thu", bookings: 50 },
  { day: "Fri", bookings: 45 },
];

const BarChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 mt-6">
      <h2 className="text-2xl font-semibold mb-4">
        Booking Trends
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <ReBarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="bookings" fill="#3B82F6" />
          </ReBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChart;