import React, { useContext } from "react";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import { AppContext } from "../../context/AppContext";
import Buy from "../../assets/icons/buy-icon.png";
import NavLink from "../navLink/NavLink";

import "./List.scss";

const ProductList = ({
  src,
  nameProduct,
  price,
  goToBasket,
  infoClick,
  children,
  classNameBlock,
  classImg,
  isBasket = false,
  removItem,
  id,
  classNameIconBuy,
}) => {
  const context = useContext(AppContext);
  return (
    <div className={`product-container ${classNameBlock}`}>
      {context.state.user && isBasket ? (
        <img
          onClick={goToBasket}
          className={`product-container__buy ${classNameIconBuy}`}
          src={Buy}
          alt="icon buy"
        />
      ) : context.state.user && !isBasket ? (
        <RemoveShoppingCartIcon
          className="product-container__remove"
          onClick={removItem}
        />
      ) : null}
      <NavLink to={`/Shop/${id}`}>
        <img
          onClick={infoClick}
          className={`product-container__img ${classImg}`}
          src={src}
          alt="productImg"
        />
      </NavLink>
      <div className="product-container__info">
        <p className="product-container__name">{nameProduct}</p>
        <div className="product-container__icons">
          <StarBorderIcon className="product-container__icons__stars" />
          <StarBorderIcon className="product-container__icons__stars" />
          <StarBorderIcon className="product-container__icons__stars" />
          <StarBorderIcon className="product-container__icons__stars" />
          <StarBorderIcon className="product-container__icons__stars" />
        </div>
        <p>${price}</p>
      </div>
      {children}
    </div>
  );
};

export default ProductList;
