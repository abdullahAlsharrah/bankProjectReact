import React from "react";
import { NavLink } from "react-router-dom";
import { mainColor } from "../utilities/constants";

const NavItem = ({ to, title }) => {
  return (
    <NavLink
      className={({ isActive }) => "btn  w-100 m-2"}
      style={({ isActive }) => {
        return {
          color: isActive ? "white" : "#000",
          background: isActive ? mainColor : "",
        };
      }}
      to={to}>
      {title}
    </NavLink>
  );
};

export default NavItem;
