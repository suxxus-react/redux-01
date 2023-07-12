import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Users } from "../../types";

const initialState: Users = {
  ids: [],
  entities: {},
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addMany: (state, action: PayloadAction<Users>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { addMany } = usersSlice.actions;

export default usersSlice.reducer;
