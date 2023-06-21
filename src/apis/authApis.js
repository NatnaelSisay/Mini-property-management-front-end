import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const login = (email, password) => {
  return axios.post(`${BASE_URL}/api/v1/auth/login`, { email, password } );
};