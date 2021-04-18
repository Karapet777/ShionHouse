import React from "react";

import img1 from "../../assets/imges/bg-1.png";
import Button from "../../components/button/Button";
import Footer from "../footer/Footer";

import "./NewCollection.scss";

const NewCollection = () => {
  return (
    <>
      <div className="app-NewCollection">
        <img className="app-NewCollection__img" src={img1} alt="img" />
        <div className="app-NewCollection__block">
          <Button title="Shop Now" />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default NewCollection;
