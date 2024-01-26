// Tipos Básicos

let age: number = 5;
const firstName: string = "Gustavo";
const isValid: boolean = true;
const anyType: any = 10;
const listIds: number[] = [1, 2, 3, 4, 5, 6];
const listBoolean: boolean[] = [true, false, true, true];
const names: string[] = ["Ricardo", "Dani", "Isabella"];
console.log(age);

// Tupla

const person: readonly string[] = [];
const person2: [number, string] = [2, ""];
const people: [string, number][] = [
  ["Test", 1],
  ["Test", 2],
];

// Intersection
const product: string | number | boolean | [] = [];

// Enum
enum Sizes {
  G = "BIG",
  P = "SMALL",
  XP = "EXTRA SMALL",
}

enum Direct {
  Up = 1,
  Down,
}

console.log(Sizes);
console.log(Direct);

// Type Assertions
const productName : any = 'Ball'
let productId = <string>productName