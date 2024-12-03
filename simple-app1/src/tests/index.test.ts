import { describe, it, expect } from "@jest/globals";
import { multiply, sum } from "..";

describe("Testing sum function", () => {
  it("should sum 1 and 2 correctly", () => {
    const finalAnswer = sum(1, 2);
    expect(finalAnswer).toBe(3);
  });

  it("it should return the sum of negative numbers correctly", () => {
    const finalAnswer = sum(-1, -2);
    expect(finalAnswer).toBe(-3);
  });
});

describe("Testing multiply function", () => {
  it("should multiply 1 and 2 correctly", () => {
    const finalAnswer = multiply(1, 2);
    expect(finalAnswer).toBe(2);
  });
});
