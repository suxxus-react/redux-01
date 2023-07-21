import React from "react";
import { Provider } from "react-redux";
import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./";
import { authStatusLoggedIn } from "../../mocks";
import { setupStore } from "../../app";

const header: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
};

export default header;

type Story = StoryObj<typeof Header>;
export const Basic: Story = {};

const store = setupStore({
  auth: {
    ...authStatusLoggedIn,
  },
});

export const UserIsSignedIn: Story = {
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};
