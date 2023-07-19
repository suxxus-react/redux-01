import * as React from "react";
import { Provider } from "react-redux";
import type { Preview } from "@storybook/react";
import { GlobalStyles } from ".././src/styles/globalStyles";
import { withRouter } from "storybook-addon-react-router-v6";
import { ToggleThemeContextProvider } from "../src/context";
import { store } from "../src/app";

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
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};
