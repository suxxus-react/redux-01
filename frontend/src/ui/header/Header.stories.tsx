import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./";
import { Auth } from "../../types";

const header: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
};

export default header;

type Story = StoryObj<typeof Header>;
export const Basic: Story = {};

const MockState: Auth = {
  status: {
    kind: "LoggedIn",
    token: "xx",
    user: {
      id: 123,
      name: "joe",
      email: "e@xx",
      image: "http",
    },
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState: MockState,
  reducers: {},
}).reducer;

const store = configureStore({
  reducer: { auth: authSlice },
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
