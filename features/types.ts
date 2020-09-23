const today = new Date();
const person = {
  age: 20,
};
person.age;

// classes
class Color {}
const red: Color = new Color();

let apples: number;
apples = 10;
console.log(apples);
let hasName: boolean = true;

let nouthingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

//Array
let colors: string[] = ["red", "green", "blue"];

//object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 10,
};

//function
const logNumber = (i: number) => {
  console.log(i);
  return i;
};

//function
function divide(a: number, b: number): number {
  return a - b;
}

const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

//Destructuring
const logwheather = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(date);
  console.log(weather);
};

logwheather(todaysWeather);
