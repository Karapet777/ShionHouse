import React, { useState, useReducer } from "react";
import { toast } from "react-toastify";

import AppReducer from "./AppReducer";
import { AppContext, initialState } from "../context/AppContext";
import { Data } from "../data/data";

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [appBasket, setAppBasket] = useState([]);
  const [selectItem, setSelectItem] = useState([]);
  const [isLogin, setIsLogin] = useState(true);

  const addBusket = () => {
    toast.success("To Basket", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };

  const addToBasket = (el) => {
    appBasket.push(el);
    setAppBasket([...appBasket]);
    addBusket();
  };

  const removeProductHendler = (id) => {
    setAppBasket(
      appBasket.filter((el) => {
        return el.id !== id;
      })
    );
  };

  const selectItemHandler = (id) => {
    const newItem = Data.product.filter((el) => {
      return el.id === id;
    });
    setSelectItem(newItem);
  };

  const toggleChengePage = () => {
    setIsLogin(!isLogin);
  };

  const value = {
    selectItem,
    appBasket,
    isLogin,
    toggleChengePage,
    addToBasket,
    removeProductHendler,
    selectItemHandler,
  };
  return (
    <AppContext.Provider value={{ value, state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
