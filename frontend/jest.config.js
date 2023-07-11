/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  resetMocks: false,
  setupFiles: ["jest-localstorage-mock"],
};
