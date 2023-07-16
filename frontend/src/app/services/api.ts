import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosBaseQuery";
import { githubUserDecoder } from "../../utils";
import constants from "../../constants";
import { Nothing, GithubUser } from "../../types";

const headers = {
  "X-Auth-Token": "xxxxxsd token",
};

const api = createApi({
  reducerPath: "Api",
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
    };
  },
});

export const { useGetGithubUserQuery, reducerPath, middleware } = api;

export default api.reducer;
