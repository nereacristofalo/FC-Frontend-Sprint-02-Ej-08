import React from 'react';
import './BodyContainer.css';
import FormContainer from './formContainer/FormContainer';
import Viewer from './viewer/Viewer';

const BodyContainer = () => {
  return (
    <div className="content-container">
      <FormContainer />
      <Viewer />
    </div>
  );
};

export default BodyContainer;
