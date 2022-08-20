import React from "react";
import PropTypes from 'prop-types';
import "./input.css";

export const Input = ({ labelText, placeholder, inputType, name, ...props }) => {

  return (
    <div>
      <label htmlFor={name}>{labelText}</label>
      <input
        placeholder={placeholder}
        type={inputType}
        id={name}
        {...props}
      ></input>
    </div>
  );
};

Input.propTypes = {
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
}

Input.defaultProps = {
  labelText: "Label",
  placeholder: "Placeholder",
  inputType: "text",
  name: "IDGenerico",
  onChange: undefined,
}