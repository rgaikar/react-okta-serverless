import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Welcome from "./Welcome";
import "@testing-library/jest-dom/extend-expect";

describe("Welcome test", () => {
  it("test welcome text", () => {
    render(<Welcome />);
    const element = screen.getByTestId("heading-text");
    expect(element).toHaveTextContent("Welcome");
  });
});

describe("logo test", () => {
  it("test takeda logo", () => {
    render(<Welcome />);
    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute("alt", "Takeda logo");
  });
});
