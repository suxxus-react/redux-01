export default Object.freeze({
  CONTEXT_ERROR_MSG: " was used outside of its Provider",

  ROUTES: {
    HOME: "/",
    SIGIN: "/sigin",
  },

  //
  STORAGE_TOKEN: "__USER_TOKEN__",

  //
  BASE_URL: process.env.BASE_URL || "",
  API: {
    GUITHUB_USER: "/github/user",
    USERS: "/users",
  },

  GITHUB_AUTH: process.env.GITHUB_AUTH || "/",
});
