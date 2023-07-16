import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./";
import { UserToken } from "../../types";

const header: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
};

export default header;

type Story = StoryObj<typeof Header>;
export const Basic: Story = {};

const MockState: UserToken = {
  token: "xyz",
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
