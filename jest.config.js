module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  testMatch: ["**/*.spec.{j,t}s"],
  transform: {
    "^.+\\.svg$": "<rootDir>/svg-transform.js",
  },
};
