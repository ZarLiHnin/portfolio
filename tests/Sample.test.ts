// tests/sample.test.ts
import { describe, it, expect } from "vitest";

describe("Fail test", () => {
  it("adds correctly", () => {
    expect(1 + 2).toBe(999); // わざとエラー
  });
});

describe("Fail test", () => {
  it("adds correctly", () => {
    expect(1 + 2).toBe(3); // わざとエラー
  });
});
