import React, { useState, useContext } from "react";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { useHistory } from "react-router-dom";

import { AppContext } from "../../../context/AppContext";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import { validateEmail, validatePassword } from "../../../utils/validateAuth";

import "./Signup.scss";
import fbService from "../../../api/fbService";
import { actionTypes } from "../../../context/actionType";

const Signup = () => {
  const history = useHistory();
  const context = useContext(AppContext);
  const [isRemember, setIsRemember] = useState(false);
  const [typePssword, setTypePssword] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    name: "",
  });

  const chengeHandler = (name, value) => {
    setErrorText("");
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const hendleSignup = async () => {
    if (!validateEmail(credentials.email)) {
      return setErrorText("The email address is badly formatted");
    } else if (!validatePassword(credentials.password)) {
      return setErrorText("Password should be at least 6 characters");
    } else {
      try {
        const user = await fbService.signup(credentials);
        context.dispatch({ type: actionTypes.SET_USER, payload: { user } });
        if (isRemember) {
          localStorage.setItem("user", JSON.stringify(user));
        }
        history.push("/");
      } catch (err) {
        setErrorText(err.message);
      }
    }
  };

  const rememberHendler = () => {
    setIsRemember(!isRemember);
  };

  const chengeTypePassword = () => {
    setTypePssword(!typePssword);
  };

  return (
    <div className="app-signup">
      <div className="app-signup__block">
        <p className="app-signup__block__text-signup">Signup</p>
        <div className="app-signup__block__items">
          <AssignmentIndIcon className="app-signup__block__items__name" />
          <AlternateEmailIcon className="app-signup__block__items__mail" />
          {!typePssword ? (
            <VisibilityIcon
              onClick={chengeTypePassword}
              className="app-signup__block__items__pssOn"
            />
          ) : (
            <VisibilityOffIcon
              onClick={chengeTypePassword}
              className="app-signup__block__items__pssOff"
            />
          )}

          <Input
            className={errorText && "app-signup__block__items__error-border"}
            value={credentials.name}
            onChange={(e) => {
              chengeHandler("name", e.target.value);
            }}
            placeholder="Name"
          />
          <Input
            className={errorText && "app-signup__block__items__error-border"}
            value={credentials.email}
            onChange={(e) => {
              chengeHandler("email", e.target.value);
            }}
            placeholder="Login"
          />
          <Input
            className={errorText && "app-signup__block__items__error-border"}
            type={typePssword ? "text" : "password"}
            value={credentials.password}
            onChange={(e) => {
              chengeHandler("password", e.target.value);
            }}
            placeholder="Password"
          />
          <p className="app-signup__block__items__errorText">{errorText}</p>
          <div className="app-signup__block__Remember">
            <Input
              onChange={rememberHendler}
              className="app-signup__block__Remember__input"
              type="checkbox"
            />
            <span>Remember me</span>
          </div>
          <Button
            onClick={hendleSignup}
            className="app-signup__block__items__btn"
            title="signup"
          />
          <Button
            onClick={context.value.toggleChengePage}
            className="app-signup__block__items__btn"
            title="Go to login?"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
