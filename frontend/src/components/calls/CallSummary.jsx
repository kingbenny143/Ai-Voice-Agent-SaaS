// CallSummary component for showing call summary information
 import CallSummaryCard from "./CallSummaryCard";

const CallSummary = () => {
    const summary = "Hello, I want to book a table. Sure, for how many people? 4 people tomorrow. your booking is confirmed."
  return (
    <div>
      <CallSummaryCard summary={summary} />
    </div>
  )
}

export default CallSummary