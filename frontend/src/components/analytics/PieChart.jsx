import {
  PieChart as RePieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Answered", value: 70 },
  { name: "Missed", value: 20 },
  { name: "Transferred", value: 10 },
];

const COLORS = ["#22C55E", "#EF4444", "#F59E0B"];

const PieChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 mt-6">
      <h2 className="text-2xl font-semibold mb-4">
        Call Outcomes
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <RePieChart>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
          </RePieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieChart;