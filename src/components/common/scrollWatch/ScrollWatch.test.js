import ScrollWatch from "./ScrollWatch";
import {
  PUBSUB_SCROLL,
  PUBSUB_SCROLL_WATCH,
  SW_TYPE_ENTER,
  SW_TYPE_EXIT,
  SW_DIR_DOWN,
  SW_DIR_UP
} from "@constants";

jest.mock("@hocs", () => ({
  withPubSub: Component => Component,
  withDOM: Component => Component
}));

describe("Testing components/slide", () => {
  let subscribeFunc;
  let top = 0;
  const windowHeight = 1000;

  const pubSub = {
    subscribe: jest.fn((e, func) => {
      subscribeFunc = func;
    }),
    publish: jest.fn()
  };

  const window = {
    innerHeight: windowHeight
  };

  const child = {
    getBoundingClientRect: jest.fn(() => ({ top, bottom: top + 100 }))
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should return the passed child element", () => {
    expect(ScrollWatch({ pubSub, child })).toBe(child);
  });

  it("Should subscribe to the pubsub scroll channel", () => {
    ScrollWatch({ pubSub, child, window });

    expect(pubSub.subscribe).toBeCalledWith(
      PUBSUB_SCROLL,
      expect.any(Function)
    );
  });

  it("Should publish event to correct channel when entered", () => {
    ScrollWatch({ pubSub, child, window });

    top = windowHeight + 100;
    subscribeFunc();

    top = windowHeight - 100;
    subscribeFunc();

    expect(pubSub.publish).toBeCalledWith(PUBSUB_SCROLL_WATCH, {
      type: SW_TYPE_ENTER,
      direction: SW_DIR_UP,
      target: child
    });
  });

  it("Should publish event to the correct channel when exited", () => {
    ScrollWatch({ pubSub, child, window });

    top = 100;
    subscribeFunc();

    top = -200;
    subscribeFunc();

    expect(pubSub.publish).toBeCalledWith(PUBSUB_SCROLL_WATCH, {
      type: SW_TYPE_EXIT,
      direction: SW_DIR_UP,
      target: child
    });
  });

  it("Should not publish any new event when still in focus", () => {
    ScrollWatch({ pubSub, child, window });

    top = 200;
    subscribeFunc();

    top = 100;
    subscribeFunc();

    expect(pubSub.publish).not.toBeCalled();
  });

  it("Should not publish any event when has not got focus", () => {
    ScrollWatch({ pubSub, child, window });

    top = 2000;
    subscribeFunc();

    top = 1800;
    subscribeFunc();

    expect(pubSub.publish).not.toBeCalled();
  });
});
