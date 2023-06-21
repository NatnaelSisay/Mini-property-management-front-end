
import { deleteCookie, getCookie } from "./cookieUtil";
import jwt_decode from "jwt-decode";
export const decodeToken = (token) => {
  return jwt_decode(token);
};

export const getUserFromAccessToken = () => {
  const accessToken = getCookie("accessToken");

  return decodeToken(accessToken);
};

// export const getSampleUser = () => {
//   localStorage.setItem("token", "dummy-token");
//   return mockUser;
// };

export const removeToken = () => {
  deleteCookie("accessToken");
  deleteCookie("refreshToken");
};
