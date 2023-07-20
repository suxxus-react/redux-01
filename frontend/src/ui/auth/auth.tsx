import React, { useEffect } from "react";

import { useSearchParams, Navigate, useNavigate } from "react-router-dom";

import {
  useAppDispatch,
  useGetGithubUserQuery,
  useLogoutQuery,
  setAuthentication,
} from "../../app";

import { setTokenOnStorage, removeTokenFromStorage } from "../../utils";

import { Nothing, LoggedIn } from "../../types";

import constants from "../../constants";

const { ROUTES, API } = constants;

// get token from url
// and navigate to signin
//
export function AuthO(): JSX.Element {
  const [search] = useSearchParams();
  const dispatch = useAppDispatch();
  const token = search.get("access_token");

  if (token) {
    dispatch(setAuthentication({ kind: "Unknown" }));
    setTokenOnStorage(token);

    return <Navigate to={ROUTES.SIGNIN} replace />;
  }

  return <></>;
}

// when user data is Fetched
// we update the state with the user data and the token
// and Navigate to user welcome main page
//
export function SignIn(): JSX.Element {
  const { data, error, isLoading } = useGetGithubUserQuery(API.USER);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data && data !== Nothing) {
      dispatch(setAuthentication(data as LoggedIn));
      navigate(ROUTES.WELCOME, { replace: true });
    }
    // TODO if Nothing should navigate lo loggout
  }, [data, dispatch, navigate]);

  if (error) {
    dispatch(setAuthentication({ kind: "LoggedOut" }));
    // TODO consider redirecting to home page ?
    return (
      <>
        <p>sorry, we have an error fething User</p>
        <span>{JSON.stringify(error)}</span>
      </>
    );
  }

  if (isLoading) {
    return <span data-testid="signin-loading">Loading</span>;
  }

  return <></>;
}

export function SignOut(): JSX.Element {
  const dispatch = useAppDispatch();
  const { data } = useLogoutQuery(API.USER_LOGOUT);
  const navigate = useNavigate();

  useEffect(() => {
    if (data === "OK") {
      //TODO decode data
      dispatch(setAuthentication({ kind: "LoggedOut" }));
      removeTokenFromStorage();
      navigate(ROUTES.HOME, {
        replace: true,
      });
    }
  }, [data, dispatch, navigate]);

  // TODO consider getting an error

  return <></>;
}
