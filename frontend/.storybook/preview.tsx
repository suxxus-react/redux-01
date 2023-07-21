import * as React from "react";
import { Provider } from "react-redux";
import type { Preview } from "@storybook/react";
import { GlobalStyles } from ".././src/styles/globalStyles";
import { withRouter } from "storybook-addon-react-router-v6";
import { ToggleThemeContextProvider } from "../src/context";
import { setupStore } from "../src/app";
import { userJson } from "../src/mocks";
import constants from "../src/constants";

const urlUser = `path:${constants.API.USER}`;

const fetchMock = {
  debug: true,
  catchAllMocks: [{ matcher: { url: urlUser }, response: 200 }],
  mocks: [
    {
      matcher: {
        name: "user",
        url: urlUser,
      },
      response: {
        status: 200,
        body: { ...userJson },
      },
    },
  ],
};

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const DefaultDecorator = (Story: any) => {
  return (
    <Provider
      store={setupStore({
        auth: { status: { kind: "Unknown" } },
      })}
    >
      <ToggleThemeContextProvider>
        <GlobalStyles />
        <Story />
      </ToggleThemeContextProvider>
    </Provider>
  );
};

export const decorators = [DefaultDecorator, withRouter];

export const preview: Preview = {
  parameters: {
    fetchMock,
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};
