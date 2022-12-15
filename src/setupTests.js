import { Crypto } from "@peculiar/webcrypto";
import { TextDecoder, TextEncoder } from "util";
import { vi } from "vitest";
import "vitest-canvas-mock";
import "@testing-library/jest-dom";

global.crypto = new Crypto();

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));
