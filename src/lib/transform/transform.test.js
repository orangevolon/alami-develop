import transform from "./transform";
import scale from "./scale";

jest.mock("./scale");
jest.mock("./square");
jest.mock("./inverseSquare");
jest.mock("./cutOff");
jest.mock("./offset");

describe("Testing transform", () => {
  it("Should return an object with transforms", () => {
    expect(transform()).toEqual(
      expect.objectContaining({
        scale: expect.any(Function),
        square: expect.any(Function),
        inverseSquare: expect.any(Function),
        cutOff: expect.any(Function),
        offset: expect.any(Function),
        format: expect.any(Function),
        value: expect.any(Function)
      })
    );
  });

  it("Should return another transform object when any of the transforms called", () => {
    const result = transform();

    expect(result.scale()).toEqual(
      expect.objectContaining({
        scale: expect.any(Function)
      })
    );
  });

  it("Should pass the value to the next transform with the props", () => {
    transform(1).scale(2);
    expect(scale).toBeCalledWith(1, 2);
  });

  it("Should pass the internal value to the format function directly", () => {
    expect(transform(1).format(val => `formatted ${val}`)).toEqual(
      "formatted 1"
    );
  });

  it("Should return the internal value when value called", () => {
    expect(transform(1).value()).toBe(1);
  });
});
