import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Desktop from "./pages/desktop/Desktop";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("shows the weather widget on the desktop", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Desktop />, div);
  expect(div.textContent).toContain("Fetching weather");
  ReactDOM.unmountComponentAtNode(div);
});
