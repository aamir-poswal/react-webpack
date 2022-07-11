import "whatwg-fetch";
import React from "react";
import {
  render,
  screen,
  waitFor,
  findByText,
  getByText,
} from "@testing-library/react";
import { setupServer } from "msw/node";
import { rest } from "msw";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import UserService from "./services/UserService";

const server = setupServer(
  rest.post(
    "https://volue-geminitest.fmecloud.com/fmetoken/service/generate",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.text("1254"));
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("App", () => {
  test("renders App component", async () => {
    await UserService.loginToFMEServer();
    render(<App />);

    screen.debug();
  });
});
