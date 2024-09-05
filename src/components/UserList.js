import React, { useState } from "react";
import ModalPage from "./Modal";

import UserItem from "./UserItem";

const UserList = ({ list }) => {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState(false);
  const users = list?.map((user) => (
    <UserItem
      user={user}
      setUsername={setUsername}
      setShowModal={setShowModal}
    />
  ));
  return (
    <div className="d-flex justify-content-around align-items-cneter mt-5 flex-wrap">
      {users}
      <ModalPage
        show={showModal}
        setShowModal={setShowModal}
        username={username}
      />
    </div>
  );
};

export default UserList;
