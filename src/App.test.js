import "whatwg-fetch";
import React from "react";
import { render, screen, act, waitFor } from "@testing-library/react";
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
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe("App", () => {
  test("renders App component", async () => {
    await act(async () => render(<App />));
    expect(await screen.findByText("Submit")).toBeInTheDocument();
  });
  test("renders app component with authentication error", async () => {
    server.use(
      rest.post(
        "https://volue-geminitest.fmecloud.com/fmetoken/service/generate",
        (req, res, ctx) => {
          return res(ctx.status(401), ctx.text(""));
        }
      )
    );
    await act(async () => render(<App />));
    expect(
      await screen.findByText(
        "Something went wrong while authenticating the request. Please try again later."
      )
    ).toBeInTheDocument();
    screen.debug();
  });
});
