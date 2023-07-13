import React from "react";
import { Route, Routes } from "react-router-dom";
//
import { GlobalStyles } from "./styles/globalStyles";
//
import { Header, Login, Main } from "./ui";
//
import { ToggleThemeContextProvider } from "./context";
//
import { Children } from "./types";

function Providers({ children }: Children): JSX.Element {
  return <ToggleThemeContextProvider>{children}</ToggleThemeContextProvider>;
}

export default function App(): JSX.Element {
  return (
    <Providers>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/welcome" element={<Main />} />
      </Routes>
    </Providers>
  );
}
