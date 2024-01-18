import React, { useState } from 'react';
import '../styles/ProgressBar.css';

const ProgressBar = () => {
  const [percentage, setPercentage] = useState(0);
  const [currentColor, setCurrentColor] = useState('#3498db');

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setPercentage(value);
  };

  const handleUpdateProgressBar = () => {
    if (percentage >= 0 && percentage <= 100) {
      setPercentage(percentage);
      updateColor();
    }
  };

  const updateColor = () => {
    if (percentage < 50) {
      setCurrentColor(`rgb(${Math.round((percentage / 50) * 255)}, 255, 0)`);
    } else {
      setCurrentColor(`rgb(255, ${Math.round(((100 - percentage) / 50) * 255)}, 0)`);
    }
  };

  return (
    <div className="progress-bar">
      <h1>Progress Bar</h1>
      <div className="bar-container">
        <div className="bar" style={{ width: `${percentage}%`, backgroundColor: currentColor }}></div>
        <div className="percentage-text">{`${percentage}%`}</div>
      </div>
      <div className="input-container">
        <h3>Ingresa el porcentaje:</h3>
        <input
          type="number"
          value={percentage}
          onChange={handleInputChange}
        />
        <button onClick={handleUpdateProgressBar}>Actualizar</button>
      </div>
    </div>
  );
};

export default ProgressBar;
