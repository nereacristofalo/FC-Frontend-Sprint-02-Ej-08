import React from 'react';
import './BackButton.css';
import LeftArrowIcon from '../../../images/left_arrow_icon.svg';

const BackButton = () => {
  return (
    <div className="back-button-container">
      <img alt="" className="arrow-icon" src={LeftArrowIcon} />
      <p className="arrow-label">Volver</p>
    </div>
  );
};

export default BackButton;
