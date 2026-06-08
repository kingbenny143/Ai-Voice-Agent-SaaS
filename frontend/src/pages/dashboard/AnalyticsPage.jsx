// AnalyticsPage - Page for viewing analytics
import { useState } from "react";
import StatsOverview from "../../components/analytics/StatsOverview";
import DateRangeFilter from "../../components/analytics/DateRangeFilter";
import AnalyticsChart from "../../components/analytics/AnalyticsChart";
import CallStatistics from "../../components/analytics/CallStatistics";
import BookingStatistics from "../../components/analytics/BookingStatistics";
import PerformanceMetrics from "../../components/analytics/PerformanceMetrics";

const AnalyticsPage = () => {

  const [dateRange, setDateRange] = useState("Last 7 Days");

  const callStats = [
  {
    id: 1,
    date: "2026-06-01",
    totalCalls: 120,
    answered: 110,
    missed: 10,
    avgDuration: "4m 30s",
  },
  {
    id: 2,
    date: "2026-06-02",
    totalCalls: 135,
    answered: 125,
    missed: 10,
    avgDuration: "5m 12s",
  },
  {
    id: 3,
    date: "2026-06-03",
    totalCalls: 150,
    answered: 140,
    missed: 10,
    avgDuration: "4m 48s",
  },
];

const bookingStats = [
  {
    id: 1,
    date: "2026-06-01",
    total: 25,
    confirmed: 20,
    pending: 3,
    cancelled: 2,
  },
  {
    id: 2,
    date: "2026-06-02",
    total: 30,
    confirmed: 26,
    pending: 2,
    cancelled: 2,
  },
  {
    id: 3,
    date: "2026-06-03",
    total: 28,
    confirmed: 24,
    pending: 3,
    cancelled: 1,
  },
];

  return (
    <div className="space-y-6">

      <h2 className="text-3xl font-bold text-center">
        Analytics
      </h2>

      <StatsOverview />

      <DateRangeFilter
        value={dateRange}
        onChange={setDateRange}
      />

      <AnalyticsChart />

      <CallStatistics calls={callStats} />

      <BookingStatistics bookings={bookingStats} />

      <PerformanceMetrics />

    </div>
  )
}

export default AnalyticsPage