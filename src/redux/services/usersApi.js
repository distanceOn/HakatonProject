import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
	reducerPath: "usersApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.easyvuz.ru/v1/",
		prepareHeaders: (headers, { getState }) => {
			// Set the Content-Type header to application/json for POST requests
			headers.set("Content-Type", "application/json");
			return headers;
		},
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
				body: body,
			}),
		}),
		getResults: build.query({
			query: (id) => `getResults/${id} `,
		}),
		getAllUniverse: build.query({
			query: () => `universities/getAll`,
		}),
	}),
});

export const {
	useRequestResultOfTestMutation,
	useGetResultsQuery,
	useGetAllUniverseQuery,
} = usersApi;
