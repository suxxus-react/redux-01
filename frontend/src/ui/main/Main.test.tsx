import React from "react";
import { render, screen } from "../testUtils";
import { Main } from "./";

describe("<Main />", () => {
  test("Render correctly", () => {
    render(<Main />, {});
    screen.queryByText(/welcome/i);
    //
  });
});
