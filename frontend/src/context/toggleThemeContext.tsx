import React, { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";

import { Theme, Children } from "../types";
import constants from "../constants";

const ToggleThemeContext = createContext<Theme>({
  toggle: (a) => a,
  isDarkMode: false,
});

function ToggleThemeContextProvider({ children }: Children): JSX.Element {
  const [isDarkMode, toggle] = useState<boolean>(false);

  return (
    <ToggleThemeContext.Provider
      value={{
        isDarkMode,
        toggle,
      }}
    >
      <ThemeProvider theme={{ isDark: isDarkMode }}>{children}</ThemeProvider>
    </ToggleThemeContext.Provider>
  );
}

export function useToggleThemeContext(): Theme {
  const contextValue = useContext(ToggleThemeContext);

  const contextName = "ToggleTheme";
  const { CONTEXT_ERROR_MSG } = constants;

  if (!contextValue) throw new Error(`${contextName}${CONTEXT_ERROR_MSG}`);

  return contextValue;
}

export default ToggleThemeContextProvider;
