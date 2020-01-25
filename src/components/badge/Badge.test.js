import Badge from "./Badge";

jest.mock("../../hocs", () => ({
  withPubSub: e => e,
  withDOM: e => e
}));

describe("Testing Components/Badge", () => {
  it("SHould return something", () => {
    expect(() => {
      Badge();
    }).toThrow();
  });
});
