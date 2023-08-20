module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "airbnb-base",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "quotes": ["error", "double", { "allowSingleQuotes": true }],
    "no-undef": "error", // This rule will check for undefined variables
    // You can add or override other rules here as needed
  },
};
