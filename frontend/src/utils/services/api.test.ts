import axios from "axios";
import { usersRepository, API } from "./api";

jest.mock("axios");
describe("Api", () => {
  test("Given an url should get fetch data from Api", () => {
    const users = [{ name: "Bob" }];
    const resp = { data: [{ name: "Bob" }] };

    axios.get = jest.fn().mockResolvedValue(resp);

    usersRepository.getUsers().then((data) => {
      expect(data).toStrictEqual(users);
    });

    expect(axios.get).toBeCalledWith(API.USERS);
  });
});
