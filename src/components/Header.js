import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { logout } from "../api/auth";
import logo from "../assets/images/logo.png";
import { mainColor } from "../utilities/constants";
import UserContext from "../utilities/context/userContext";
import NavBar from "./NavBar";

const Header = () => {
  const [user, setUser] = useContext(UserContext);

  const handleLogOut = () => {
    logout();
    setUser(false);
  };

  return (
    <div className="d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <img src={logo} alt="Logo" style={{ height: 60 }} />
        <h5 className="fw-bold ps-2 m-0" style={{ color: mainColor }}>
          FULL STACK BANK
        </h5>
      </div>
      {user ? (
        <>
          <NavBar />
          <Button
            onClick={handleLogOut}
            variant="outline-light"
            style={{ color: "#fff", background: mainColor }}>
            Logout
          </Button>
        </>
      ) : null}
    </div>
  );
};

export default Header;
