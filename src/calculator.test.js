import { addition } from "./calculator";

describe("Calculator Testsuite", () => {
  it("returns sum of 3,5", () => {
    expect(addition(3, 5)).toBe(8);
  });
});
