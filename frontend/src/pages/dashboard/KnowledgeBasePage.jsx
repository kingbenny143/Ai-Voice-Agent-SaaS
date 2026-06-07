// KnowledgeBasePage - Page for managing FAQs
import { useState } from "react";
import AddFAQModal from "../../components/knowledgebase/AddFAQModal";
import FAQCard from '../../components/knowledgebase/FAQCard'
import SearchFAQ from '../../components/knowledgebase/SearchFAQ'
import CategorySelector from '../../components/knowledgebase/CategorySelector'
import FAQTable from '../../components/knowledgebase/FAQTable'

const KnowledgeBasePage = () => {

  const [showModal, setShowModal] = useState(false);

  const faqs = [

  {
    id: 1,
    question: "What are your timings?",
    answer: "We are open from 9 AM to 9 PM.",
    category: "General",
    status: "Active",
  },

  {
    id: 2,
    question: "How do I book a table?",
    answer: "To book a table, please call us at 123-456-7890 or email us at info@example.com.",
    category: "Bookings",
    status: "Active",
  },
  {
    id: 3,
    question: "What payment methods do you accept?",
    answer: "We accept credit cards, debit cards, and cash.",
    category: "Payments",
    status: "Active",
  },
  {
    id: 4,
    question: "Can I cancel my booking?",
    answer: "Yes, you can cancel your booking at any time. Just call us at 123-456-7890 or email us at info@example.com.",
    category: "Bookings",
    status: "Active",
  },
];

  return (
    <div className='flex-1'>
      <h2 className='flex justify-center text-2xl font-bold mb-4'>Knowledge Base</h2>

          <div className="grid grid-cols-4 gap-4 my-6">
              <FAQCard
                title="Total FAQs"
                value="150"
                color="text-blue-600"
              />

              <FAQCard
                title="Active FAQs"
                value="120"
                color="text-green-600"
              />

              <FAQCard
                title="Categories"
                value="20"
                color="text-yellow-500"
              />

              <FAQCard
                title="Documents"
                value="10"
                color="text-red-500"
              />
          </div>

          <div className="flex bg-white shadow-md p-4 gap-5 items-center rounded-2xl my-6">
            <SearchFAQ />

            <CategorySelector />

            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
              >
              + Add FAQ
            </button>
          </div>

          <FAQTable faqs={faqs} />
          
          <AddFAQModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          />
    </div>
  )
}

export default KnowledgeBasePage