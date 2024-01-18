// DataDisplay.js
import React from 'react';
import '../styles/DataDisplay.css';

const DataDisplay = ({ data }) => {
  return (
    <div className="data-display">
      <h2>Request Sent</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{`${item.title}: ${item.value}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataDisplay;
