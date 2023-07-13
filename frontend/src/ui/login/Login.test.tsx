import React from "react";
import { render, screen } from "../testUtils";
import { Login } from "./";

describe("<Login /> ", () => {
  test("Render correctly", () => {
    const welcomeMsg = "Welcome, please login with";
    render(<Login />, {});
    screen.getByText(welcomeMsg);
    screen.getByTestId("github-login-button");
  });
});
