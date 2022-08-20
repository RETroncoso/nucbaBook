import React from 'react';
import PropTypes from 'prop-types';
import './button.css';


export const Button = ({ buttonType, label, onClick, ...props }) => {
  
  return (
    <button
      type="button"
      className={buttonType}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  buttonType: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  buttonType: "primary",
  label: 'Ejemplo',
  onClick: undefined,
};
