import React from "react";

import Button from "../button/Button";
import "./Item.scss";

const Item = ({ src, title }) => {
  return (
    <div className="app-block-item">
      <img src={src} alt="brandImg" />
      <Button className="app-block-item__btn" title="Shop Now" />
      <div className="app-block-item__show">
        <p>{title}</p>
      </div>
    </div>
  );
};
export default Item;
