import "whatwg-fetch";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userDecoder, getTokenFromStorage } from "../../utils";

import constants from "../../constants";
import {
  Maybe,
  Nothing,
  AuthenticationStatus,
  Token,
  LoggedIn,
} from "../../types";

import { RootState } from "../store";

function getToken(state: RootState): Token<string> {
  const status: AuthenticationStatus = state.auth.status;
  switch (status.kind) {
    case "LoggedIn":
      return status.token;
    case "LoggedOut":
    case "Unknown":
      return ((tok) => {
        return tok !== Nothing ? tok : "";
      })(getTokenFromStorage());
  }
}

const baseQuery = fetchBaseQuery({
  baseUrl: constants.BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getToken(getState() as RootState);
    return headers.set("X-Auth-Token", token);
  },
});

const api = createApi({
  reducerPath: "Api",
  baseQuery,
  endpoints(build) {
    return {
      logout: build.query({
        query: (url: string) => {
          return {
            url,
            method: "GET",
            responseHandler: (response) => response.text(),
          };
        },
      }),
      getGithubUser: build.query({
        query: (url: string) => {
          return {
            url,
            method: "GET",
          };
        },
        //
        transformResponse: (response): Maybe<LoggedIn> => {
          const responseDecoded = userDecoder(response);
          const decodedOk = responseDecoded !== Nothing;

          if (decodedOk) {
            const { id, name, image, email, token } = responseDecoded;

            return {
              user: {
                id,
                name,
                image,
                // TODO do email validation else ""
                email: email ? email : "",
              },
              token,
              kind: "LoggedIn",
            };
          }

          return Nothing;
        },
      }),
    };
  },
});

export const {
  useGetGithubUserQuery,
  useLogoutQuery,
  reducerPath,
  middleware,
} = api;

export default api.reducer;
