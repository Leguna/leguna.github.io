import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const originalFetch = window.fetch;
const mockFetch = jest.fn(() => new Promise(() => {}));

beforeAll(() => {
  window.fetch = mockFetch;
  global.fetch = mockFetch;
});

afterAll(() => {
  window.fetch = originalFetch;
  global.fetch = originalFetch;
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
