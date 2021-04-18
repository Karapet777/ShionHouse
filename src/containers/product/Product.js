import React, { useContext } from "react";

import { AppContext } from "../../context/AppContext";
import List from "../../components/productList/List";
import Button from "../../components/button/Button";
import { Data } from "../../data/data";

import "react-toastify/dist/ReactToastify.css";
import "./Product.scss";

const Product = () => {
  const context = useContext(AppContext);

  return (
    <div className="app-product">
      <div className="app-product__title">
        <p>New</p>
        <p>Arrival</p>
      </div>
      <div className="app-product__items">
        {Data.product.map((el) => {
          return (
            el.id <= 4 && (
              <List
                key={el.id}
                src={el.src}
                nameProduct={el.nameProduct}
                price={el.price}
                isBasket={true}
                goToBasket={context.value.addToBasket.bind(
                  context.value.addToBasket,
                  el
                )}
                id={el.id}
              />
            )
          );
        })}
      </div>
      <div className="app-product__btn">
        <Button title="Browser More" />
      </div>
    </div>
  );
};

export default Product;
