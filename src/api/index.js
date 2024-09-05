import axios from "axios";
import { baseURL } from "../utilities/constants";

const instance = axios.create({
  baseURL: `${baseURL}mini-project/api/`,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
