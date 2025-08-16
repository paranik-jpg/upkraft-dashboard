import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; 

const PerformanceGauge = ({ title, value, color, trailColor }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md text-center">
      <h3 className="text-gray-500 mb-2">{title}</h3>
      <div className="w-32 h-32 mx-auto">
        <CircularProgressbar
          value={value}
          maxValue={10}
          text={`${value}/10`}
          styles={buildStyles({
            textColor: '#333',
            pathColor: color,
            trailColor: trailColor || '#e6e6e6',
            textSize: '20px',
          })}
        />
      </div>
    </div>
  );
};

export default PerformanceGauge;