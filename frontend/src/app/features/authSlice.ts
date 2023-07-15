import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserToken, Token } from "../../types";

const initialState: UserToken = {
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateToken: (state, action: PayloadAction<Token<string>>) => {
      state.token = action.payload;
    },
  },
});

export const { updateToken } = authSlice.actions;

export default authSlice.reducer;
