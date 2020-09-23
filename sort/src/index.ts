import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

console.log("-----------------Number Sorter----------------------");
const nuberCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(nuberCollection);
sorter.sort();
console.log(nuberCollection.data);

console.log("----------------Character Sorter-----------------------");
const charactersCollection = new CharactersCollection("Xaab");
const stringSorter = new Sorter(charactersCollection);
stringSorter.sort();
