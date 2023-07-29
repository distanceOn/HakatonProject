import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./services/usersApi";
import userReducer from "./slices/user";

export const store = configureStore({
	reducer: {
		user: userReducer,
		[usersApi.reducerPath]: usersApi.reducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([usersApi.middleware]),
});
