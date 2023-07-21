import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import App from "./App";
import { authStatusLoggedIn } from "./mocks";
import constants from "./constants";
import { setupStore } from "./app";

const { ROUTES } = constants;

const store = setupStore({
  auth: {
    ...authStatusLoggedIn,
  },
});

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
  decorators: [
    (Story) => {
      console.info("---> ", JSON.stringify({ ...store }));
      console.info("---> ", JSON.stringify({ ...authStatusLoggedIn }));
      return (
        <Provider store={store}>
          <Story />
        </Provider>
      );
    },
  ],
};
