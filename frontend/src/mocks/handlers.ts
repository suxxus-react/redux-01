import { rest } from "msw";

import user from "../mocks/data.user.json";
import constants from "../constants";

const { API } = constants;

const ok = 200;
const forbidden = 403;

export const handlers = [
  rest.get(API.USER, (_, res, ctx) =>
    res(ctx.status(ok), ctx.json({ ...user }))
  ),

  rest.get("/*", (_, res, ctx) => res(ctx.status(forbidden))),
];
