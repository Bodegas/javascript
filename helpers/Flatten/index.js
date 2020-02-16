const reducer = (accumulator, currentValue) => {
  if (Array.isArray(currentValue)) {
    return [...accumulator, ...currentValue.reduce(reducer, [])];
  }
  return [...accumulator, currentValue]
};

export const flattenArray = array => {
  return array.reduce(reducer, []);
};

