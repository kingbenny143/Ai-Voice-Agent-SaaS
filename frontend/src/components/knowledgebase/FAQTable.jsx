import { useState } from "react";
import FAQRow from "./FAQRow";
import FAQDetailsModal from "./FAQDetailsModal";

const FAQTable = ({ faqs }) => {
  const [selectedFAQ, setSelectedFAQ] = useState(null);

  return (
    <div className="bg-white rounded-xl shadow-md p-5 mt-6">
      <h2 className="text-2xl font-semibold mb-4">
        FAQ Library
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-slate-100 border-b">
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Question</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {faqs.map((faq) => (
              <FAQRow
                key={faq.id}
                faq={faq}
                onView={setSelectedFAQ}
              />
            ))}
          </tbody>
        </table>
      </div>

      <FAQDetailsModal
        faq={selectedFAQ}
        onClose={() => setSelectedFAQ(null)}
      />
    </div>
  );
};

export default FAQTable;