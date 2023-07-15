import { rest } from "msw";

import users from "./data.users.json";
import constants from "../constants";

const { API } = constants;

const ok = 200;
const forbidden = 403;

export const handlers = [
  rest.get(API.USERS, (_, res, ctx) =>
    res(ctx.status(ok), ctx.json([...users]))
  ),

  rest.get("/*", (_, res, ctx) => res(ctx.status(forbidden))),
];
