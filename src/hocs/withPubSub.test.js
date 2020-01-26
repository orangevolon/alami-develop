import withPubSub from "./withPubSub";
import createPubSub from "../lib/pubSub";

jest.mock("../lib/pubSub", () =>
  jest.fn(() => ({
    testKey: "testValue"
  }))
);

describe("Testing hocs/withPubSub", () => {
  const InnerComponent = jest.fn();

  beforeEach(() => {
    InnerComponent.mockReset();
  });

  it("Should call the pubsub generator immediately", () => {
    expect(createPubSub).toBeCalledTimes(1);
  });

  it("Should return component", () => {
    expect(withPubSub(InnerComponent)).toEqual(expect.any(Function));
  });

  it("Should add pubSub to the wrapped component's props", () => {
    withPubSub(InnerComponent)({ testProp: "testValue" });
    expect(InnerComponent).toBeCalledWith(
      expect.objectContaining({
        testProp: "testValue",
        pubSub: {
          testKey: "testValue"
        }
      })
    );
  });
});
