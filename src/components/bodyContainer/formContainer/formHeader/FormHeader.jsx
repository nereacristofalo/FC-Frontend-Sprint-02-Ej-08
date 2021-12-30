import React from 'react';
import './FormHeader.css';
import LocationIcon from '../../../../images/location_icon.svg';

const FormHeader = () => {
  return (
    <div className="form-header-container">
      <img
        alt=""
        className="img-profile"
        src="https://randomuser.me/api/portraits/lego/8.jpg"
      />

      <div className="student-data">
        <h1 className="student-name">Nombre Alumno</h1>
        <p className="location-label">
          <img alt="" className="location-icon" src={LocationIcon} /> Valencia |
          España
        </p>
      </div>
    </div>
  );
};

export default FormHeader;
