import { User, Auth } from "../types";

export const dummyUser: User = {
  id: 1,
  name: "John Doe",
  image: "http://",
  email: "",
};

export const loggedUser = {
  id: 123,
  name: "Joe Doe",
  email: "e@xx",
  image: "https://robohash.org/pirulo8?set=set3",
};

export const authStatusLoggedIn: Auth = {
  status: {
    kind: "LoggedIn",
    token: "xx",
    user: {
      ...loggedUser,
    },
  },
};
