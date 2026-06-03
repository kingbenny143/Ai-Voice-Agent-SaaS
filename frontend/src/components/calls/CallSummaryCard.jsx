// CallSummaryCard component for showing call summary information
const CallSummaryCard = ({ summary }) => {
  return (
    <div className="bg-slate-100 rounded-xl p-4 mt-4">
      <h2 className="text-xl font-semibold mb-2">
        AI Call Summary
      </h2>

      <p className="text-gray-700">
        {summary}
      </p>
    </div>
  );
};

export default CallSummaryCard