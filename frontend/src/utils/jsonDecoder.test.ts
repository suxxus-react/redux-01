import { userDecoder } from "./jsonDecoder";
import { userJson } from "../mocks";
import { UserDto, Nothing } from "../types";

const userDto: UserDto = Object.freeze({
  id: 1122233,
  image: "https://robohash.org/pirulo8?set=set3",
  name: "michelle",
  email: null,
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
});

describe("JSON decoder", () => {
  test("User decoded ok", () => {
    const actual = { ...userJson };

    const expected = userDto;

    expect(actual).toEqual({
      id: 1122233,
      image: "https://robohash.org/pirulo8?set=set3",
      name: "michelle",
      email: null,
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    });

    expect(userDecoder(actual)).toEqual(expected);
  });

  test("User decoded Error", () => {
    const actual = JSON.parse(JSON.stringify(userJson));

    actual.id = null;

    expect(actual.id).toBe(null);

    const expected = Nothing;

    console.error = jest.fn();

    expect(userDecoder(actual)).toEqual(expected);

    expect(console.error).toHaveBeenCalled();
  });
});
