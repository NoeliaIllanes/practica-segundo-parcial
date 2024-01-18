import React, { useState } from 'react';
import InputField from './components/ImputField';
import DataDisplay from './components/DataDisplay';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [requestData, setRequestData] = useState([]);

  const handleRequestSend = () => {
    const newData = [
      { title: 'Name', value: name },
      { title: 'Last Name', value: lastName },
      { title: 'Age', value: age },
    ];

    setRequestData(newData);
  };

  return (
    <div className="app">
      <InputField title="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <InputField title="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <InputField title="Age" value={age} onChange={(e) => setAge(e.target.value)} />
      <button onClick={handleRequestSend}>Request Send</button>
      {requestData.length > 0 && <DataDisplay data={requestData} />}
    </div>
  );
};

export default App;
