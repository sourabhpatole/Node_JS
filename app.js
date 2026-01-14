// require("./xyz");

// const obj = require("./sum");
// const { calculateSum, x } = require("./calculate/sum");
// const { calculateMultiply } = require("./calculate/multiply");

// nested import method
const { calculateMultiply, calculateSum, x } = require("./calculate");
// import { calculateSum } from "./sum.js";
var fname = "Namaste Node JS";
var a = 10;
var b = 20;
l = "this is strich type checking with common and ejs";
console.log(fname);
console.log(a + b);
// console.log(global);
// console.log(this);
calculateSum(2, 4);
calculateMultiply(4, 2);
console.log(x);
