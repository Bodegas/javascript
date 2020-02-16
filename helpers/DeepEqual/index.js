const haveArraySameLength = (array1, array2) => {
  return array1.length === array2.length;
};

const areArrayEquals = (array1, array2) => {
  const sortedArray1 = array1.sort();
  const sortedArray2 = array2.sort();
  return !sortedArray1.some((key, index) => key !== sortedArray2[index]);
};

const isObject = input => {
  return typeof input === "object" && input !== null;
};

const haveObjectsSameValues = (object1, object2) => {
  for (const key in object1) {
    if (!isObject(object1[key])) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    if (!deepEqual(object1[key], object2[key])) {
      return false;
    }
  }
  return true;
};

export const deepEqual = (object1, object2) => {
  if (object1 === object2) {
    return true;
  }

  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (!haveArraySameLength(object1Keys, object2Keys)) {
    return false;
  }

  if (!areArrayEquals(object1Keys, object2Keys)) {
    return false;
  }

  if (!haveObjectsSameValues(object1, object2)) {
    return false;
  }

  return true;
};
