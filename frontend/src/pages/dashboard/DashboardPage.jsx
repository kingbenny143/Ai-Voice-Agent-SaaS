import StatsCard from "../../components/dashboard/StatsCard";
import CallChart from "../../components/dashboard/CallChart";
import RecentCallsTable from "../../components/dashboard/RecentCallsTable";
import RecentBookingsTable from "../../components/dashboard/RecentBookingsTable";

const DashboardPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-4">

        <StatsCard
          title="Total Calls"
          value="1,245"
        />

        <StatsCard
          title="Bookings"
          value="342"
        />

        <StatsCard
          title="AI Response Rate"
          value="98%"
        />

        <StatsCard
          title="Active Plan"
          value="Pro"
        />

      </div>

      <CallChart />

      <RecentCallsTable />

      <RecentBookingsTable />
    </>
  );
};

export default DashboardPage;