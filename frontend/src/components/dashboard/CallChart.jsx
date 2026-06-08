// CallChart component for visualizing call data
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", calls: 120 },
  { day: "Tue", calls: 150 },
  { day: "Wed", calls: 180 },
  { day: "Thu", calls: 140 },
  { day: "Fri", calls: 220 },
  { day: "Sat", calls: 300 },
  { day: "Sun", calls: 250 },
];

const CallsChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">
        Weekly Calls
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="calls"
              stroke="#2563eb"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CallsChart;