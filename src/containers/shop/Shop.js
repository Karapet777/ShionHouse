import React, { useState, useContext, useEffect } from "react";

import { AppContext } from "../../context/AppContext";
import List from "../../components/productList/List";
import Brands from "../brands/Brands";
import NewCollection from "../newCollection/NewCollection";
import Button from "../../components/button/Button";
import { Data } from "../../data/data";

import "./Shop.scss";

const Shop = () => {
  const context = useContext(AppContext);
  const [product, setProduct] = useState([]);
  const [start, setStart] = useState(6);
  const [hesMore, setHesMore] = useState(true);

  useEffect(() => {
    const initialDataProduct = Data.product.filter((el) => {
      return el.id <= start && el;
    });
    setProduct(initialDataProduct);
    //eslint-disable-next-line
  }, []);

  const hendlerPriceToTwenty = () => {
    setProduct(Data.product.filter((el) => el.price >= 10 && el.price <= 20));
  };

  const hendlerPriceToThirty = () => {
    setProduct(Data.product.filter((el) => el.price >= 20 && el.price <= 30));
  };

  const hendlerSizeXL = () => {
    setProduct(Data.product.filter((el) => el.size === "XL"));
  };

  const hendlerSizeXXL = () => {
    setProduct(Data.product.filter((el) => el.size === "XXL"));
  };

  const getAllProduct = () => {
    setProduct(Data.product);
  };

  const getMore = () => {
    const newStart = start + 3;
    setStart(newStart);
    setProduct(
      Data.product.filter((el) => {
        return el.id <= newStart;
      })
    );
    setHesMore(Data.product.length < start ? false : true);
  };

  const buttonItems = [
    {
      title: "10$ to 20$",
      onClick: hendlerPriceToTwenty,
    },
    {
      title: "20$ to 30$",
      onClick: hendlerPriceToThirty,
    },
    {
      title: "Size XL",
      onClick: hendlerSizeXL,
    },
    {
      title: "Size XXL",
      onClick: hendlerSizeXXL,
    },
    {
      title: "All collection",
      onClick: getAllProduct,
    },
  ];

  return (
    <>
      <div className="app-shop-container">
        <p className="app-shop-container__page-title">Shop with us</p>
        <p className="app-shop-container__browser-latest">
          Browse from {Data.product.length} latest items
        </p>
        <div className="app-shop-container__shop">
          <div className="app-shop-container__shop__nav-bar">
            {buttonItems.map((el) => (
              <Button
                key={el.title}
                title={el.title}
                className="app-shop-container__shop__nav-bar__btns"
                onClick={el.onClick}
              />
            ))}
            {hesMore && (
              <Button
                title="Get more"
                className="app-shop-container__shop__nav-bar__btns"
                onClick={getMore}
              />
            )}
          </div>
          <div className="app-shop-container__shop__product">
            {product.map((el) => {
              return (
                <List
                  key={el.id}
                  src={el.src}
                  nameProduct={el.nameProduct}
                  price={el.price}
                  classImg="app-shop-container__shop__product__item-img"
                  goToBasket={() => {
                    context.value.addToBasket(el);
                  }}
                  isBasket={true}
                  id={el.id}
                  classNameIconBuy="tablet-Style-icon-but"
                />
              );
            })}
          </div>
        </div>
      </div>

      <Brands />
      <NewCollection />
    </>
  );
};

export default Shop;
