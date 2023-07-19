import type { Meta, StoryObj } from "@storybook/react";
import App from "./App";
import constants from "./constants";

const { ROUTES } = constants;

const app: Meta<typeof App> = {
  title: "App/MainView",
  component: App,
};

export default app;

type Story = StoryObj<typeof App>;

export const Basic: Story = {
  parameters: {
    reactRouter: {
      browserPath: ROUTES.HOME,
    },
  },
};

export const Auth: Story = {
  parameters: {
    reactRouter: {
      browserPath: ROUTES.AUTH,
    },
  },
};

export const SignIn: Story = {
  parameters: {
    reactRouter: {
      browserPath: ROUTES.SIGNIN,
    },
  },
};

export const LoggedWelcome: Story = {
  parameters: {
    reactRouter: {
      browserPath: ROUTES.WELCOME,
    },
  },
};
