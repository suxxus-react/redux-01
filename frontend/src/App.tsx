import React from "react";

import { Route, Routes, useLocation } from "react-router-dom";
//
import { Provider } from "react-redux";
//
import { GlobalStyles } from "./styles/globalStyles";
//
import { Header, Login, Main } from "./ui";
//
import { setupStore } from "./app";
//
import { ToggleThemeContextProvider } from "./context";
//
import { Children } from "./types";
//
import { AuthO, SignIn, SignOut } from "./ui/auth";
//
import constants from "./constants";

const { ROUTES } = constants;

export const store = setupStore({});

function Providers({ children }: Children): JSX.Element {
  return (
    <Provider store={store}>
      <ToggleThemeContextProvider>{children}</ToggleThemeContextProvider>;
    </Provider>
  );
}

export default function App(): JSX.Element {
  //
  const location = useLocation();
  console.info("location", location.pathname);

  return (
    <Providers>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<Login />} />
        <Route path={ROUTES.AUTH} element={<AuthO />} />
        <Route path={ROUTES.SIGNIN} element={<SignIn />} />
        <Route path={ROUTES.SIGNOUT} element={<SignOut />} />
        <Route path={ROUTES.WELCOME} element={<Main />} />
      </Routes>
    </Providers>
  );
}
