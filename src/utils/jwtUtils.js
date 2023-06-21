import { mockUser } from "../utils/mockData";

export const getUserFromAccessToken = () => {
	const tokenString = localStorage.getItem("token") || null;
	if (!tokenString) return null;

	const token = tokenString.split(" ")[1];
	// decode the user and return user data
	return mockUser;
};

export const getSampleUser = () => {
	localStorage.setItem("token", "dummy-token");
	return mockUser;
};

export const removeToken = () => {
	localStorage.removeItem("token");
};
