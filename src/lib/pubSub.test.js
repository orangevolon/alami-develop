import createPubSub from "./pubSub";

describe("Testing src/lib/pubSub", () => {
  const TEST_CHANNEL = "TEST_CHANNEL";
  const subscribers = [...new Array(3)].map(() => jest.fn());
  const testEvent = {};

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should return a function", () => {
    expect(createPubSub).toEqual(expect.any(Function));
  });

  it("Should return an object containing publish and subscribe when called", () => {
    expect(createPubSub()).toEqual(
      expect.objectContaining({
        publish: expect.any(Function),
        subscribe: expect.any(Function)
      })
    );
  });

  it("Should call all subscribers when publish called", () => {
    const pubSub = createPubSub();

    subscribers.forEach(sub => pubSub.subscribe(TEST_CHANNEL, sub));
    pubSub.publish(TEST_CHANNEL, testEvent);

    subscribers.forEach(sub => expect(sub).toBeCalledWith(testEvent));
  });

  it("Should return and object containing unsubscribe when subscription made", () => {
    const pubSub = createPubSub();
    const sub = jest.fn();

    const result = pubSub.subscribe(TEST_CHANNEL, sub);
    expect(result.unsubscribe).toEqual(expect.any(Function));
  });

  it("Should not call the subscriber when the corresponding unsubscribe called", () => {
    const pubSub = createPubSub();

    const subsResult = subscribers.map(sub =>
      pubSub.subscribe(TEST_CHANNEL, sub)
    );

    subsResult[1].unsubscribe();
    pubSub.publish(TEST_CHANNEL, testEvent);

    expect(subscribers[1]).not.toBeCalled();
  });
});
