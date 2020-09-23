const carmakers: string[] = ["ford", "toyoto", "chevy"];
const dates = [new Date(), new Date()];
const arr = [1, 2, 2.0, "arv", false, new Date()];
const car = carmakers[0];

const mycar = carmakers.pop();

carmakers.push("100");
carmakers.map((car: string): string => {
  return car.toLowerCase();
});

//Flixible
const importantDates: (Date | string)[] = [new Date()];
importantDates.push("2030-10-10");

