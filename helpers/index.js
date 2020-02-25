import { deepEqual } from "./DeepEqual";
import { flattenArray } from "./Flatten";
import { objectA, objectB, arrayA } from "./assets.js";

console.log("DEEP EQUAL");
console.log(deepEqual(objectA, objectB));

console.log("FLATTEN");
console.log(flattenArray(arrayA));
