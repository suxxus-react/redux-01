import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Login } from "./";

const login: Meta<typeof Login> = {
  title: "Components/Login",
  component: Login,
};

export default login;

type Story = StoryObj<typeof Login>;
export const Basic: Story = {};
