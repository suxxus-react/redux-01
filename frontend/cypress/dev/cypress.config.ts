import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1280,
  viewportHeight: 800,
  video: false,
  env: {
    mode: "development",
  },
  e2e: {
    baseUrl: "http://localhost:3112",
  },
});
