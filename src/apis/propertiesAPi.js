import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getProperties = (filterData, page = 1) => {
  return axios.get(`${BASE_URL}/api/v1/properties`, {
    params: { ...(filterData ?? {}), page },
  });
};

export const getProperty = (id) => {
  return axios.get(`${BASE_URL}/api/v1/properties/${id}`);
};

export const makeAnOffer = (id, offerPrice) => {
  return axios.post(`${BASE_URL}/api/v1/properties/${id}/offers`, {
    offerPrice,
  });
};
