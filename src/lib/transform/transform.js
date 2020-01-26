import scale from "./scale";
import square from "./square";
import inverseSquare from "./inverseSquare";
import cutOff from "./cutOff";
import offset from "./offset";

const transform = (input = 0) => {
  const value = input;

  return {
    // transforms
    scale: (...props) => transform(scale(value, ...props)),
    square: (...props) => transform(square(value, ...props)),
    inverseSquare: (...props) => transform(inverseSquare(value, ...props)),
    cutOff: (...props) => transform(cutOff(value, ...props)),
    offset: (...props) => transform(offset(value, ...props)),
    // output
    format: predicate => predicate(value),
    peek: predicate =>
      (predicate ? predicate(value) : console.log(value)) || transform(value),
    value: () => value
  };
};

export default transform;
