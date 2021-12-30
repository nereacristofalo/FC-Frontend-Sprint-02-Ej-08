import React from 'react';
import './FormBody.css';
import FormInput from './formInput/FormInput';
import {
  countryOptions,
  cityOptions,
  transferOptions,
  precenseOptions,
  btnOptions,
  skillsOptions,
} from '../../../../utils/seed';

const FormBody = () => {
  return (
    <form id="form">
      <FormInput
        label="Nombre y Apellidos"
        placeholder="Nombre y Apellidos"
        value="Nombre Alumno"
      />

      <div className="form-data">
        <FormInput
          label="Nº Teléfono"
          placeholder="Nº Teléfono"
          value="+34 654 85 52 48"
        />
        <FormInput
          label="Email"
          placeholder="Email"
          value="hcliment@gmail.com"
        />
      </div>

      <div className="form-data">
        <FormInput label="País" type="select" options={countryOptions} />
        <FormInput label="Ciudad" type="select" options={cityOptions} />
      </div>

      <div className="form-data">
        <FormInput label="Traslado" type="select" options={transferOptions} />
        <FormInput
          label="Presencialidad"
          type="select"
          options={precenseOptions}
        />
      </div>

      <FormInput label="Documento CV" type="buttons" options={btnOptions} />

      <FormInput label="Etiquetas" options={skillsOptions} type="data-list" />
    </form>
  );
};

export default FormBody;
