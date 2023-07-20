import React from "react";
//
import { Route, Routes, useLocation } from "react-router-dom";
//
import { GlobalStyles } from "./styles/globalStyles";
//
import { Header, Login, Main } from "./ui";
//
import { ToggleThemeContextProvider } from "./context";
//
import { Children } from "./types";
//
import { AuthO, SignIn, SignOut } from "./ui/auth";
//
import constants from "./constants";

const { ROUTES } = constants;

function Providers({ children }: Children): JSX.Element {
  return <ToggleThemeContextProvider>{children}</ToggleThemeContextProvider>;
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
