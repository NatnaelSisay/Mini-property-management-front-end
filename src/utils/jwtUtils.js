import { deleteCookie, getCookie } from "./cookieUtil";
import jwt_decode from "jwt-decode";
export const decodeToken = (token) => {
  if (!token) {
    return null;
  }
  return jwt_decode(token);
};

export const getUserFromAccessToken = () => {
  const accessToken = getCookie("accessToken");
  return decodeToken(accessToken);
};

export const removeToken = () => {
  deleteCookie("accessToken");
  deleteCookie("refreshToken");
};
