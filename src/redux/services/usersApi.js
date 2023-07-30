import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
	reducerPath: "usersApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.easyvuz.ru/v1/",
	}),
	tagTypes: ["Progress"],
	endpoints: (build) => ({
		dasd: build.query({
			query: (userId) => `users/${userId}.json`,
		}),
		requestResultOfTest: build.mutation({
			query: (body) => ({
				url: `sendQuiz`,
				method: "POST",
				body: body.data,
			}),
		}),
		getResults: build.query({
			query: (id) => `getResults/${id} `,
		}),
	}),
});

export const { useRequestResultOfTestMutation, useGetResultsQuery } = usersApi;
