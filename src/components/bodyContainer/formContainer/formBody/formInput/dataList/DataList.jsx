import React, { useState } from 'react';
import './DataList.css';
import CrossIcon from '../../../../../../images/cross_icon.svg';

const DataList = ({ options }) => {
  const [dataOptions, setDataOptions] = useState(
    options.options.filter(
      (o) => !options.selectedOptions.some((so) => so === o)
    )
  );
  const [selectedOptions, setSelectedOptions] = useState(
    options.selectedOptions
  );
  const [inputValue, setInputValue] = useState('');

  const selectedSkillHandler = (evt) => {
    console.log('ANTES DE CHECKEAR', evt.target.value);

    const selectedValue = evt.target.value;
    setInputValue(selectedValue);

    if (!selectedValue) return;

    if (
      !dataOptions.some(
        (el) => el.toLocaleLowerCase() === selectedValue.toLocaleLowerCase()
      )
    )
      return;

    setInputValue('');

    setDataOptions(dataOptions.filter((item) => item !== selectedValue));
    setSelectedOptions([...selectedOptions, selectedValue]);

    console.log('DESPUES DE CHECKEAR', evt.target.value);
  };

  const deleteHandler = (selectedValue) => {
    setDataOptions([...dataOptions, selectedValue]);
    setSelectedOptions(
      selectedOptions.filter((item) => item !== selectedValue)
    );
  };

  return (
    <>
      <div className="data-list-container">
        <input
          type="text"
          list="skills"
          value={inputValue}
          className="skills-select-input"
          placeholder="Escribe para buscar..."
          onChange={selectedSkillHandler}
        />
        <datalist id="skills">
          {dataOptions.map((opt, index) => (
            <option key={index}>{opt}</option>
          ))}
        </datalist>
        <div className="skills-select-chevron"></div>
      </div>
      <div className="selected-skills-container">
        {selectedOptions.map((opt, index) => (
          <div key={index} className="selected-skill">
            {opt}
            <img
              alt=""
              className="cross-icon"
              src={CrossIcon}
              onClick={() => deleteHandler(opt)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default DataList;
