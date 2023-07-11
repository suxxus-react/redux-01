import React, { ReactElement } from "react";
import "@testing-library/jest-dom";
import { ToggleThemeContextProvider } from "../context";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Users } from "../types";

export type Props = {
  route: string;
};

function customRender(
  ui: ReactElement,
  { route = "", ...renderOptions }: Partial<Props>
) {
  function wrapper({ children }: { children: React.ReactNode }) {
    return (
      <ToggleThemeContextProvider>
        <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
      </ToggleThemeContextProvider>
    );
  }

  return render(ui, { wrapper, ...renderOptions });
}

export * from "@testing-library/user-event";
export * from "@testing-library/react";
export { customRender as render };
