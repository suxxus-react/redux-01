import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import { apiReducer, reducerPath, middleware } from "./services";
import { authReducer } from "./features";

import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  [reducerPath]: apiReducer,
  auth: authReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
