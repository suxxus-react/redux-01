import { rest } from "msw";

import user from "../mocks/data.user.json";
import constants from "../constants";

const { API } = constants;

const ok = 200;
const forbidden = 403;
const OK = "OK";

export const handlers = [
  rest.get(API.USER, (_, res, ctx) =>
    res(ctx.status(ok), ctx.json({ ...user }))
  ),

  rest.get(API.USER_LOGOUT, (_, res, ctx) =>
    // res(ctx.status(ok), ctx.json({ r: OK })
    // res(ctx.status(ok), ctx.text(OK))

    res(ctx.text(OK))
  ),

  rest.get("/*", (_, res, ctx) => res(ctx.status(forbidden))),
];
