import React, { useEffect } from "react";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";

import { Provider } from "react-redux";
//
import { GlobalStyles } from "./styles/globalStyles";
//
import { Header, Login, Main } from "./ui";
//
import { ToggleThemeContextProvider } from "./context";
//
import { Children, LoggedIn, Nothing } from "./types";
//
import {
  store,
  useAppDispatch,
  useGetGithubUserQuery,
  setAuthentication,
} from "./app";
//
import { getTokenFromStorage, setTokenOnStorage } from "./utils";
//
import constants from "./constants";

const { ROUTES, API } = constants;

function Providers({ children }: Children): JSX.Element {
  return (
    <Provider store={store}>
      <ToggleThemeContextProvider>{children}</ToggleThemeContextProvider>
    </Provider>
  );
}

function SignIn(): JSX.Element {
  const [search] = useSearchParams();
  const dispatch = useAppDispatch();
  const token = search.get("access_token");

  if (token) {
    dispatch(setAuthentication("Unknown"));
    setTokenOnStorage(token);
  }

  const { data, error, isLoading } = useGetGithubUserQuery(API.USER);
  // console.info("data", data, "isLoading", isLoading, "error", error);
  //
  //
  if (error) {
    dispatch(setAuthentication("LoggedOut"));
    // TODO consider redirecting to home page ?
    return (
      <p>{`sorry we have an error fetching user: ${JSON.stringify(error)}`} </p>
    );
  }
  //
  // if (isLoading) {
  //   return <>loading</>;
  // }
  //
  //
  const hasUser = data && data !== Nothing;

  if (hasUser) {
    dispatch(setAuthentication(data));
  } else {
    // TODO erro on decoding user
    console.info("-> ", "no user");
    dispatch(setAuthentication("LoggedOut"));
  }

  return <>signin</>;
}

export default function App(): JSX.Element {
  const location = useLocation();

  useEffect(() => {
    const isNotSignin = location.pathname !== ROUTES.SIGIN;
    // check if other than SignIn
    if (isNotSignin) {
      // check if we have the token on storage
      console.info("location", location.pathname);
      console.info("token from storage ", getTokenFromStorage());
    }
  }, [location]);

  return (
    <Providers>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<Login />} />
        <Route path={ROUTES.SIGIN} element={<SignIn />} />
        <Route path="/welcome" element={<Main />} />
      </Routes>
    </Providers>
  );
}
