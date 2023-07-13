import type { Meta, StoryObj } from "@storybook/react";
import App from "./App";

const app: Meta<typeof App> = {
  title: "App/MainView",
  component: App,
};

export default app;

type Story = StoryObj<typeof App>;

export const Basic: Story = {
  parameters: {
    reactRouter: {
      browserPath: "/",
    },
  },
};

export const Logged: Story = {
  parameters: {
    reactRouter: {
      browserPath: "/welcome",
    },
  },
};
