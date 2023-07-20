import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
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

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middleware),
  });
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import type { PreloadedState } from '@reduxjs/toolkit'
//
// import userReducer from '../features/users/userSlice'
//
// // Create the root reducer separately so we can extract the RootState type
// const rootReducer = combineReducers({
//   user: userReducer
// })
//
// export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
//   return configureStore({
//     reducer: rootReducer,
//     preloadedState
//   })
// }
//
// export type RootState = ReturnType<typeof rootReducer>
// export type AppStore = ReturnType<typeof setupStore>
// export type AppDispatch = AppStore['dispatch'
