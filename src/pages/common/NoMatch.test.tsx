import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { BrowserRouter } from "react-router-dom";

import NoMatch from "./NoMatch";

describe("No match  test", () => {
  it("No match ", () => {
    render(
      <BrowserRouter>
        <NoMatch />
      </BrowserRouter>
    );
    const element = screen.getByTestId("no-match-text");
    expect(element).toHaveTextContent("404");
  });
  it("No match  link", () => {
    render(
      <BrowserRouter>
        <NoMatch />
      </BrowserRouter>
    );
    const linkEl = screen.getByRole("link", { name: "Go To Home" });
    expect(linkEl).toHaveTextContent("Go To Home");
  });
});
