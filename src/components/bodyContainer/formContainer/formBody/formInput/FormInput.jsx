import React, { useState } from 'react';
import Button from './button/Button';
import DataList from './dataList/DataList';
import './FormInput.css';
import SelectInput from './selectInput/SelectInput';

const FormInput = ({ label, placeholder, value, options, type = 'text' }) => {
  const [inputValue, setInputValue] = useState(value);

  return (
    <label className="form-input">
      {label}
      {type === 'text' ? (
        <input
          className="text-input"
          placeholder={placeholder}
          value={inputValue}
          onChange={(evt) => setInputValue(evt.target.value)}
        />
      ) : type === 'select' ? (
        <SelectInput options={options} />
      ) : type === 'buttons' ? (
        <div className="btn-container">
          {options.map((el, index) => (
            <Button
              key={index}
              classes={el.classes}
              icon={el.icon}
              label={el.label}
            />
          ))}
        </div>
      ) : type === 'data-list' ? (
        <DataList options={options} />
      ) : null}
    </label>
  );
};

export default FormInput;
