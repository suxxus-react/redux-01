import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosBaseQuery";
import constants from "../../constants";

const api = createApi({
  reducerPath: "usersApi",
  baseQuery: axiosBaseQuery({
    baseUrl: constants.BASE_URL,
  }),
  endpoints(build) {
    return {
      getUsers: build.query({
        query: (url: string) => {
          return { url, method: "GET" };
        },
      }),
    };
  },
});

export const { useGetUsersQuery, reducer, reducerPath, middleware } = api;
