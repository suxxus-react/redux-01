import React, { ReactElement } from "react";
import { Provider } from "react-redux";

import "@testing-library/jest-dom";

import { store } from "../app";
import { ToggleThemeContextProvider } from "../context";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

export type Props = {
  route: string;
};

function customRender(
  ui: ReactElement,
  { route = "", ...renderOptions }: Partial<Props>
) {
  function wrapper({ children }: { children: React.ReactNode }) {
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
