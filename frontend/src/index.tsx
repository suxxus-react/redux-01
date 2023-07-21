import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Children } from "./types";
import { ToggleThemeContextProvider } from "./context";
import { setupStore } from "./app";
import App from "./App";

if (process.env.NODE_ENV === "development") {
  /* eslint-disable */
  const { worker } = require("./mocks/browser");
  worker.start();
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store = setupStore({});

function Providers({ children }: Children): JSX.Element {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToggleThemeContextProvider>{children}</ToggleThemeContextProvider>
      </BrowserRouter>
    </Provider>
  );
}

root.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
