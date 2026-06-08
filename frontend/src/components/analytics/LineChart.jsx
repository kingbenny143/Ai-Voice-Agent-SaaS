// LineChart.jsx

import {
  LineChart as ReLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", calls: 40 },
  { day: "Tue", calls: 55 },
  { day: "Wed", calls: 70 },
  { day: "Thu", calls: 50 },
  { day: "Fri", calls: 90 },
  { day: "Sat", calls: 75 },
  { day: "Sun", calls: 60 },
];

const LineChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 mt-6">

      <h2 className="text-2xl font-semibold mb-4">
        Calls Trend
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <ReLineChart data={data}>
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
          </ReLineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default LineChart;