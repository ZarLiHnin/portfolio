// tests/sample.test.ts
import { describe, it, expect } from "vitest";

describe("Fail test", () => {
  it("adds correctly", () => {
    expect(3 + 2).toBe(5); // わざとエラー
  });
});

describe("Fail test", () => {
  it("adds correctly", () => {
    expect(1 + 2).toBe(3); // わざとエラー
  });
});
