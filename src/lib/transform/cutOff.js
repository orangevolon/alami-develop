export default (input, min = 0, max = 1) => {
  if (input > max) {
    return max;
  } else if (input < min) {
    return min;
  }

  return input;
};
