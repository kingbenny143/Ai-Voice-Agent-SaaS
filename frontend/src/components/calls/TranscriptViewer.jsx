// TranscriptViewer component for displaying call transcripts

const TranscriptViewer = () => {
  const transcript = [
    {
      Speaker: "Customer",
      Message: "Hello, I want to book a table."
    },
    {
      Speaker: "Agent",
      Message: "Sure, for how many people?"
    },

    {
      Speaker: "Customer",
      Message: "4 people tomorrow."
    },

    {
      Speaker: "Agent",
      Message: "your booking is confirmed."
    }

  ]
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6">
      <h2 className="text-xl font-semibold mb-4">
        Transcript
      </h2>
      <div className="space-y-2">
        {transcript.map((item, idx) =>(
            <div key={idx} className={`p-3 rounded-lg ${item.Speaker === "Customer" ? "bg-blue-100" : "bg-gray-100"}`}>
              <p className="font-bold">
                {item.Speaker}
              </p>
              <p className="text-sm">
                {item.Message}
              </p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default TranscriptViewer