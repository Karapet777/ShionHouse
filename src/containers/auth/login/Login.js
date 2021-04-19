import React, { useState, useContext } from "react";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

import { useHistory } from "react-router-dom";

import { AppContext } from "../../../context/AppContext";
import { validatePassword, validateEmail } from "../../../utils/validateAuth";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";

import "./Login.scss";
import fbService from "../../../api/fbService";
import { actionTypes } from "../../../context/actionType";

const Login = () => {
  const context = useContext(AppContext);
  const history = useHistory();
  const [isRemember, setIsRemember] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [typePassword, setTypePassword] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const chengeHandler = (name, value) => {
    setErrorText("");
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const hendleLogin = async () => {
    if (!validateEmail(credentials.email)) {
      return setErrorText("The email address is badly formatted.");
    } else if (!validatePassword(credentials.password)) {
      return setErrorText(
        "There is no user record corresponding to this identifier. The user may have been deleted."
      );
    } else {
      try {
        const user = await fbService.login(credentials);
        context.dispatch({ type: actionTypes.SET_USER, payload: { user } });
        if (isRemember) {
          localStorage.setItem("user", JSON.stringify(user));
        }
        history.push("/profile");
      } catch (err) {
        setErrorText(err.message);
      }
    }
  };

  const rememberHendler = () => {
    setIsRemember(!isRemember);
  };

  const chengeTypePassword = () => {
    setTypePassword(!typePassword);
  };

  return (
    <div className="app-login">
      <div className="app-login__block">
        <p className="app-login__block__text-login">Login</p>
        <div className="app-login__block__items">
          <AlternateEmailIcon className="app-login__block__items__email" />

          {typePassword ? (
            <VisibilityIcon
              onClick={chengeTypePassword}
              className="app-login__block__items__passOn"
            />
          ) : (
            <VisibilityOffIcon
              onClick={chengeTypePassword}
              className="app-login__block__items__passOff"
            />
          )}
          <Input
            value={credentials.email}
            onChange={(e) => {
              chengeHandler("email", e.target.value);
            }}
            placeholder="Login"
          />
          <Input
            type={typePassword ? "text" : "password"}
            value={credentials.password}
            onChange={(e) => {
              chengeHandler("password", e.target.value);
            }}
            placeholder="Password"
          />
          <p className="app-login__block__items__errorText">{errorText}</p>
          <div className="app-login__block__Remember">
            <Input
              onChange={rememberHendler}
              className="app-login__block__Remember__input"
              type="checkbox"
            />
            <span>Remember me</span>
          </div>
          <Button
            onClick={hendleLogin}
            className="app-login__block__items__btn"
            title="login"
          />
          <Button
            onClick={context.value.toggleChengePage}
            className="app-login__block__items__btn"
            title="Don't have an account?"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
