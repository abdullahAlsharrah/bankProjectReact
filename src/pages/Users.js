import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllUsers } from "../api/users";
import UserList from "../components/UserList";

const Users = () => {
  const { data: users } = useQuery({
    queryKey: ["getAllUsers"],
    queryFn: getAllUsers,
  });
  return <UserList list={users} />;
};

export default Users;
