import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { apiReducer, reducerPath, middleware } from "./services";
import { authReducer } from "./features";

import { combineReducers } from "@reduxjs/toolkit";

const reducer = combineReducers({
  [reducerPath]: apiReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
