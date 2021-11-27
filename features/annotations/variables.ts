let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

/** built in object */
let now: Date = new Date();

/** array */
let colors: string[] = ["red", "green", "blue"];

/** classes */
class Car {}
let car: Car = new Car();

/** Object literal */
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

/** function */
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

/**
 * when to use annotations
 * 1. function that return 'any' type
 * 2. when we declare a variable on one line
 * 3. when variable whose type cannot be inferred correctly
 */

/** 1. any type for coordinates */
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates);
console.log(coordinates.xs); // harusnya gak boleh karena undefined
/** solution */
const yescoordinates: { x: number; y: number } = JSON.parse(json);
console.log(yescoordinates.x);

/** 2. when we declare a variable on one line */
let words = ["red", "green", "blue"];
let foundWord;
let yesfoundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
    yesfoundWord = true;
  }
}

/** 3. when variable whose type cannot be inferred correctly */
let numbers = [-10, -1, 12];
let numberAboveZero = false;
let yesnumberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    // numberAboveZero = numbers[i]
    yesnumberAboveZero = numbers[i];
  }
}
