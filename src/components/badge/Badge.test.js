import Badge from "./Badge";

jest.mock("../../hocs", () => ({
  withPubSub: Component => Component,
  withDOM: Component => props =>
    Component({ document: global.document, ...props })
}));

describe("Testing Components/Badge", () => {
  it("Should render the Badge correctly", () => {
    expect(Badge({ src: "test/path" })).toMatchSnapshot();
  });
});
