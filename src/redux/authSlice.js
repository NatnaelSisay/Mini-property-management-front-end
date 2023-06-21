import { createSlice } from "@reduxjs/toolkit";
import { getUserFromAccessToken } from "../utils/jwtUtils";

const initialState = { value: getUserFromAccessToken() || null };

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		addUser: (state, action) => {
			state.value = action.payload;
		},
		removeUser: (state) => {
			state.value = null;
		},
	},
});

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
