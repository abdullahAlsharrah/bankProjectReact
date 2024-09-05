import { Container } from "react-bootstrap";
import React from "react";

import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center me-5">
      <div
        className="d-flex "
        style={{ width: "fit-content", marginRight: 65 }}>
        <NavItem to={"/"} title={"Home"} />
        <NavItem to={"/transactions"} title={"Transactions"} />
        <NavItem to={"/users"} title={"Users"} />
        <NavItem to={"/profile"} title={"Profile"} />
      </div>
    </Container>
  );
};

export default NavBar;
