import instance from ".";

const getAllUsers = async () => {
  try {
    const { data } = await instance.get("auth/users");
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
export { getAllUsers };
