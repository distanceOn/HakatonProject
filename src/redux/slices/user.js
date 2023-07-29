import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isAuthenticated: false,
	userId: null, //после регистрации и авторизации
	userTesting: null,
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
	},
});
export const { setLogout, setLogin, setTesting } = userSlice.actions;

export default userSlice.reducer;
