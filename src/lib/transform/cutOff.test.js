import cutOff from "./cutOff";

describe("Testing transform/cutOff", () => {
  it("Should return the input when between min and max", () => {
    expect(cutOff(2, 1, 3)).toBe(2);
  });

  it("Should return the max value if input is more than max", () => {
    expect(cutOff(4, 1, 3)).toBe(3);
  });

  it("Should return the min value if input is less than min", () => {
    expect(cutOff(0, 1, 3)).toBe(1);
  });
});
