import { render, screen, cleanup } from "@testing-library/react";
// Importing the jest testing library
import "@testing-library/jest-dom";
import { Avatar } from "@mui/material";

// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});

describe("AVatar component", () => {
  render(<Avatar alt={"avatar image"} />);
  const avatar = screen.queryByTestId("avatar-info");
  test("Avatar Rendering", () => {
    expect(avatar).toBeDefined();
  });
});
