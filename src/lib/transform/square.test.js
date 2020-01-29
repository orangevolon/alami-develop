import square from "./square";

describe("Testing transform/square", () => {
  it("Should return square of the input value", () => {
    expect(square(8)).toBe(64);
  });
});
