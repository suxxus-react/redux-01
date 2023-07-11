import React from "react";
import { render, screen } from "../ui/testUtils";

import userEvent from "@testing-library/user-event";

import { useToggleThemeContext } from "./";

function Page(): JSX.Element {
  const { toggle, isDarkMode } = useToggleThemeContext();

  return (
    <>
      <p>{`is dark mode: ${isDarkMode}`}</p>
      <button
        onClick={() => {
          toggle((mode) => !mode);
        }}
      >
        switch mode
      </button>
    </>
  );
}

describe("<ToggleThemeContextProvider />", () => {
  test("Should switch theme dark mode", async () => {
    render(<Page />, {});

    const user = userEvent.setup();

    const light = "is dark mode: false";
    const dark = "is dark mode: true";

    screen.getByText(light);
    await user.click(screen.getByText("switch mode"));

    screen.getByText(dark);
  });
});
