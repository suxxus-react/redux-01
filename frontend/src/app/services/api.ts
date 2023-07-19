import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosBaseQuery";
import { userDecoder } from "../../utils";

import constants from "../../constants";
import { Maybe, Nothing, AuthenticationStatus, LoggedIn } from "../../types";
import { store } from "../store";
import { getTokenFromStorage } from "../../utils";

const headers = () => {
  const status: AuthenticationStatus = store.getState().auth.status;
  let value = "";
  const tok = getTokenFromStorage();

  switch (status.kind) {
    case "Unknown":
      value = tok !== Nothing ? tok : "";
      break;
    case "LoggedIn":
      value = status.token;
      break;
    default:
      value = "";
      break;
  }

  return {
    "X-Auth-Token": value,
  };
};

const api = createApi({
  reducerPath: "Api",
  baseQuery: axiosBaseQuery({
    baseUrl: constants.BASE_URL,
  }),
  endpoints(build) {
    return {
      logout: build.query({
        query: (url: string) => {
          return {
            url,
            method: "GET",
            headers: headers(),
          };
        },
      }),
      getGithubUser: build.query({
        query: (url: string) => {
          return {
            url,
            method: "GET",
            headers: headers(),
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
