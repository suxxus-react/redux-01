export default Object.freeze({
  CONTEXT_ERROR_MSG: " was used outside of its Provider",

  ROUTES: {
    HOME: "/",
    SIGIN: "/signin",
  },

  //
  STORAGE_TOKEN: "__USER_TOKEN__",

  //
  BASE_URL: process.env.BASE_URL || "",
  API: {
    USER: "/user",
  },

  GITHUB_AUTH: process.env.GITHUB_AUTH || "/",
});
