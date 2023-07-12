export default Object.freeze({
  CONTEXT_ERROR_MSG: " was used outside of its Provider",

  BASE_URL: `${process.env.BASE_URL || ""}`,
  API: {
    USERS: "/users",
  },
});
