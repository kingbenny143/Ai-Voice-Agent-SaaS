// StatsCard component for displaying key metrics on dashboard

import React from 'react';

const StatsCard = ({ title, value }) => {
  return (
    <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700 text-white">
      <h3 className="text-gray-500">{title}</h3>

      <p className="text-3xl font-bold">
        {value}
      </p>
    </div>
  );
};

export default StatsCard;
