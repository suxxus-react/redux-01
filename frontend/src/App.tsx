import React from "react";
import { Route, Routes, useSearchParams } from "react-router-dom";

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
import { setTokenOnStorage } from "./utils";

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
  return (
    <Providers>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/welcome" element={<Main />} />
      </Routes>
    </Providers>
  );
}
