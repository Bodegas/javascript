import { deepEqual } from "./DeepEqual";
import { flattenArray } from "./Flatten";

// DEEP EQUAL
const a = {
  k1: 1,
  k2: 2,
  k3: {
    k31: 31,
    k32: 32,
    k33: { k33: "fddf" }
  },
  k4: 4
};

const b = {
  k1: 1,
  k2: 2,
  k3: {
    k31: 31,
    k32: 32,
    k33: { k33: "fddf" }
  },
  k4: 4
};

console.log("DEEP EQUAL");
console.log(deepEqual(a, b));

// FLATTEN
const array1 = [2, 3, [21, 22], 4, [88, 43, 7, [0, 1, [7, 95]]], 9];
console.log("FLATTEN");
console.log(flattenArray(array1));
