import * as React from "react";
import type { Preview } from "@storybook/react";
import { GlobalStyles } from ".././src/styles/globalStyles";
import { withRouter } from "storybook-addon-react-router-v6";
import { ToggleThemeContextProvider } from "../src/context";
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

/* eslint-disable-next-line */
const DefaultDecorator = (Story: any) => {
  return (
    <ToggleThemeContextProvider>
      <GlobalStyles />
      <Story />
    </ToggleThemeContextProvider>
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
