import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumberCollection";
import { CharactersCollection } from "./CharactersCollection";
import LinkedList from "./LinkedList";

const numberCollection = new NumberCollection([4, 3, 6, 1, 2, 1, 0]);
console.log(numberCollection.data);
numberCollection.sort();
console.log(numberCollection.data);

const charactersCollection = new CharactersCollection("XyadeFGHsuhada");
console.log(charactersCollection.data);
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedLlist = new LinkedList();
linkedLlist.add(1);
linkedLlist.add(400);
linkedLlist.add(2);
console.log(`linkedlist length  ${linkedLlist.length}`);
// console.log(linkedLlist.at(1).data);
linkedLlist.print();
linkedLlist.sort();
linkedLlist.print();
