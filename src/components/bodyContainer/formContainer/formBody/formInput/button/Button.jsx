import React from 'react';
import './Button.css';

const Button = ({ classes, icon, label }) => {
  return (
    <button className={classes.join(' ')}>
      <img alt="" className="btn-icon" src={icon} />
      {label}
    </button>
  );
};

export default Button;
