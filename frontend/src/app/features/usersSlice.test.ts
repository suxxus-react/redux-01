import userReducer from "./usersSlice";
import { addMany } from "./";
import { Users } from "../../types";

const initialState = Object.freeze({
  ids: [],
  entities: {},
});

describe("UsersSlice", () => {
  test("should return the initial state", () => {
    const expected = initialState;
    expect(userReducer(undefined, { type: undefined })).toEqual(expected);
  });

  test("Shoud update the list with many users", () => {
    const actual = initialState;

    const expected: Users = {
      ids: [1],
      entities: {
        1: { id: 1, firstName: "Anne", lastName: "Don", image: "http://" },
      },
    };

    expect(userReducer(undefined, { type: undefined })).toEqual(actual);

    expect(
      userReducer(
        actual,
        addMany({
          ids: [1],
          entities: {
            1: {
              id: 1,
              firstName: "Anne",
              lastName: "Don",
              image: "http://",
            },
          },
        })
      )
    ).toEqual(expected);
  });
});
