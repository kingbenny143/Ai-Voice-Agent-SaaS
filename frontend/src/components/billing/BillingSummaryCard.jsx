// BillingSummaryCard - Card for displaying billing summary

import React from 'react'

const BillingSummaryCard = ({ title, value }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 mt-6">
        <p className="text-lg font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  )
}

export default BillingSummaryCard