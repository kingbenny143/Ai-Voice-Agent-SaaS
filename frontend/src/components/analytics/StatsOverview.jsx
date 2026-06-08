// StatsOverview component for analytics dashboard summary
import AnalyticsCard from './AnalyticsCard'

const StatsOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <AnalyticsCard title="Total Calls" value="1250" />
        <AnalyticsCard title="Bookings Created" value="320" />
        <AnalyticsCard title="Conversion Rate" value="25.6%" />
        <AnalyticsCard title="Revenue" value="₹45,000" />
    </div>
  )
}

export default StatsOverview