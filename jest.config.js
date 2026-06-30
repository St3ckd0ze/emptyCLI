const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
  collectCoverage: true,
  reporters: [
    "default",
    ["jest-junit", { suiteNameTemplate: "{filename}" }],
  ],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,js,jsm,tsx,jsx,tsm}'],
  coveragePathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
  testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
  testMatch: ["**/(*.)+(test).[jt]s?(x)"],
  testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"]
};