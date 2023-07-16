import { githubUserDecoder } from "./jsonDecoder";
import gitnubUser from "../mocks/data.github.user.json";
import { GithubUserDto } from "../types";

describe("JSON decoder", () => {
  test("Github user dcoded ok", () => {
    const actual = { ...gitnubUser };

    const expected: GithubUserDto = {
      id: 1122233,
      avatar_url: "https://avatars.githubusercontent.com/u/1122233?v=4",
      name: "michelle",
      email: null,
    };

    expect(actual).toEqual({
      id: 1122233,
      avatar_url: "https://avatars.githubusercontent.com/u/1122233?v=4",
      name: "michelle",
      email: null,
    });

    expect(githubUserDecoder(actual)).toEqual(expected);
  });
});
