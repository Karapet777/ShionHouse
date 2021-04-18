import React from "react";

import "./Button.scss";

const Button = ({ title, className, onClick }) => {
  return (
    <button onClick={onClick} className={`slide ${className}`}>
      {title}
    </button>
  );
};

export default Button;
