import authSlice from "./authSlice";
import { UserToken } from "../../types";
import { updateToken } from "./";

const initialState: UserToken = {
  token: null,
};

describe("AuthSlice", () => {
  test("Should return the initial state", () => {
    expect(authSlice(undefined, { type: "" })).toEqual(initialState);
  });

  test("Should update the token", () => {
    const actual = initialState;
    const expected = { token: "xyz" };

    expect(authSlice(actual, { type: "" })).toEqual(initialState);

    expect(authSlice(actual, updateToken("xyz"))).toEqual(expected);
  });
});
