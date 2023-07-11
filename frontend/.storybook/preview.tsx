import * as React from "react";
import type { Preview } from "@storybook/react";
import { GlobalStyles } from ".././src/styles/globalStyles";
import { withRouter } from "storybook-addon-react-router-v6";
import { ToggleThemeContextProvider } from "../src/context";

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
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};
