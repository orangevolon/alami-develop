import SplashSection from "./SplashSection";

jest.mock("../../../hocs", () => ({
  withPubSub: Component => Component,
  withDOM: Component => props =>
    Component({ ...props, document: global.document })
}));

describe("Testing components/sections/splashSection", () => {
  const pubSub = { subscribe: jest.fn() };

  it("Should render component correctly", () => {
    expect(SplashSection({ pubSub })).toMatchSnapshot();
  });

  it("Should subscribe to pubSub", () => {
    SplashSection({ pubSub });
    expect(pubSub.subscribe).toBeCalledWith(
      expect.any(String),
      expect.any(Function)
    );
  });
});
