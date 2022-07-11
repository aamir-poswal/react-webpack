import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";
import { debug } from "webpack";

describe("App", () => {
  test("renders App component", () => {
    render(<App />);
    screen.findByText("Something");
    screen.debug();
    // expect(screen.getByText("Something")).toBeInTheDocument();
  });
});
