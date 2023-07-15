export default Object.freeze({
  CONTEXT_ERROR_MSG: " was used outside of its Provider",

  //
  STORAGE_TOKEN: "__USER_TOKEN__",

  //
  BASE_URL: process.env.BASE_URL || "",
  API: {
    USERS: "/users",
  },

  GITHUB_AUTH: process.env.GITHUB_AUTH || "",
});
