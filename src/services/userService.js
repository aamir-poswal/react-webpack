import axios from "axios";
import { API_BASEURL } from "./config";

// Login
export const login = async (username, password) => {
  const headers = { "Content-Type": "application/json" };
  const body = { username, password };
  const resp = await axios.post(`${API_BASEURL}/auth/login`, body, { headers });
  return resp;
};

export const verify = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  const resp = await axios.get(`${API_BASEURL}/auth/verify`, config);
  return resp;
};
