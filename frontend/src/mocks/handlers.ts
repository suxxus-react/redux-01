import { rest } from "msw";
import users from "./data.users.json";

export const handlers = [
  rest.get("/users", (_, res, ctx) =>
    res(ctx.status(200), ctx.json([...users]))
  ),
  rest.get("/*", (_, res, ctx) => res(ctx.status(403))),
];
