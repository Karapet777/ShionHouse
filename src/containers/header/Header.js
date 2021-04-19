import React, { useState, useContext } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import SearchIcon from "@material-ui/icons/Search";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MenuIcon from "@material-ui/icons/Menu";
import { useLocation } from "react-router-dom";

import { AppContext } from "../../context/AppContext";
import NavLink from "../../components/navLink/NavLink";
import buyImg from "../../assets/icons/buy-icon.png";
import fbService from "../../api/fbService";
import { useHistory } from "react-router-dom";
import { actionTypes } from "../../context/actionType";

import "./Header.scss";

const Header = () => {
  const context = useContext(AppContext);
  const history = useHistory();
  const location = useLocation();
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);

  const headerLinks = [
    { to: "/shop", title: "SHOP" },
    { to: "/about", title: "ABOUT" },
  ];

  const removeUser = async () => {
    try {
      const user = await fbService.logout();
      localStorage.removeItem("user");
      context.dispatch({ type: actionTypes.REMOVE_USER, payload: { user } });
      history.push("/auth");
    } catch (err) {
      console.log(err);
    }
    closeBurgerMenu();
  };

  const classes = { container: ["app-header"], navLink: [] };

  if (location.pathname === "/auth") {
    classes.container.push("auth-style");
    classes.navLink.push("auth-Color");
  }

  const toggleMenuBurger = () => {
    setIsBurgerMenu(!isBurgerMenu);
  };

  const closeBurgerMenu = () => {
    setIsBurgerMenu(false);
  };

  return (
    <div className={classes.container.join(" ")}>
      <div className="app-header__block">
        <div className="app-header__block__nav-container">
          <div className="app-header__nav">
            <NavLink
              onClick={closeBurgerMenu}
              to="/"
              className="app-header__logo"
            >
              SHION HOUSE
            </NavLink>
          </div>
          <div className="app-header__nav__links">
            {context.state.user ? (
              <NavLink
                onClick={closeBurgerMenu}
                to="/profile"
                // className="app-header__logo"
              >
                PROFILE
              </NavLink>
            ) : null}
            {headerLinks.map((el) => (
              <NavLink key={el.to} to={el.to} className={classes.navLink}>
                {el.title}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="app-header__icons-block">
          <a href="https://twitter.com/" target="blank">
            <TwitterIcon className="app-header__twit app-header__icons" />
          </a>
          <a href="https://www.facebook.com/" target="blank">
            <FacebookIcon className="app-header__face app-header__icons" />
          </a>
          <a href="https://www.pinterest.ru/" target="blank">
            <PinterestIcon className="app-header__pint app-header__icons" />
          </a>
          <SearchIcon className="app-header__search app-header__icons" />
          {context.state.user && (
            <NavLink activeClass="app-header__icons-block--active" to="/basket">
              <div className="app-header__icons-block__basket">
                <img src={buyImg} alt="buyimg" />
                <p className="app-header__icons-block__basket__count">
                  {context.value.appBasket.length}
                </p>
              </div>
            </NavLink>
          )}
          {context.state.user ? (
            <ExitToAppIcon
              className="app-header__icons-block__logout"
              onClick={removeUser}
            />
          ) : (
            <NavLink
              onClick={closeBurgerMenu}
              activeClass="app-header__icons-block--active"
              to="/auth"
            >
              <VpnKeyIcon className="app-header__icons-block__iconAuth" />
            </NavLink>
          )}
          <MenuIcon onClick={toggleMenuBurger} className="header-menu-burger" />
          {isBurgerMenu ? (
            <div className="header-menu-burger__links">
              {headerLinks.map((el) => (
                <NavLink
                  onClick={closeBurgerMenu}
                  key={el.to}
                  to={el.to}
                  className="burger-Link"
                >
                  {el.title}
                </NavLink>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default Header;
