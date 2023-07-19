export default Object.freeze({
  CONTEXT_ERROR_MSG: " was used outside of its Provider",

  ROUTES: {
    HOME: "/",
    AUTH: "/auth",
    SIGNIN: "/signin",
    SIGNOUT: "/signout",
    WELCOME: "/welcome",
  },

  //
  STORAGE_TOKEN: "__USER_TOKEN__",

  //
  BASE_URL: process.env.BASE_URL || "",
  API: {
    USER: "/user",
    USER_LOGOUT: "/user/logout",
  },

  GITHUB_AUTH: process.env.GITHUB_AUTH || "/",
});
