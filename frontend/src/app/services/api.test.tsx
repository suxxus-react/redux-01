import React from "react";
import { setupServer } from "msw/node";

import { render, screen, waitFor } from "../../ui/testUtils";
import { useGetUsersQuery } from "./api";
import { handlers } from "../../mocks";

import constants from "../../constants";

const server = setupServer(...handlers);

function Page({ url }: { url: string }): JSX.Element {
  const { data, error, isLoading } = useGetUsersQuery(url);

  if (error) {
    return <p>{`sorry we have an error: ${JSON.stringify(error)}`} </p>;
  }

  if (isLoading) {
    return <>loading</>;
  }

  if (data) {
    return <ul>{JSON.stringify(data)}</ul>;
  }

  return <></>;
}

describe("server", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("Query success ", async () => {
    render(<Page url={constants.API.USERS} />, {});
    await waitFor(() => {
      screen.getByText(/Sheldon/i);
    });
  });

  test("Query error ", async () => {
    render(<Page url="/" />, {});
    await waitFor(() => {
      screen.getByText(/403/i);
    });
  });
});
