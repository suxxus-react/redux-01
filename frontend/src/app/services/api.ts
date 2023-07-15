import { createApi } from "@reduxjs/toolkit/query/react";
import { createEntityAdapter } from "@reduxjs/toolkit";
import { axiosBaseQuery } from "./axiosBaseQuery";
import { userDataDecoder, githubUserDecoder } from "../../utils";
import constants from "../../constants";
import { Nothing, UserCard, GithubUser } from "../../types";

const headers = {
  "X-Auth-Token": "xxxxxsd token",
};

const api = createApi({
  reducerPath: "usersApi",
  baseQuery: axiosBaseQuery({
    baseUrl: constants.BASE_URL,
  }),
  endpoints(build) {
    return {
      getGithubUser: build.query({
        query: (url: string) => {
          return { url, method: "GET", headers };
        },
        //
        transformResponse: (response) => {
          // TODO decode
          const responseDecoded = githubUserDecoder(response);
          const decodedOk = responseDecoded !== Nothing;

          if (decodedOk) {
            //
            const user: GithubUser = {
              ...responseDecoded,
              id: responseDecoded.id.toString(),
              avatar: responseDecoded.avatar_url,
              email: responseDecoded.email || "",
            };

            return user;
          }

          return {};
        },
      }),
      getUsers: build.query({
        query: (url: string) => {
          return { url, method: "GET" };
        },
        transformResponse: (response: unknown) => {
          const responseDecoded = userDataDecoder(response);
          const decodeOk = responseDecoded !== Nothing;

          if (decodeOk) {
            const usersAdapter = createEntityAdapter<UserCard>({
              sortComparer: (a, b) => a.firstName.localeCompare(b.firstName),
            });

            return usersAdapter.addMany(
              usersAdapter.getInitialState(),
              responseDecoded.map(({ id, firstName, lastName, image }) => ({
                id: id.toString(),
                firstName,
                lastName,
                image,
              }))
            );
          }

          return [];
        },
      }),
    };
  },
});

export const {
  useGetUsersQuery,
  useGetGithubUserQuery,
  reducerPath,
  middleware,
} = api;

export default api.reducer;
