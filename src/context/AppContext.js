import React from "react";

export const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};

export const AppContext = React.createContext(initialState);
