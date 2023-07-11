import axios from "axios";

type ReturnData = unknown;
type Url = string;

const BASE_URL = `${process.env.BASE_URL || ""}`;

export const API = {
  USERS: `${BASE_URL}/users`,
};

async function doFetch(url: Url): Promise<ReturnData> {
  try {
    const response = await axios.get(url);
    return response.data;

    /* eslint-disable-next-line @typescript-eslint/no-explicit-any*/
  } catch (error: any) {
    console.error(error?.message);
  }
}

export const usersRepository = {
  getUsers: async (): Promise<ReturnData> => {
    const response = await doFetch(API.USERS);
    return response;
  },
};
