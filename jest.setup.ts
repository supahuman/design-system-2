// This file is run before tests to set up the testing environment

// Import jest-dom matchers
import "@testing-library/jest-dom";

// Create a manual mock for CSS modules
// In ESM, we cannot use wildcard mocks like in CommonJS
// The moduleNameMapper in jest.config.mjs will handle the CSS module mocking
