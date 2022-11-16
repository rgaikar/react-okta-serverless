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
