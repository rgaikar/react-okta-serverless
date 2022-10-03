import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import AccessDenied from "./AccessDenied";

describe("Access Denied test", () => {
  it("Access Denied text", () => {
    render(
      <MemoryRouter>
        <AccessDenied />
      </MemoryRouter>
    );
    const element = screen.getByTestId("access-denied");
    const elementText = screen.getByTestId("access-denied-text");
    expect(element).toHaveTextContent("Access Denied");
    expect(elementText).toHaveTextContent(
      "Sorry, but you dont have permission to access this page"
    );
  });
  it("Access Denied link", () => {
    render(
      <MemoryRouter>
        <AccessDenied />
      </MemoryRouter>
    );
    const linkEl = screen.getByRole("link", { name: "Go To Home" });
    expect(linkEl).toHaveTextContent("Go To Home");
  });
});
