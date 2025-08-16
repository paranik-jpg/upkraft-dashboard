import React from 'react';

const StatCard = ({ value, title }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between">
      <h2 className="text-4xl font-bold text-gray-800">{value}</h2>
      <p className="text-gray-500 mt-2">{title}</p>
    </div>
  );
};

export default StatCard;