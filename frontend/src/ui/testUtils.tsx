import React, { ReactElement } from "react";
import { PreloadedState } from "@reduxjs/toolkit";

import { Provider } from "react-redux";

import "@testing-library/jest-dom";

import { ToggleThemeContextProvider } from "../context";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { AppStore, RootState } from "../app";

import { setupStore } from "../app/store";

export type Props = {
  route: string;
  preloadedState: PreloadedState<RootState>;
  store: AppStore;
};

function customRender(
  ui: ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    route = "",
    ...renderOptions
  }: Partial<Props>
) {
  function wrapper({ children }: { children: React.ReactNode }) {
    console.info("---> ", setupStore);
    return (
      <Provider store={store}>
        <ToggleThemeContextProvider>
          <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
        </ToggleThemeContextProvider>
      </Provider>
    );
  }

  return render(ui, { wrapper, ...renderOptions });
}

export * from "@testing-library/user-event";
export * from "@testing-library/react";
export { customRender as render };
