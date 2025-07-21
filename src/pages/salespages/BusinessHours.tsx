import React from 'react';

const BusinessHours = ({ hours }) => {
  if (!hours || hours.length === 0) {
    return <p>Business hours not specified</p>;
  }

  return (
    <div className="business-hours">
      {hours.map((day, index) => (
        <div key={index} className="d-flex justify-content-between mb-2">
          <span className="day">{day.day}:</span>
          {day.closed ? (
            <span className="text-danger">Closed</span>
          ) : (
            <span>
              {day.opening} - {day.closing}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default BusinessHours;