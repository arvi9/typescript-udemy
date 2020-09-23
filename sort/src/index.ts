import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

console.log("-----------------Number Sorter----------------------");
const nuberCollection = new NumbersCollection([10, 3, -5, 0]);
nuberCollection.sort();
// const sorter = new Sorter(nuberCollection);
// sorter.sort();
// console.log(nuberCollection.data);

console.log("----------------Character Sorter-----------------------");
const charactersCollection = new CharactersCollection("Xaab");
charactersCollection; // const stringSorter = new Sorter(charactersCollection);
// stringSorter.sort();

console.log("----------------Linked List Sorter-----------------------");
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

// const sorterList = new Sorter(linkedList);
linkedList.sort();
linkedList.print();
