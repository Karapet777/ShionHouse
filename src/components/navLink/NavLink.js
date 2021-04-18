import React from "react";
import { NavLink as HeaderLink } from "react-router-dom";

import "./NavLink.scss";

const NavLink = ({ children, to, className, onClick, activeClass }) => {
  return (
    <HeaderLink
      onClick={onClick}
      exact
      activeClassName={`navLink--active ${activeClass}`}
      className={`navLink ${className}`}
      to={to}
    >
      {children}
    </HeaderLink>
  );
};

export default NavLink;
