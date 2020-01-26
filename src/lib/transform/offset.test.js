import offset from "./offset";

describe("Testing transform/offset", () => {
  it("Should add the positive offset to input", () => {
    expect(offset(2, 1)).toBe(3);
  });

  it("Should subtract the negative offset from input", () => {
    expect(offset(2, -1)).toBe(1);
  });
});
