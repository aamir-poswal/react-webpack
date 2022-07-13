import "whatwg-fetch";
import React from "react";
import { render, screen, act, fireEvent } from "@testing-library/react";
import { setupServer } from "msw/node";
import { rest } from "msw";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

const server = setupServer(
  rest.post(
    "https://volue-geminitest.fmecloud.com/fmetoken/service/generate",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.text("1254"));
    }
  ),
  rest.post(
    "https://volue-geminitest.fmecloud.com/fmerest/v3/transformations/transact/GeminiWaterAnalysis/GeminiWaterAnalysis_FireFlowReport_v2.fmw",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json("221"));
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
  });
  test("renders html report", async () => {
    var htmlContent = "<html><body><p>Report HTML Result</p></body></html>";
    var blob = new Blob([htmlContent], {
      type: "text/html",
    });
    server.use(
      rest.get(
        "https://volue-geminitest.fmecloud.com/fmerest/v3/resources/connections/FME_SHAREDRESOURCE_DATA/filesys/GeminiWaterAnalysisOutput/0999FireFlowReport.html",
        (req, res, ctx) => {
          return res(ctx.status(200), ctx.body(blob));
        }
      )
    );
    await act(async () => render(<App />));
    const button = await screen.findByText("Submit");
    //screen.debug(button);
    fireEvent.click(button);
    expect(await screen.findByText("Report HTML Result")).toBeInTheDocument();
    //screen.debug();
  });
});
