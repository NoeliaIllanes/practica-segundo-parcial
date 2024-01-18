import React from 'react';
import Title from './components/Title';
import Timer from './components/Timer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Title />
      <br/>
      <Timer />
    </div>
  );
};

export default App;
