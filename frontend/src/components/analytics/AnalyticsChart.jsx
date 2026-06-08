// AnalyticsChart.jsx
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import ConversionChart from "./ConversionChart";
import HeatMap from "./HeatMap";

const AnalyticsChart = () => {
  return (
    <div className="space-y-6">

      <LineChart />

      <BarChart />

      <PieChart />

      <ConversionChart />

      <HeatMap />

    </div>
  );
};

export default AnalyticsChart;