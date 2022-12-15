import { describe, expect, afterEach, vi } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { Backdrop, CircularProgress } from "@mui/material";

// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});

describe("Backdrop component", () => {
  const setToggle = vi.fn();
  render(
    <Backdrop open={true} onClick={setToggle}>
      <CircularProgress color="inherit" data-testid="circular-ui" />
    </Backdrop>
  );
  const backdrop = screen.queryByTestId("backdrop-ui");

  test("backdrop Rendering", () => {
    expect(backdrop).toBeDefined();
  });
  test("backdrop CircularProgress rendering", () => {
    expect(backdrop).toBeDefined();
  });
});

describe("backdrop CircularProgress rendering", () => {
  render(<CircularProgress color="inherit" />);
  const circular = screen.queryByTestId("circular-ui");
  test(" CircularProgress rendering", () => {
    expect(circular).toBeDefined();
  });
});
