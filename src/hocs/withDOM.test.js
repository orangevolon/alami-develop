import withDOM from "./withDOM";

describe("Testing hocs/withDOM", () => {
  const InnerComponent = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should return a component", () => {
    expect(withDOM(InnerComponent)).toEqual(expect.any(Function));
  });

  it("Should add document and window =to the wrapped component's props", () => {
    withDOM(InnerComponent)({ testProp: "test value" });
    expect(InnerComponent).toBeCalledWith(
      expect.objectContaining({
        testProp: "test value",
        document: expect.any(Object),
        window: expect.any(Object)
      })
    );
  });
});
