// Tipos Básicos
let age = 5;
const firstName = "Gustavo";
const isValid = true;
const anyType = 10;
const listIds = [1, 2, 3, 4, 5, 6];
const listBoolean = [true, false, true, true];
const names = ["Ricardo", "Dani", "Isabella"];
console.log(age);
// Tupla
const person = [];
const person2 = [2, ""];
const people = [
    ["Test", 1],
    ["Test", 2],
];
// Intersection
const product = [];
// Enum
var Sizes;
(function (Sizes) {
    Sizes["G"] = "BIG";
    Sizes["P"] = "SMALL";
    Sizes["XP"] = "EXTRA SMALL";
})(Sizes || (Sizes = {}));
var Direct;
(function (Direct) {
    Direct[Direct["Up"] = 1] = "Up";
    Direct[Direct["Down"] = 2] = "Down";
})(Direct || (Direct = {}));
console.log(Sizes);
console.log(Direct);
// Type Assertions
const productName = 'Ball';
let productId = productName;
