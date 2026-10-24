export default {
  testRunner: "vitest",
  plugins: ["@stryker-mutator/vitest-runner"],
  mutate: ["src/**/*.js", "!src/**/*.test.js"],
  vitest: {
    configFile: "vitest.config.mjs",
  },
  reporters: ["clear-text"],
  coverageAnalysis: "off",
};
