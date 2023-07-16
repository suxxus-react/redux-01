import * as React from "react";
import { Provider } from "react-redux";
import type { Preview } from "@storybook/react";
import { GlobalStyles } from ".././src/styles/globalStyles";
import { withRouter } from "storybook-addon-react-router-v6";
import { ToggleThemeContextProvider } from "../src/context";
import { store } from "../src/app";
import { usersJson } from "../src/mocks";
import constants from "../src/constants";

const fetchMock = {
  debug: true,
  catchAllMocks: [
    { matcher: { url: `path:/${constants.API.USERS}` }, response: 200 },
  ],
  mocks: [
    {
      matcher: {
        name: constants.API.USERS,
        url: `path:/${constants.API.USERS}`,
      },
      response: {
        status: 200,
        body: [...usersJson],
      },
    },
  ],
};

const DefaultDecorator = (Story: any) => {
  return (
    <Provider store={store}>
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
