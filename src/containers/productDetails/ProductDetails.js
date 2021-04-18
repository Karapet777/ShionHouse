import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { AppContext } from "../../context/AppContext";
import List from "../../components/productList/List";

import "./ProductDetails.scss";

const ProductDetails = () => {
  const context = useContext(AppContext);
  const { productId } = useParams();

  useEffect(() => {
    context.value.selectItemHandler(Number(productId));
    //eslint-disable-next-line
  }, []);

  return (
    <div className="app-product-details">
      <div className="app-product-details__block">
        {context.value.selectItem.map((el) => {
          return (
            <List
              key={el.id}
              src={el.src}
              nameProduct={el.nameProduct}
              price={el.price}
              isBasket={true}
              goToBasket={() => {
                context.value.addToBasket(el);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductDetails;
