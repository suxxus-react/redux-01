import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Auth, AuthenticationStatus } from "../../types";

const initialState: Auth = {
  status: "LoggedOut",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthentication: (state, action: PayloadAction<AuthenticationStatus>) => {
      state.status = action.payload;
    },
  },
});

export const { setAuthentication } = authSlice.actions;

export default authSlice.reducer;
