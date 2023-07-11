import React from "react";
import { render, screen } from "./ui/testUtils";
import App from "./App";

describe("<App /> ", () => {
  test("Show the initial view route '/'", () => {
    render(<App />, {
      route: "/",
    });

    screen.getByText(/welcome/i);
  });
});
