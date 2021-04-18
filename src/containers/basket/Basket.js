import React, { useContext } from "react";

import { AppContext } from "../../context/AppContext";
import List from "../../components/productList/List";

import "./Basket.scss";

const Basket = () => {
  const context = useContext(AppContext);
  console.log(context.value.appBasket.length);
  return (
    <div className="app-basket">
      {context.value.appBasket.length ? (
        context.value.appBasket.map((el, idx) => {
          return (
            <List
              key={idx}
              src={el.src}
              nameProduct={el.nameProduct}
              price={el.price}
              classImg="app-basket__img"
              removItem={() => {
                context.value.removeProductHendler(el.id);
              }}
              id={el.id}
            />
          );
        })
      ) : (
        <div className="app-basket__textNoItem">No item</div>
      )}
    </div>
  );
};

export default Basket;
