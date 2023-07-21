import React from "react";
import { render, screen } from "../testUtils";
import { UserCard } from "./";
import { dummyUser } from "../../mocks";

describe("<User> ", () => {
  test("Render correctly", () => {
    const nameRegex = new RegExp(dummyUser.name, "i");

    render(<UserCard {...dummyUser} />, {});

    screen.getByTestId("user-preview-img");
    screen.getByText(nameRegex);
  });
});
