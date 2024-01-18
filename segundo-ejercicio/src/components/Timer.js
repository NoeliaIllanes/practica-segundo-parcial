import React, { useEffect, useState } from 'react';
import '../styles/Timer.css';

const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setMinutes((prevMinutes) => prevMinutes + 1);
            return 0;
          } else {
            return prevSeconds + 1;
          }
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div className="timer">
      <div className="counter">
        {`${minutes}min ${seconds}seg`}
      </div>
      <br/>
      <div className="buttons">
        <button className="start" onClick={handleStart}>Start</button>
        <button className="stop" onClick={handleStop}>Stop</button>
        <button className="reset" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
