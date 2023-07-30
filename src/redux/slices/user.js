import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isAuthenticated: false,
	userId: null, //после регистрации и авторизации
	userTesting: null,
	userRequest: false,
	userTestId: null,
	userTestResults: null,
	userChoice: null,
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
		setUserTestId: (state, { payload }) => {
			return {
				...state,
				userTestId: payload,
			};
		},
		setUserTestResults: (state, { payload }) => {
			return {
				...state,
				userTestResults: payload,
			};
		},
		setUserChoice: (state, { payload }) => {
			return {
				...state,
				userChoice: payload,
			};
		},
	},
});
export const {
	setLogout,
	setLogin,
	setTesting,
	setRequest,
	setUserTestId,
	setUserTestResults,
	setUserChoice,
} = userSlice.actions;

export default userSlice.reducer;
