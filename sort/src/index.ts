import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumberCollection";
import { CharactersCollection } from "./CharactersCollection";

const numberCollection = new NumberCollection([4, 3, 6, 1, 2, 1, 0]);
const charactersCollection = new CharactersCollection("adeFGHsuhada");

const sorter = new Sorter(numberCollection);
const sort_chart = new Sorter(charactersCollection);
console.log(charactersCollection.data);
sort_chart.sort();
console.log(charactersCollection.data);

console.log(numberCollection.data);
sorter.sort();
console.group("number-collection");
console.log(numberCollection.data);
console.groupEnd();
