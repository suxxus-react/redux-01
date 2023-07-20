import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "./ui/testUtils";
import { setupServer } from "msw/node";
import { handlers } from "./mocks";
import App from "./App";

const server = setupServer(...handlers);

describe("<App /> ", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  const welcomeMsg = "Welcome, please login with";
  const loginWithGithub = /github/i;

  test("Home view '/'", () => {
    render(<App />, {
      route: "/",
    });

    screen.getByText(welcomeMsg);
    screen.getByText(loginWithGithub);
  });

  test("Auth view '/signin' and then signout", async () => {
    render(<App />, {
      preloadedState: {
        auth: {
          status: { kind: "Unknown" },
        },
      },
      route: "/signin",
    });

    await waitFor(() => {
      screen.getByText(/signout/i);
      screen.getByText(/welcome name user/i);
    });

    await userEvent.click(screen.getByText("signout"));

    screen.getByText(welcomeMsg);
    screen.getByText(loginWithGithub);
  });
});
