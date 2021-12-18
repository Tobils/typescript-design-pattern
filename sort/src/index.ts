import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumberCollection";

const numberCollection = new NumberCollection([4, 3, 6, 1, 2, 1, 0]);
const sorter = new Sorter(numberCollection);
console.log(numberCollection.data);
sorter.sort();
console.group("number-collection");
console.log(numberCollection.data);
console.groupEnd();
