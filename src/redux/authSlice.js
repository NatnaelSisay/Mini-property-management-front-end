import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: {} };

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		addUser: (state, action) => {
			state.value = action.payload;
		},
		removeUser: (state) => {
			state.value = {};
		},
	},
});

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
