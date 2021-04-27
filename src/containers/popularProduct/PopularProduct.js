import React from "react";

import img1 from "../../assets/imges/popular-imtes1.png";
import img2 from "../../assets/imges/popular-imtes2.png";

import Button from "../../components/button/Button";

import "./PopularProduct.scss";

const PopularProduct = () => {
  return (
    <div className="app-popular">
      <div className="app-popular__container">
        <div className="app-popular__block-left">
          <img className="app-popular__block-left__img1" src={img1} alt="img" />
          <p className="app-popular__text">
            Established fact thct by the readadle content
          </p>
          <Button title="Read More" className="btn-popular" />
        </div>
        <div className="app-popular__block-left">
          <img className="app-popular__block-left__img1" src={img2} alt="img" />
          <p className="app-popular__text">
            Established fact thct by the readadle content
          </p>
          <Button title="Read More" className="btn-popular" />
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
