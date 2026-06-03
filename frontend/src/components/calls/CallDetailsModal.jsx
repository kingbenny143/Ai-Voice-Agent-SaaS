import CallSummaryCard from "./CallSummaryCard";
import TranscriptViewer from "./TranscriptViewer";
import AudioPlayer from "./AudioPlayer";

const CallDetailsModal = ({ call, onClose }) => {
  if (!call) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto" id="right">

        <h2 className="text-2xl font-bold mb-4">
          Call Details
        </h2>

        <div className="space-y-3">
          <p>
            <strong>Customer:</strong> {call.customer}
          </p>

          <p>
            <strong>Phone:</strong> {call.phone}
          </p>

          <p>
            <strong>Duration:</strong> {call.duration}
          </p>

          <p>
            <strong>Status:</strong> {call.status}
          </p>
        </div>

        <TranscriptViewer />

        <CallSummaryCard summary={call.summary} />

        <AudioPlayer />

        <button
          onClick={onClose}
          className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
        >
          Close
        </button>

      </div>
    </div>
  );
};

export default CallDetailsModal;