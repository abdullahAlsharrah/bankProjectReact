import instance from ".";

const login = async (user) => {
  try {
    const { data } = await instance.post("auth/login", user);
    setToken(data.token);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const register = async (user) => {
  try {
    const formData = new FormData();
    for (const key in user) formData.append(key, user[key]);
    const { data } = await instance.post("auth/register", formData);
    setToken(data.token);
  } catch (error) {
    throw new Error(error);
  }
};

const setToken = (token) => {
  localStorage.setItem("token", token);
};

const logout = () => {
  localStorage.removeItem("token");
};

const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  } else {
    return false;
  }
};

export { login, register, setToken, logout, checkToken };
