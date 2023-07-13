import React from "react";
import { render, screen } from "../testUtils";
import User from "./User";
import { UserCard } from "../../types";

const Props: UserCard = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  image: "http://",
};

describe("<User> ", () => {
  test("Render correctly", () => {
    const nameRegex = new RegExp(`${Props.firstName} ${Props.lastName}`, "i");
    render(<User {...Props} />, {});
    screen.getByTestId("user-preview-img");
    screen.getByTestId("navigate-to-usercard");
    expect(screen.getByText(nameRegex)).toHaveAttribute(
      "href",
      `/users/${Props.id}`
    );
  });
});
