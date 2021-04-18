import React, { useContext } from "react";

import { AppContext } from "../../context/AppContext";
import Login from "./login/Login";
import Signup from "./signup/Signup";

import "./Auth.scss";

const Auth = () => {
  const context = useContext(AppContext);

  return (
    <div className="app-auth">
      {context.value.isLogin ? <Login /> : <Signup />}
    </div>
  );
};

export default Auth;
