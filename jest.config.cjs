const ts = require("typescript");
const { readFileSync } = require("fs");
const { resolve } = require("path");

const tsconfigPath = "./tsconfig.app.json";

const tsConfig = ts.readConfigFile(resolve(__dirname, tsconfigPath), ts.sys.readFile).config;

const pathsToModuleNameMapper = (config) =>
  Object.fromEntries(
    Object.entries(config.compilerOptions.paths).map(([key, value]) => [
      `^${key.replace("*", "(.*)")}$`,
      `<rootDir>/src/${value[0].replace("*", "$1")}`,
    ])
  );

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testMatch: ["**/?(*.)+(test).tsx"],
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "./tsconfig.json",
      },
    ],
  },
  moduleNameMapper: {
    "\\.module\\.(css|scss)$": "identity-obj-proxy",
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "^.+\\.svg$": "jest-transformer-svg",
    ...pathsToModuleNameMapper(tsConfig),
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "<rootDir>/src/app/shared/services/firebase.service.ts"],
  collectCoverage: false,
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts"],
  coverageReporters: ["text", "lcov", "json-summary", "html"],
};
