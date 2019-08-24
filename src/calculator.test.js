import { addition, subtraction, multiply, divison } from "./calculator";

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
  it("return divison of 3,5", () => {
    expect(divison(3, 5)).toBe(0.6);
  });
  it("return divison of 3,5", () => {
    function divisonZero() {
      divison(3, 0);
    }
    expect(divisonZero).toThrowError("Divison by Zero");
  });
});
