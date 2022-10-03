import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { MemoryRouter } from "react-router-dom";

import "@testing-library/jest-dom/extend-expect";
import ErrorPage from "./ErrorPage";

describe("Error page  test", () => {
  it("Error page  test", () => {
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );
    const element = screen.getByTestId("error-page");
    const elementText = screen.getByTestId("error-page-text");
    expect(element).toHaveTextContent("500");
    expect(elementText).toHaveTextContent(
      "Oops, Internal Server Error, That is, something went terribly wrong!"
    );
  });
  it("Error page link", () => {
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );
    const linkEl = screen.getByRole("link", { name: "Home Page" });
    expect(linkEl).toHaveTextContent("Home Page");
  });
});
