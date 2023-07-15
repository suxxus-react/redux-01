import React from "react";
import { setupServer } from "msw/node";

import { render, screen, waitFor } from "../../ui/testUtils";
import { useGetGithubUserQuery, useGetUsersQuery } from "./api";
import { handlers } from "../../mocks";

import constants from "../../constants";

const server = setupServer(...handlers);

const { API } = constants;

function Page({ url }: { url: string }): JSX.Element {
  let fn;

  switch (url) {
    case API.GUITHUB_USER:
      fn = useGetGithubUserQuery;
      break;
    case API.USERS:
      fn = useGetUsersQuery;
      break;
    default:
      fn = () => ({
        data: undefined,
        error: { status: 403, data: "Request failed with status code 403" },
        isLoading: false,
      });
      break;
  }

  const { data, error, isLoading } = fn(url);

  if (error) {
    return <p>{`sorry we have an error: ${JSON.stringify(error)}`} </p>;
  }

  if (isLoading) {
    return <>loading</>;
  }

  if (data) {
    return <p>{JSON.stringify(data)}</p>;
  }

  return <></>;
}

describe("Api", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("useGetUsersQuery", async () => {
    render(<Page url={API.USERS} />, {});
    await waitFor(() => {
      screen.getByText(/Sheldon/i);
    });
  });

  test("useGetUserDataQuery", async () => {
    render(<Page url={API.GUITHUB_USER} />, {});
    //
    await waitFor(() => {
      const username = /"name":"michelle"/i;
      screen.getByText(username);
    });
  });

  test("Query error ", async () => {
    render(<Page url="/" />, {});
    await waitFor(() => {
      screen.getByText(/403/i);
    });
  });
});
