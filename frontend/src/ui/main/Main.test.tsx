import React from "react";
import { render, screen } from "../testUtils";
import { Main } from "./";
import { dummyUser } from "../../mocks";

describe("<Main />", () => {
  const userName = new RegExp(dummyUser.name, "i");

  test("Render correctly", () => {
    render(<Main />, {
      preloadedState: {
        auth: {
          status: {
            kind: "LoggedIn",
            token: "xyz",
            user: {
              ...dummyUser,
            },
          },
        },
      },
    });
    expect(screen.getByText(userName)).toBeInTheDocument();
    //
  });
});
