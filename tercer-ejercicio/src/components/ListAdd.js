// ListCreator.js
import React, { useState } from 'react';
import '../styles/ListAdd.css';

const ListAdd = () => {
  const [inputText, setInputText] = useState('');
  const [list, setList] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAddItem = () => {
    if (inputText.trim() !== '') {
      setList([...list, inputText]);
      setInputText('');
    }
  };

  const handleRemoveItem = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  return (
    <div className="list-creator">
      <div className="input-container">
        <input
          type="text"
          placeholder="Add city"
          value={inputText}
          onChange={handleInputChange}
        />
        <button onClick={handleAddItem}>Add</button>
      </div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button className="remove-button" onClick={() => handleRemoveItem(index)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListAdd;
