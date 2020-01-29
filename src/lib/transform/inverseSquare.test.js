import inverseSquare from "./inverseSquare";

describe("Testing transforms/inverseSquare", () => {
  it("Should return inverse square of the input", () => {
    expect(inverseSquare(2)).toBe(1 / 4);
  });

  it("Should add offset to the denominator when specified", () => {
    expect(inverseSquare(2, 1)).toBe(1 / 9);
  });
});
