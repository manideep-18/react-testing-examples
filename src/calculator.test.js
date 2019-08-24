import { addition, subtraction, multiply } from "./calculator";

describe("Calculator Testsuite", () => {
  it("returns sum of 3,5", () => {
    expect(addition(3, 5)).toBe(8);
  });
  it("return difference of 3,5", () => {
    expect(subtraction(3, 5)).toBe(-2);
  });
  it("return multiply of 3,5", () => {
    expect(multiply(3, 5)).toBe(15);
  });
});
