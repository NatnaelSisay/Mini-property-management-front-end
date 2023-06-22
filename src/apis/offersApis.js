import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getOffers = () => {
  return axios.get(`${BASE_URL}/api/v1/offers`);
};

export const updateOffer = (id, action) => {
  return axios.put(`${BASE_URL}/api/v1/offers/${id}?action=${action}`);
};
