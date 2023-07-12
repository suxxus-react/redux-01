import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { reducerPath, reducer, middleware } from "./services/api";

export const store = configureStore({
  reducer: {
    [reducerPath]: reducer,
  },
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
