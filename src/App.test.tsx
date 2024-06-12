import React from "react";
import { cleanup, render } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

describe("App", () => {
  it("renders and matches snapshot", () => {
    const { container, asFragment } = render(
      <App/>
    );
      expect(container).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });
})
