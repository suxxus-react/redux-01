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
import { Children } from "./types";
//
import { store, useAppDispatch, updateToken } from "./app";
//
import { getTokenFromStorage, setTokenOnStorage } from "./utils";
//
import constants from "./constants";

const { ROUTES } = constants;

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
    setTokenOnStorage(token);
    dispatch(updateToken(token));
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
