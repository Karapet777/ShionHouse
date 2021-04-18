import React from "react";

import Item from "../../components/brandItem/Item";
import { Data } from "../../data/data";

import "./Brands.scss";

const Brands = () => {
  return (
    <div className="app-brand-container">
      {Data.brand.map((elem, index) => {
        return <Item key={index} src={elem.src} title={elem.title} />;
      })}
    </div>
  );
};
export default Brands;
