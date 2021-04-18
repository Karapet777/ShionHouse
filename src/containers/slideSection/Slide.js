import React from "react";

import Button from "../../components/button/Button";

import "./Slide.scss";

const Slide = () => {
  return (
    <div className="app-slide">
      <p className="app-slide__text">FASHION CHANGING ALWAYS</p>
      <Button className="app-slide__btn" title="Shop New" />
    </div>
  );
};

export default Slide;
