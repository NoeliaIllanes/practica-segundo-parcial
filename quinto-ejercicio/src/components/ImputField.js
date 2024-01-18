import React from 'react';
import '../styles/ImputField.css';

const InputField = ({ title, value, onChange }) => {
  return (
    <div className="input-field">
      <label>{title}</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default InputField;
