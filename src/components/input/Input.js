import React from "react";

import "./Input.scss";

const Input = ({ type = "text", onChange, placeholder, className }) => {
  return (
    <input
      className={`input ${className}`}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
