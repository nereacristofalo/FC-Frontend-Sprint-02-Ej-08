import React from 'react';
import FormBody from './formBody/FormBody';
import './FormContainer.css';
import FormHeader from './formHeader/FormHeader';

const FormContainer = () => {
  return (
    <div className="form-container">
      <FormHeader />
      <FormBody />
    </div>
  );
};

export default FormContainer;
