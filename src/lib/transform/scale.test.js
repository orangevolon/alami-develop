import scale from "./scale";

describe("Testing transform/scale", () => {
  it("Should scale the input based on the specified scale", () => {
    expect(scale(10, 10)).toBe(100);
  });
});
