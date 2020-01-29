import Badge from "./Badge";
import { PUBSUB_SCROLL } from "../../../constants";

jest.mock("@hocs", () => ({
  withPubSub: Component => Component,
  withDOM: Component => props =>
    Component({ document: global.document, ...props })
}));

describe("Testing Components/Badge", () => {
  const pubSub = {
    subscribe: jest.fn()
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should render the Badge correctly", () => {
    expect(Badge({ src: "test/path", pubSub })).toMatchSnapshot();
  });

  it("Should call the subscribe once with the right channel", () => {
    Badge({ src: "test/path", pubSub });

    expect(pubSub.subscribe).toBeCalledWith(
      PUBSUB_SCROLL,
      expect.any(Function)
    );
  });
});
