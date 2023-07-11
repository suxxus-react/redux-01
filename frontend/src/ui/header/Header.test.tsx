import React from "react";
import { render, screen } from "../testUtils";
import { Header } from "./";

describe("<Header /> ", () => {
  test("Logo exist", () => {
    render(<Header />, {});
    screen.getByTestId("logo");
  });

  test("Set dark mode button exist", () => {
    render(<Header />, {});
    screen.queryByRole("button");
  });
});
