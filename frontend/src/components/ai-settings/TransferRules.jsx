// TransferRules component for setting call transfer rules

import { useState } from "react";

const TransferRules = () => {
  const [rule, setRule] = useState("");
  const [customRules, setCustomRules] = useState([]);

  const addRule = () => {
    if (!rule.trim()) return;

    setCustomRules([...customRules, rule]);
    setRule("");
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-md">

      <h3 className="text-xl font-semibold mb-4">
        Transfer Rules
      </h3>

      <div className="space-y-3">

        <label className="flex items-center gap-3">
          <input type="checkbox" />
          <span>Manager Request</span>
        </label>

        <label className="flex items-center gap-3">
          <input type="checkbox" />
          <span>Complaint</span>
        </label>

        <label className="flex items-center gap-3">
          <input type="checkbox" />
          <span>Payment Issue</span>
        </label>

      </div>

      <hr className="my-5" />

      <h4 className="font-semibold mb-3">
        Custom Rules
      </h4>

      <div className="flex gap-2">
        <input
          type="text"
          value={rule}
          onChange={(e) => setRule(e.target.value)}
          placeholder="Enter custom transfer rule"
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2"
        />

        <button
          onClick={addRule}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Add
        </button>
      </div>

      <div className="mt-4 space-y-2">
        {customRules.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 px-3 py-2 rounded-lg"
          >
            {item}
          </div>
        ))}
      </div>

    </div>
  );
};

export default TransferRules;