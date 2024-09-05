import React from "react";
import { Button } from "react-bootstrap";
import { baseURL, mainColor } from "../utilities/constants";

const UserItem = ({ user, setUsername, setShowModal }) => {
  const { username, image, balance } = user;
  const handleClick = () => {
    setShowModal(true);
    setUsername(username);
  };
  return (
    <div
      className="card justify-content-around align-items-center m-2"
      style={{ minHeight: 300 }}>
      <img className="circle" src={baseURL + image} alt={username} />
      <p className="fw-bold">{username}</p>
      <p className="fw-bold">Balance: {balance}</p>
      <Button
        type="submit"
        // className="w-100"
        onClick={handleClick}
        variant="outline-light"
        style={{ color: "#fff", background: mainColor }}>
        Transfer
      </Button>
    </div>
  );
};

export default UserItem;
