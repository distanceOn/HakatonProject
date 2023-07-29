import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isAuthenticated: false,
	userId: null, //после регистрации и авторизации
	userTesting: null,
	userRequest: false,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setLogout: () => initialState,
		setLogin: (state, { payload }) => {
			return {
				...state,
				userId: payload.userId,
				isAuthenticated: true,
			};
		},
		setTesting: (state, { payload }) => {
			return {
				...state,
				userTesting: payload,
			};
		},
		setRequest: (state) => {
			return {
				...state,
				userRequest: true,
			};
		},
	},
});
export const { setLogout, setLogin, setTesting, setRequest } =
	userSlice.actions;

export default userSlice.reducer;
