import React from "react";

import Button from "../../components/button/Button";

import "./Collection.scss";

const Collection = () => {
  return (
    <div className="app-collection-container">
      <p className="app-collection-container__text">
        Collection House our First-ever
      </p>
      <Button className="app-collection-container__btn" title="About Us" />
    </div>
  );
};

export default Collection;
