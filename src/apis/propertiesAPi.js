import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getProperties = () => {
  return axios.get(`${BASE_URL}/api/v1/properties`);
};
