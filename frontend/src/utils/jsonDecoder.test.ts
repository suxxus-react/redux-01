import { userDataDecoder, githubUserDecoder } from "./jsonDecoder";
import usersData from "../mocks/data.users.json";
import gitnubUser from "../mocks/data.github.user.json";
import { Nothing, GithubUserDto } from "../types";

const firstIndex = 0;

describe("JSON decoder", () => {
  test("user data decoded ok ", () => {
    const actual = [
      {
        ...usersData.at(firstIndex),
      },
    ];

    const expected = [
      {
        id: 1,
        firstName: "Terry",
        lastName: "Medhurst",
        birthDate: "2000-12-25",
        email: "atuny0@sohu.com",
        phone: "+63 791 675 8914",
        image: "https://robohash.org/hicveldicta.png",
        domain: "slashdot.org",
      },
    ];

    expect(actual).toEqual(expected);
    expect(userDataDecoder(actual)).toEqual(expected);
  });

  test("user data decoded error ", () => {
    const actual = [
      {
        ...usersData.at(firstIndex),
        id: null,
      },
    ];

    expect(actual.at(firstIndex)?.id).toBe(null);

    console.error = jest.fn();
    expect(userDataDecoder(actual)).toBe(Nothing);
    expect(console.error).toHaveBeenCalled();
  });

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
