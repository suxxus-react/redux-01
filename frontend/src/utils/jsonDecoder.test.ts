import { userDataDecoder } from "./jsonDecoder";
import usersData from "../mocks/data.users.json";
import { Nothing } from "../types";

const firstIndex = 0;

describe("userData decoded", () => {
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
});
