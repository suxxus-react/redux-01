import authSlice from "./authSlice";
import { Auth, LoggedIn } from "../../types";
import { setAuthentication } from "./";

const initialState: Auth = {
  status: "LoggedOut",
};

describe("AuthSlice", () => {
  test("Should return the initial state", () => {
    expect(authSlice(undefined, { type: "" })).toEqual(initialState);
  });

  test("Should set the user with token", () => {
    const authStatus: LoggedIn = {
      user: {
        id: 123,
        name: "joe",
        image: "http",
        email: "e@xx",
      },
      token: "xx",
    };

    const actual: Auth = { status: "Unknown" };

    const expected: Auth = {
      status: {
        user: {
          id: 123,
          name: "joe",
          image: "http",
          email: "e@xx",
        },
        token: "xx",
      },
    };

    expect(authSlice(initialState, setAuthentication("Unknown"))).toEqual(
      actual
    );
    expect(authSlice(actual, setAuthentication(authStatus))).toEqual(expected);
  });
});
