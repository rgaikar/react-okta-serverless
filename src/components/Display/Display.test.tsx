import { render, screen, cleanup } from "@testing-library/react";
// Importing the jest testing library
import "@testing-library/jest-dom";
import NoDataArea from "./index";

// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});

describe("No data Display component", () => {
  render(<NoDataArea />);
  const nodataText = screen.getByTestId("nodata-display-ui");

  // Test 2
  test("No data display Text", () => {
    expect(nodataText).toHaveTextContent("No Data To Display");
  });
});
