import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./";

const header: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
};

export default header;

type Story = StoryObj<typeof Header>;
export const Basic: Story = {};
