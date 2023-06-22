import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const changeOwnerStatus = (id, status) => {
  return axios.put(`${BASE_URL}/api/v1/admin?ownerId=${id}&${status}`);
};
