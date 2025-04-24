require("./xyz") // calling one module into another

// const {x,calculateSum} = require("./calculate/sum")
const {calculateSum,calculateMultiply} = require("./calculate")
var name1 = "Namaste NODEJS"
var a = 10;
var b = 20;

// console.log(name1);
// console.log(a + b);

// console.log(global) // return us the global object
// console.log(this) // empty object
calculateSum(a,b);
calculateMultiply(a,b);
console.log(globalThis === global)